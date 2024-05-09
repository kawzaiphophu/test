import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import Swal from 'sweetalert2';

import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/Button/CustomButton';
import Files from '../../api/Files';
import NewsApi from '../../api/News';
import NewsType from '../../types/news.type';
import Upload_icon from '../../assets/icon/Media/Image_01.svg';


interface ModalProps {
    modalTitle: string;
    handleClose: () => void;
    newsId?: number | null;
}

export default function NewsModal({ modalTitle, handleClose, newsId }: ModalProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [news, setNews] = useState<NewsType | null>();


    useEffect(() => {
        if (newsId) {
            findOne();
        }
    }, [newsId]);

    const findOne = async () => {
        try {
            const response = await NewsApi.findOne(newsId as number);
            const data = response.data;
            setNews(data);
        } catch (error) {
            console.log("Error fetching news:", error);
        }
    };

    const handleChange = (name: keyof NewsType, value: string) => {
        setNews(prevState => ({
            ...prevState!,
            [name]: value
        }));
    };

    const handleChangeFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImage(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const createSubmit = async () => {
        try {
            const response = await Files.create(image, 'news');
            const data = response.data[0];
            const updatedNews = {
                cover: data.thumbnailFilePath.toString(),
                image: data.filePath.toString(),
                title: news?.title?.toString() || '',
                description: news?.description?.toString() || ''
            };
            if (response.status === 201 && news !== null) {
                const res = await NewsApi.create(updatedNews);
                if (res === 204) {
                    Swal.fire({
                        icon: 'success',
                        title: 'News Created Successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    handleClose();
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error Occurred',
                    text: 'Failed to create news. Please try again later.',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const editSubmit = async () => {
        try {
            let data: any = {
                "title": news!.title,
                "description": news!.description
            };
            if (image) {
                const response = await Files.create(image, 'news');
                const img = response.data[0];
                data.cover = img.thumbnailFilePath;
                data.image = img.filePath;
            } else if (news && news.cover && news.image) {
                data.cover = news.cover;
                data.image = news.image;
            }

            const response = await NewsApi.update(newsId as number, data);
            if (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Edit Successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                handleClose();
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error Occurred',
                text: 'Failed to create or edit news. Please try again later.',
                confirmButtonText: 'OK'
            });
        }
    };


    const isFormFilled = (imagePreview !== null && news && news.title !== '' && news.description !== '');

    // const isFormEdited = (news &&
    //     news.title === news.title &&
    //     news.description === news.description &&
    //     news.cover === news.cover &&
    //     news.image === news.image);

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={BoxStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalTitle}
                </Typography>
                <Box sx={{ mt: 2 }}>
                    <Typography>
                        รูปภาพ*
                    </Typography>
                    <label htmlFor="image" style={labelStyle}>
                        {imagePreview ? (
                            <img src={imagePreview} alt="Uploaded" style={imgStyle} />
                        ) : (
                            newsId && news && news.cover ? (
                                <img src={news.cover} alt="Cover" style={imgStyle} />
                            ) : (
                                <React.Fragment>
                                    <img src={Upload_icon} alt="Placeholder" style={imgStyle} />
                                    <Typography>Upload Image</Typography>
                                </React.Fragment>
                            )
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            id="image"
                            onChange={(event) => handleChangeFile(event)}
                            style={{ display: 'none' }}
                        />
                    </label>
                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography>
                        ชื่อข่าว*
                    </Typography>
                    <CustomInput
                        label="headline"
                        placeholder={'ชื่อข่าว'}
                        id="headline"
                        value={news?.title || ''}
                        onChange={(value) => handleChange('title', value)} />

                </Box>
                <Box sx={{ mt: 2 }}>
                    <Typography>
                        รายละเอียด*
                    </Typography>
                    <CustomInput
                        label="description"
                        placeholder={'รายละเอียด'}
                        id="description"
                        value={news?.description || ''}
                        onChange={(value) => handleChange('description', value)} />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text='ยกเลิก' color='primary' style='outlined' onClick={handleClose} />
                    {newsId ? (
                        <CustomButton text='แก้ไข' disabled={false} onClick={editSubmit} />
                    ) : (
                        <CustomButton text='ยืนยัน' disabled={!isFormFilled} onClick={createSubmit} />
                    )}
                </Box>
            </Box>
        </Modal>
    );
};

const BoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80vw',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};
const labelStyle = {
    width: '100%',
    height: '200px',
    border: '2px dashed #aaa',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
};
const imgStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '5px',
};






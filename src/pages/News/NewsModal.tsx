import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography } from '@mui/material';

import CustomInput from '@components/input/CustomInput';
import CustomButton from '@components/Button/CustomButton';
import { INews } from 'types/news.type';
import Upload_icon from '@assets/icon/Media/Image_01.svg';
import SuccessSwal from '@components/Alert/SuccessSwal';
import ErrorSwal from '@components/Alert/ErrorSwal';
import NewsApi from '@api/news.api';
import Files from '@api/file.api';
interface ModalProps {
    modalTitle: string;
    handleClose: () => void;
    newsId?: number | null;
}

export default function NewsModal({ modalTitle, handleClose, newsId }: ModalProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [image, setImage] = useState<File | null>(null);
    const [news, setNews] = useState<INews>();


    useEffect(() => {
        if (newsId) {
            getNewsById();
        }
    }, [newsId]);

    const getNewsById = async () => {
        try {
            const { data } = await NewsApi.findOne(newsId as number);
            setNews(data);
        } catch (error) {
            ErrorSwal({
                // title:error.mess
            })
        }
    };

    const handleChange = (name: keyof INews, value: string) => {
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

    const handleSubmit = async () => {
        try {
            let body: INews = {
                title: news?.title?.toString() || '',
                description: news?.description?.toString() || '',
                image: '',
                cover: ''
            };

            if (newsId) {
                // Editing existing news
                if (image) {
                    const { data } = await Files.create(image, 'news');
                    body.cover = data[0]?.thumbnailFilePath;
                    body.image = data[0]?.filePath;
                } else if (news && news.cover && news.image) {
                    body.cover = news.cover;
                    body.image = news.image;
                }

                const status = await NewsApi.update(newsId, body);
                if (status) {
                    SuccessSwal({
                        icon: 'success',
                        title: 'Success',
                        text: 'Edit Successfully!',
                    });
                    handleClose();
                }
            } else {
                // Creating new news
                const response = await Files.create(image, 'news');
                const imageData = response.data[0];
                body.cover = imageData.thumbnailFilePath.toString();
                body.image = imageData.filePath.toString();
                const res = await NewsApi.create(body);
                if (res === 204) {
                    SuccessSwal({
                        icon: 'success',
                        title: 'News Created Successfully!',
                    });
                    handleClose();
                }
            }
        } catch (error) {
            console.error('Error:', error);
            ErrorSwal({
                icon: 'error',
                title: 'Error Occurred',
                text: 'Failed to create or edit news. Please try again later.',
            });
        }
    };

    const isFormFilled = (imagePreview !== null && news && news.title !== '' && news.description !== '');

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
                        placeholder={'รายละเอียด'}
                        id="description"
                        value={news?.description || ''}
                        onChange={(value) => handleChange('description', value)} />

                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text='ยกเลิก' color='primary' style='outlined' onClick={handleClose} />
                    <CustomButton text='ยืนยัน' isDisabled={!isFormFilled} onClick={handleSubmit} />
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






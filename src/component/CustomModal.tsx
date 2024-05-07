import React, { useState } from 'react';
import { Modal, Box, Typography } from '@mui/material';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import axios from 'axios';

interface CustomModalProps {
    modalTitle: string,
    handleClose: () => void
}

const CustomModal = ({ modalTitle, handleClose }: CustomModalProps) => {
    const [formData, setFormData] = useState({
        cover: '',
        title: '',
        description: ''
    });
    const handleChange = (name: string, value: string) => {
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        console.log(formData);
    };
    const handleChangeFile = (name: string, event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setFormData(prevState => ({
                ...prevState,
                [name]: file
            }));
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('https://harnkan-api.depwhite.com/api/news', formData);
            console.log('Response:', response.data);

        } catch (error) {
            console.error('Error:', error);
        }
    };
    const isFormFilled = formData.cover !== '' && formData.title !== '' && formData.description !== '';

    return (
        <Modal
            open={true}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 1000,
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 4,
            }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalTitle}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    รูปภาพ*
                    <Box>
                        <input 
                        type="file" 
                        name="image" 
                        id="image" 
                        onChange={(event) => handleChangeFile('cover', event)} />
                    </Box>
                    ชื่อข่าว*
                    <Box>
                        <CustomInput 
                        label="headline" 
                        placeholder={'ชื่อข่าว'} 
                        id="headline" 
                        onChange={(value) => handleChange('title', value)} />
                    </Box>
                    รายละเอียด*
                    <Box>
                        <CustomInput 
                        label="description" 
                        placeholder={'รายละเอียด'} 
                        id="description" 
                        onChange={(value) => handleChange('description', value)} />
                    </Box>
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <CustomButton text='ยกเลิก' color='primary' style='outlined' onClick={handleClose} />
                    <CustomButton text='ยืนยัน' disabled={!isFormFilled} onClick={handleSubmit} />
                </Box>
            </Box>
        </Modal>
    );
};

export default CustomModal;

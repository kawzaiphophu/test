import * as React from 'react';
import { Box, Button } from '@mui/material'
import CustomButton from '../../component/Button/CustomButton';
import CustomInput from '../../component/CustomInput';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import Menu_icon from '../../assets/icon/Menu/More_Vertical.svg'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Inews from '../../types/news.type';
import NewsModal from './NewsModal';
import NewsApi from '../../api/News';
import SuccessSwal from '../../component/Alert/SuccessSwal';
import ErrorSwal from '../../component/Alert/ErrorSwal';
import ConfirmSwal from '../../component/Alert/ConfirmSwal';


export default function News() {

    const [news, setNews] = useState<Inews[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editNewsId, setEditNewsId] = useState<number | null>(null);

    const fetchData = async () => {
        try {
            const params = { page: 1, pageLimit: 10 };
            const response = await NewsApi.findAll(params);
            setNews(response.data)
        } catch (err) {
            console.log("Error fetching products:", err);
        }
    };
    useEffect(() => {
        fetchData();
    }, [isModalOpen]);


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditNewsId(null);
    };

    const handleDelete = async (id: number) => {
        const status = await ConfirmSwal({
            title: 'Are you sure?',
            text: 'You will not be able to recover this item!'
        });

        if (status.isConfirmed) {
            try {
                const response = await NewsApi.remove(id);
                if (response === 204) {
                    SuccessSwal({
                        title: 'Deleted!',
                        text: 'Your item has been deleted.',
                        icon: 'success'
                    });
                    fetchData();
                } else {
                    ErrorSwal({})
                }
            } catch (error) {
                console.error(error)
            }
        }
    };


    const handleEdit = (id: number) => {
        setEditNewsId(id);
        setIsModalOpen(true);
    };

    return (
        <Box sx={containerStyles}>
            <Box sx={titleStyles}>จัดการข่าว</Box>
            <Box sx={searchBoxStyles}>
                <CustomInput label='ค้นหา' disabled={false} placeholder='ค้นหาข่าว' />
                <CustomButton text={"ค้นหา"} style={"contained"} size={"large"} color='primary' />
            </Box>
            <Box sx={addButtonStyles}>
                <CustomButton text={"+ เพิ่มข่าว"} onClick={handleOpenModal} />
            </Box>
            {isModalOpen && (
                <NewsModal
                    modalTitle={editNewsId ? "แก้ไขข่าว" : "เพิ่มข่าว"}
                    handleClose={handleCloseModal}
                    newsId={editNewsId}
                />
            )}
            <TableContainer>
                <Table sx={tableStyles} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ลำดับ</StyledTableCell>
                            <StyledTableCell align="center">รูปภาพ</StyledTableCell>
                            <StyledTableCell align="center">ชื่อ</StyledTableCell>
                            <StyledTableCell align="center">รายละเอียด</StyledTableCell>
                            <StyledTableCell align="center">จัดการ</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {news.map((item, index) => (
                            <StyledTableRow key={item.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {index + 1}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <img style={{ maxWidth: '5rem', maxHeight: '10rem' }} src={item.cover} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{item.title}</StyledTableCell>
                                <StyledTableCell align="center">{item.description}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <PopupState variant="popover" popupId={`menu-popup-${item.id}`}>
                                        {(popupState) => (
                                            <React.Fragment>
                                                <Button {...bindTrigger(popupState)}>
                                                    <img src={Menu_icon} alt="" />
                                                </Button>
                                                <Menu {...bindMenu(popupState)}>
                                                    <MenuItem onClick={() => handleEdit(item.id as number)}>แก้ไข</MenuItem>
                                                    <hr />
                                                    <MenuItem onClick={() => handleDelete(item.id as number)}>ลบรายการ</MenuItem>
                                                </Menu>
                                            </React.Fragment>
                                        )}
                                    </PopupState>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
        </Box>
    );
};



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    borderBottom: 'none',
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
        background: 'none'
    },
    height: '100px'

}));

const containerStyles = {
    width: 'auto',
    mt: 7,
    ml: 1,
    p: 4,
    borderRadius: 3,
    bgcolor: 'primary.main',
};

const titleStyles = {
    display: "flex",
    fontWeight: 600,
    color: 'secondary.main',
    borderRadius: 2,
};

const searchBoxStyles = {
    display: 'flex',
    alignItems: 'center',
};

const addButtonStyles = {
    display: 'flex',
    justifyContent: 'end',
    p: 2,
};
const tableStyles = {
    backgroundColor: 'transparent',
    '& th, & td': {
        borderBottom: '1px solid #dee2e6',
    },
};

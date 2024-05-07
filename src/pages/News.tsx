import * as React from 'react';
import { Box, Button } from '@mui/material'
import CustomButton from '../component/CustomButton';
import CustomInput from '../component/CustomInput';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import Menu_icon from '../assets/icon/Menu/More_Vertical.svg'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import NewsProps from '../types/NewsProps';
import { FetchNews } from '../utils/FetchNews';
import CustomModal from '../component/CustomModal';

const News = () => {
    const [NewsArr, setNewsArr] = useState<NewsProps[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchNews();
                setNewsArr(data);
            } catch (err) {
                console.log("Error fetching products:", err);
            }
        };
        fetchData();
    }, []);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const menuPopupState = (id: number) => {
        return (
            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button sx={menuButtonStyles} {...bindTrigger(popupState)}>
                            <img src={Menu_icon} alt="" />
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem >แก้ไข</MenuItem>
                            <hr />
                            <MenuItem >ลบรายการ</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        );
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
                <CustomModal
                    modalTitle="เพิ่มข่าว"
                    handleClose={handleCloseModal}
                />
            )}
            <TableContainer component={Paper}>
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
                        {NewsArr.map((news) => (
                            <StyledTableRow key={news.id}>
                                <StyledTableCell component="th" scope="row" align="center">
                                    {news.id}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    <img style={{ maxWidth: '5rem', maxHeight: '5rem' }} src={news.cover} alt="" />
                                </StyledTableCell>
                                <StyledTableCell align="center">{news.title}</StyledTableCell>
                                <StyledTableCell align="center">{news.description}</StyledTableCell>
                                <StyledTableCell align="center">{menuPopupState(news.id)}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default News;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.primary.main,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
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
    minWidth: 700,
};

const menuButtonStyles = {
    filter: (theme: any) => theme.palette.mode === "dark" ? 'invert(1)' : '',
};

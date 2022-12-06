import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../store';
import { closeD, openD } from '../utils/slices/modalSlice'
import { Liink } from '../utils/styled';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalDelete = () => {
    const { doorD } = useSelector((state: RootState) => state.modalSlice);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const onDelete = async () => {
        try {
            await axios.delete(`http://localhost:8000/api/books/${id}`)
        } catch (err) {
            alert(err);
        }
        dispatch(closeD());
        navigate('/');
    }


    return (
        <div>
            <Modal
                open={doorD}
                onClose={() => { dispatch(closeD()); navigate('/'); }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        정말 삭제하시겠습니까?
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb:2, fontWeight: 'fontWeightLight', fontSize: '19px' }} align='left'>
                        한 번 삭제하면 되돌릴 수 없습니다. 신중하게 결정해 주세요.
                    </Typography>
                    <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
                    <Button size="large" color="error" onClick={onDelete}>삭제</Button>
                    <Liink to='/'> <Button size="large" onClick={() => { dispatch(closeD()) }}>취소</Button></Liink>
                    
                    </div>
                </Box>
            </Modal>
        </div>
    )

}

export default ModalDelete;
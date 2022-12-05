import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Book } from '../interface/interface';
import { Link } from 'react-router-dom';
import styledCom from 'styled-components';
import Modal from './../utils/modal';
import { useDispatch } from 'react-redux';
import { open } from '../utils/slices/modalSlice';
import { Liink } from '../utils/styled';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
}));

const BookItem = ({ book }: { book: Book }) => {
  const { title, author, year, price, id, imageUrl } = book;
  const dispatch=useDispatch();
  return (
    <>
    <Item>
      <CardMedia
        component="img"
        height="250"
        image={imageUrl}
        alt={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          작가: {author}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          출판연도: {year} | 가격: {price}원
        </Typography>
      </CardContent>
      <Liink to={`/api/books/${id}`}><Button size="large" onClick={() => { dispatch(open()) }}> 수정 </Button></Liink>
      <Button size="large">삭제</Button>
      
    </Item>

    </>
  );
}

export default BookItem;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BookItem from './BookItem';
import { Book } from '../interface/interface';
import { useSelector } from 'react-redux';
import { RootState } from '../store';


const BookList = () => {
    const [books, setBooks] = useState([]);
    const {changeChecked}=useSelector((state: RootState) => state.submitSlice);
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get('http://localhost:8000/api/books');
            setBooks(res.data);
        }
        fetchBooks();
    }, [changeChecked]);

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 2 }}>

                {
                    books.map((book: Book) => {
                        return <Grid item xs={3}> <BookItem key={`${book.title}-${book.id}`} book={book} /></Grid>
                    })
                }

            </Grid>
        </Box>
    );
}

export default BookList;
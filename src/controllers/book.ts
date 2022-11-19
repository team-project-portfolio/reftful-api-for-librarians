import { Response as Res, Request as Req, NextFunction as Next } from 'express';
import {
  createBookService,
  getBooksService,
  getBookService,
  updateBookService,
  deleteBookService,
} from '../services';

const createBook = async (req: Req, res: Res, next: Next): Promise<Res> => {
  const bookInfo = { ...req.body };
  const newBook = await createBookService.createBook(bookInfo);
  return res.status(201).json(newBook);
};

const getBooks = async (req: Req, res: Res, next: Next): Promise<Res> => {
  const books = await getBooksService.getBooks();
  return res.status(200).json(books);
};

const getBook = async (req: Req, res: Res, next: Next): Promise<Res> => {
  const { id } = req.params;
  const book = await getBookService.getBook(id);
  return res.status(200).json(book);
};

const updateBook = async (req: Req, res: Res, next: Next): Promise<Res> => {
  const { id } = req.params;
  const updateInfo = { ...req.body };
  const updatedBook = await updateBookService.updateBook(id, updateInfo);
  console.log(updatedBook);
  return res.status(200).json(updatedBook);
};

const deleteBook = async (req: Req, res: Res, next: Next): Promise<Res> => {
  const { id } = req.params;
  const deletedBook = await deleteBookService.deleteBook(id);
  return res.status(200).json(deletedBook);
};

export { createBook, getBooks, getBook, updateBook, deleteBook };

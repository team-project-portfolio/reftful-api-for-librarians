import { Response as Res, Request as Req, NextFunction as Next } from 'express';
import {
  createBookService,
  getBooksService,
  updateBookService,
  deleteBookService,
  changeBookVisibiltyService,
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
  const book = await getBooksService.getBooks(id);
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
  const result = await deleteBookService.deleteBook(id);
  return res.status(200).json(result);
};

const changeBookVisibilty = async (
  req: Req,
  res: Res,
  next: Next,
): Promise<Res> => {
  const { id } = req.params;
  const result = await changeBookVisibiltyService.changeVisibility(id);
  return res.status(200).json(result);
};

export {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  changeBookVisibilty,
};

import { Response, Request, NextFunction } from 'express';
import {
  CreateBookService,
  GetBooksService,
  GetBookService,
  UpdateBookService,
  DeleteBookService,
} from '../services';

const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const bookInfo = { ...req.body };
  const newBook = await CreateBookService.createBook(bookInfo);
  res.status(201).json(newBook);
};

const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBooksService.getBooks();
  res.status(200).json(books);
};

const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const bookId = req.params.id;
  const book = await GetBookService.getBook(bookId);
  res.status(200).json(book);
};

const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const bookId = req.params.id;
  const updateInfo = { ...req.body };
  const updatedBook = await UpdateBookService.updateBook(bookId, updateInfo);
  res.status(200).json(updatedBook);
};

const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const bookId = req.params.id;
  const deletedBook = await DeleteBookService.deleteBook(bookId);
  res.status(200).json(deletedBook);
};

export { createBook, getBooks, getBook, updateBook, deleteBook };

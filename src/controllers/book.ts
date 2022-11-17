import { Response, Request, NextFunction } from 'express';
import { GetBookService } from '../services';

const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBookService.getBooks();
  res.status(200).json({ books });
};

const getBooks = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBookService.getBooks();
  res.status(200).json({ books });
};

const getBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBookService.getBooks();
  res.status(200).json({ books });
};

const updateBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBookService.getBooks();
  res.status(200).json({ books });
};

const deleteBook = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const books = await GetBookService.getBooks();
  res.status(200).json({ books });
};

export { createBook, getBooks, getBook, updateBook, deleteBook };

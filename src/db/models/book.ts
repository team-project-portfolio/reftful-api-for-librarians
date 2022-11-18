import { IBook, BookInfo, BookInfoById } from '../../types/book';
import Book from '../schemas/book';

interface IBookModel {
  create(bookInfo: IBook): Promise<IBook>;
  findAll(): Promise<IBook[]>;
  findOne(bookId: string): Promise<IBook | null>;
  update(bookId: string, updateInfo: IBook): Promise<IBook | null>;
  delete(bookId: string): Promise<IBook | null>;
}

export class CreateBookModel implements IBookModel {
  findAll(): Promise<IBook[]> {
    throw new Error('Method not implemented.');
  }
  findOne(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  delete(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  async create(bookInfo: BookInfo): Promise<IBook> {
    const newBook = await Book.create(bookInfo);
    return newBook;
  }
}

export class GetBooksModel implements IBookModel {
  create(bookInfo: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  findOne(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  delete(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  async findAll(): Promise<IBook[]> {
    const books: IBook[] = await Book.find({});
    return books;
  }
}

export class GetBookModel implements IBookModel {
  create(bookInfo: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<IBook[]> {
    throw new Error('Method not implemented.');
  }
  update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  delete(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  async findOne(bookId: string): Promise<IBook | null> {
    const book = await Book.findOne({ id: bookId });
    return book;
  }
}

export class UpdateBookModel implements IBookModel {
  create(bookInfo: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<IBook[]> {
    throw new Error('Method not implemented.');
  }
  findOne(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  delete(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  async update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    const updatedBook = await Book.findOneAndUpdate({ id: bookId }, updateInfo);
    return updatedBook;
  }
}
export class DeleteBookModel implements IBookModel {
  create(bookInfo: IBook): Promise<IBook> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<IBook[]> {
    throw new Error('Method not implemented.');
  }
  findOne(bookId: string): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    throw new Error('Method not implemented.');
  }
  async delete(bookId: string): Promise<IBook | null> {
    const deletedBook = await Book.findOneAndDelete({
      id: bookId,
    });
    return deletedBook;
  }
}

const createBookModel = new CreateBookModel();
const getBooksModel = new GetBooksModel();
const getBookModel = new GetBookModel();
const updateBookModel = new UpdateBookModel();
const deleteBookModel = new DeleteBookModel();

export {
  createBookModel,
  getBooksModel,
  getBookModel,
  updateBookModel,
  deleteBookModel,
  IBookModel,
};

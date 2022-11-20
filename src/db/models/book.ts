import { IBook, BookInfo, BookInfoById } from '../../types/book';
import Book from '../schemas/book';

interface IBookModel {
  create(bookInfo: BookInfo): Promise<BookInfoById | null>;
  findAll(): Promise<IBook[]>;
  findOne(bookId: string): Promise<IBook | null>;
  update(bookId: string, updateInfo: IBook): Promise<IBook | null>;
  delete(bookId: string): Promise<IBook | null>;
  checkDuplicate(isbn: string): Promise<Boolean>;
}

export class BookModel implements IBookModel {
  async create(bookInfo: BookInfo): Promise<BookInfoById | null> {
    const newBook = await Book.create(bookInfo);
    return newBook;
  }

  async findAll(): Promise<IBook[]> {
    const books: IBook[] = await Book.find({});
    return books;
  }

  async findOne(bookId: string): Promise<IBook | null> {
    const book = await Book.findOne({ id: bookId });
    return book;
  }

  async update(bookId: string, updateInfo: IBook): Promise<IBook | null> {
    const updatedBook = await Book.findOneAndUpdate(
      { id: bookId },
      updateInfo,
      { returnOriginal: false },
    );
    return updatedBook;
  }

  async delete(bookId: string): Promise<IBook | null> {
    const deletedBook = await Book.findOneAndDelete({
      id: bookId,
    });
    return deletedBook;
  }

  async checkDuplicate(isbn: string): Promise<Boolean> {
    const result = await Book.find({ ISBN: isbn }).countDocuments();
    return result > 0 ? true : false;
  }
}

const bookModel = new BookModel();

export { IBookModel, bookModel };

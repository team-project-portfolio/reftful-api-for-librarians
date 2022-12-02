import { IBook, BookInfo } from '../../types/book';
import Book from '../schemas/book';

interface IBookModel {
  create(bookInfo: BookInfo): Promise<IBook | null>;
  findAll(): Promise<IBook[]>;
  findOne(bookId: string): Promise<IBook | null>;
  update(bookId: string, updateInfo: IBook): Promise<IBook | null>;
  delete(bookId: string): Promise<Boolean>;
  checkDuplicate(isbn: string): Promise<Boolean>;
  changeVisibility(id: string): Promise<Boolean>;
}

export class BookModel implements IBookModel {
  async create(bookInfo: BookInfo): Promise<IBook | null> {
    const newBook = await Book.create(bookInfo);
    return newBook;
  }

  async findAll(): Promise<IBook[]> {
    const books: IBook[] = await Book.find({}, '-_id -__v -visible');
    return books;
  }

  async findOne(bookId: string): Promise<IBook | null> {
    const book = await Book.findOne({ id: bookId }, '-_id -__v -visible');
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

  async delete(bookId: string): Promise<Boolean> {
    const result = await Book.deleteOne({
      id: bookId,
    });

    return result.acknowledged ? true : false;
  }

  async checkDuplicate(isbn: string): Promise<Boolean> {
    const result = await Book.find({ ISBN: isbn }).countDocuments();
    return result === 1 ? true : false;
  }

  async changeVisibility(id: string): Promise<Boolean> {
    const result = await Book.updateOne({ id }, [
      { $set: { visible: { $not: '$visible' } } },
    ]);
    return result.acknowledged ? true : false;
  }
}

const bookModel = new BookModel();

export { IBookModel, bookModel };

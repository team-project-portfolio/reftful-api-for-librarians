import {
  IBookModel,
  createBookModel,
  getBooksModel,
  getBookModel,
  updateBookModel,
  deleteBookModel,
} from '../db';
import { IBook } from '../types/book';

class BookService {
  constructor(private BookModel: IBookModel) {}

  async createBook(bookInfo: IBook): Promise<IBook> {
    const newBook: IBook = await this.BookModel.create(bookInfo);
    return newBook;
  }

  async getBooks() {
    const books: IBook[] = await this.BookModel.findAll();
    return books;
  }
  async getBook(bookId: string) {
    const book: IBook | null = await this.BookModel.findOne(bookId);
    return book;
  }
  async updateBook(bookId: string, updateInfo: IBook) {
    const updatedBook: IBook | null = await this.BookModel.update(
      bookId,
      updateInfo,
    );
    return updatedBook;
  }
  async deleteBook(bookId: string): Promise<IBook | null> {
    const deletedBook: IBook | null = await this.BookModel.delete(bookId);
    return deletedBook;
  }
}

const CreateBookService = new BookService(createBookModel);
const GetBooksService = new BookService(getBooksModel);
const GetBookService = new BookService(getBookModel);
const UpdateBookService = new BookService(updateBookModel);
const DeleteBookService = new BookService(deleteBookModel);

export {
  CreateBookService,
  GetBooksService,
  GetBookService,
  UpdateBookService,
  DeleteBookService,
};

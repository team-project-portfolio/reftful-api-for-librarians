import { IBookModel, bookModel } from '../db';
import { IBook, BookInfo, BookInfoById } from '../types/book';
import { AppError } from '../middlewares';

class CreateBookService {
  constructor(private BookModel: IBookModel) {}

  public async createBook(bookInfo: IBook): Promise<BookInfoById | null> {
    if (await this.hasDuplicate(bookInfo.ISBN)) {
      throw new AppError(
        '리소스 중복',
        400,
        '해당 ISBN을 가진 도서 정보가 이미 존재합니다. 기존 도서 정보를 수정해 주세요!',
      );
    }

    const formattedBookInfo = await this.formatBookInfo(bookInfo);

    const newBook = await this.BookModel.create(formattedBookInfo);
    return newBook;
  }

  private async hasDuplicate(isbn: string): Promise<Boolean> {
    const result = await this.BookModel.checkDuplicate(isbn);
    return result;
  }

  private async formatBookInfo(bookInfo: IBook): Promise<IBook> {
    const formattedBookInfo = bookInfo;
    return formattedBookInfo;
  }
}

class GetBooksService {
  constructor(private BookModel: IBookModel) {}

  async getBooks() {
    const books: IBook[] = await this.BookModel.findAll();
    return books;
  }
}

class GetBookService {
  constructor(private BookModel: IBookModel) {}

  async getBook(bookId: string) {
    const book: IBook | null = await this.BookModel.findOne(bookId);
    return book;
  }
}

class UpdateBookService {
  constructor(private BookModel: IBookModel) {}

  async updateBook(bookId: string, updateInfo: IBook) {
    const updatedBook: IBook | null = await this.BookModel.update(
      bookId,
      updateInfo,
    );
    return updatedBook;
  }
}

class DeleteBookService {
  constructor(private BookModel: IBookModel) {}

  async deleteBook(bookId: string): Promise<IBook | null> {
    const deletedBook: IBook | null = await this.BookModel.delete(bookId);
    return deletedBook;
  }
}

const createBookService = new CreateBookService(bookModel);
const getBooksService = new GetBooksService(bookModel);
const getBookService = new GetBookService(bookModel);
const updateBookService = new UpdateBookService(bookModel);
const deleteBookService = new DeleteBookService(bookModel);

export {
  createBookService,
  getBooksService,
  getBookService,
  updateBookService,
  deleteBookService,
};

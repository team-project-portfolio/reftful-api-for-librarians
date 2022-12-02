import { IBookModel, bookModel } from '../db';
import { IBook, BookInfo } from '../types/book';
import { AppError, errorNames } from '../middlewares';

class CreateBookService {
  constructor(private BookModel: IBookModel) {}

  public async createBook(bookInfo: BookInfo): Promise<IBook | null> {
    const isDuplicated = await this.hasDuplicate(bookInfo.ISBN);
    if (isDuplicated) {
      throw new AppError(
        errorNames.inputError,
        400,
        '해당 ISBN을 가진 도서 정보가 이미 존재합니다. 기존 도서 정보를 수정해 주세요!',
      );
    }

    const newBook = await this.BookModel.create(bookInfo);
    return newBook;
  }

  private async hasDuplicate(isbn: string): Promise<Boolean> {
    const result = await this.BookModel.checkDuplicate(isbn);
    return result;
  }
}

class GetBooksService {
  constructor(private BookModel: IBookModel) {}

  async getBooks(id?: string) {
    if (id) {
      const book: IBook | null = await this.BookModel.findOne(id);
      if (!book) {
        throw new AppError(
          errorNames.inputError,
          400,
          '해당 ID에 존재하는 도서가 없어요 :( 다시 확인해 주세요!',
        );
      }
      return book;
    }
    const books: IBook[] = await this.BookModel.findAll();
    return books;
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

  async deleteBook(bookId: string): Promise<Boolean> {
    const result: Boolean = await this.BookModel.delete(bookId);
    if (!result) {
      throw new AppError(
        errorNames.databaseError,
        500,
        'DB에서 알 수 없는 에러가 발생했어요 :( 잠시 후 다시 시도해 주세요!',
      );
    }
    return result;
  }
}

class ChangeBookVisibility {
  constructor(private BookModel: IBookModel) {}

  async changeVisibility(bookId: string): Promise<Boolean> {
    const result: Boolean = await this.BookModel.changeVisibility(bookId);
    if (!result) {
      throw new AppError(
        errorNames.databaseError,
        500,
        'DB에서 알 수 없는 에러가 발생했어요 :( 잠시 후 다시 시도해 주세요!',
      );
    }
    return result;
  }
}

const createBookService = new CreateBookService(bookModel);
const getBooksService = new GetBooksService(bookModel);
const updateBookService = new UpdateBookService(bookModel);
const deleteBookService = new DeleteBookService(bookModel);
const changeBookVisibiltyService = new ChangeBookVisibility(bookModel);

export {
  createBookService,
  getBooksService,
  updateBookService,
  deleteBookService,
  changeBookVisibiltyService,
};

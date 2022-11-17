import { getBookModel } from '../db';

interface test {
  test(): void;
}

class BookService implements test {
  constructor(private BookModel) {}

  async getBooks() {
    this.test();
    const model = this.BookModel.findAll();
    return model;
  }

  test(): void {
    console.log('테스트 지롱');
    return;
  }
}

const GetBookService = new BookService(getBookModel);

export { GetBookService };

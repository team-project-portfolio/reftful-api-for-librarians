import Book from '../schemas/book';

export class GetBookModel {
  async findAll() {
    const books = await Book.find({});
    return books;
  }
}

const getBookModel = new GetBookModel();

export { getBookModel };

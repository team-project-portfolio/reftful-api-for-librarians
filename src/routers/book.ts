import { Router } from 'express';
import {
  getBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
} from '../controllers';

const bookRouter: Router = Router();

bookRouter.get('/', getBooks);
bookRouter.post('/', createBook);
bookRouter.get('/:id', getBook);
bookRouter.put('/:id', updateBook);
bookRouter.delete('/:id', deleteBook);

export { bookRouter };

import { Router } from 'express';
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from '../controllers';

const router: Router = Router();

router.get('/', getBooks);
router.post('/', createBook);
router.get('/:id', getBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;

import { Router } from 'express';
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
} from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.get('/', asyncHandler(getBooks));
router.post('/', asyncHandler(createBook));
router.get('/:id', asyncHandler(getBook));
router.put('/:id', asyncHandler(updateBook));
router.delete('/:id', asyncHandler(deleteBook));

export default router;

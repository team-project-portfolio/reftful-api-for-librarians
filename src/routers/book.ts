import { Router } from 'express';
import { createBookValidator } from '../middlewares/validations';
import {
  createBook,
  getBooks,
  getBook,
  updateBook,
  deleteBook,
  changeBookVisibilty,
} from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.post('/', createBookValidator, asyncHandler(createBook));
router.get('/', asyncHandler(getBooks));
router.get('/:id', asyncHandler(getBook));
router.put('/:id', asyncHandler(updateBook));
router.delete('/:id', asyncHandler(deleteBook));
router.patch('/:id', asyncHandler(changeBookVisibilty));

export default router;

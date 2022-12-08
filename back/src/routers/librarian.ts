import { Router } from 'express';
import { createLibrarianValidator } from '../middlewares/validations';
import { librarianController } from '../controllers';
import { asyncHandler } from '../middlewares';

const router: Router = Router();

router.post(
  '/',
  createLibrarianValidator,
  asyncHandler(librarianController.createLibrarian),
);
router.get('/', asyncHandler(librarianController.getLibrarians));
router.get('/:id', asyncHandler(librarianController.getLibrarian));

export default router;

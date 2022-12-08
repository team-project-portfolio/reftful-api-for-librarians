import { Router } from 'express';
import bookRouter from './book';
import librarianRouter from './librarian';
import { asyncHandler } from '../middlewares';
import { getImgUploadURL } from '../controllers';

const router = Router();

router.use('/books', bookRouter);
router.use('/librarians', librarianRouter);
router.post('/image-upload', asyncHandler(getImgUploadURL));

export default router;

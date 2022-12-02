import { Router } from 'express';
import bookRouter from './book';
import { asyncHandler } from '../middlewares';
import { getImgUploadURL } from '../controllers';

const router = Router();

router.use('/books', bookRouter);
router.post('/image-upload', asyncHandler(getImgUploadURL));

export default router;

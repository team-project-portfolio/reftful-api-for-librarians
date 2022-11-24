import { Router } from 'express';
import bookRouter from './book';
import { asyncHandler } from '../middlewares';
import { getImgUploadURL } from '../controllers';

const router = Router();

router.post('/image-upload', asyncHandler(getImgUploadURL));
router.use('/books', bookRouter);

export default router;

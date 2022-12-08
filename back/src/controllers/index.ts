import { Response as Res, Request as Req, NextFunction as Next } from 'express';
import { generateUploadURL } from '../utils/s3-upload';

const getImgUploadURL = async (req: Req, res: Res, next: Next) => {
  const { fileName } = req.body;
  const uploadURL = await generateUploadURL(fileName);
  res.status(200).json(uploadURL);
};

export { getImgUploadURL };
export * from './book';
export * from './librarian';

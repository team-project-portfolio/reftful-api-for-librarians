import { Request, Response, NextFunction } from 'express';
import { AppError } from './app-error-handler';

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) return next(err);
  const now = new Date();
  const timestamp = `${now.toLocaleDateString(
    'ko-KR',
  )} ${now.toLocaleTimeString('ko-KR')}`;
  console.error('\x1b[41m%s\x1b[0m', err.name, timestamp, req.url, err.stack);
  res.status(500).json({ message: err.message });
};

export { errorHandler };

import { Request, Response, NextFunction } from 'express';
import { AppError } from './app-error-handler';

export const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(
    new AppError(
      `Resource Not Found`,
      404,
      `해당 리소스가 존재하지 않습니다 :(`,
    ),
  );
};

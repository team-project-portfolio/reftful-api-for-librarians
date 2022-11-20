import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import { AppError } from './app-error-handler';

export const notFoundErrorHandler = (req: Req, res: Res, next: Next) => {
  next(
    new AppError(
      `Resource Not Found`,
      404,
      `해당 리소스가 존재하지 않습니다 :(`,
    ),
  );
};

import { Request, Response, NextFunction } from 'express';

const asyncHandler = (requestHanlder: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await requestHanlder(req, res, next).catch(next);
    } catch (err) {
      next(err);
    }
  };
};

export { asyncHandler };

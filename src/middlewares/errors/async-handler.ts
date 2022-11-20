import { Request as Req, Response as Res, NextFunction as Next } from 'express';

const asyncHandler = (requestHanlder: Function) => {
  return async (req: Req, res: Res, next: Next) => {
    try {
      await requestHanlder(req, res, next).catch(next);
    } catch (err) {
      next(err);
    }
  };
};

export { asyncHandler };

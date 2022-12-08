import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';
import { librarianConsts } from '../../utils/constants';

const createLibrarianSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  passwordCheck: Joi.ref('password'),
});

export const createLibrarianValidator = (req: Req, res: Res, next: Next) => {
  const result = createLibrarianSchema.validate(req.body, {
    abortEarly: false,
  });
  if (result?.error) {
    return res.status(400).json(result.error.details);
  }
  next();
};

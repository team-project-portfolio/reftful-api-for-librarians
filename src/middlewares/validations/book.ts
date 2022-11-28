import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';
import { bookConsts } from '../../utils/constants';

const createBookSchema = Joi.object({
  title: Joi.string().max(30).required(),
  author: Joi.string().max(bookConsts.TITLE_MAX).required(),
  country: Joi.string().max(bookConsts.COUNTRY_MAX).required(),
  gender: Joi.string().max(bookConsts.GENDER_MAX).required(),
  year: Joi.number()
    .min(bookConsts.YEAR_MIN)
    .max(bookConsts.YEAR_MAX)
    .required(),
  ISBN: Joi.string()
    .min(bookConsts.ISBN_MIN)
    .max(bookConsts.ISBN_MAX)
    .required(),
  price: Joi.number()
    .min(bookConsts.PRICE_MIN)
    .max(bookConsts.PRICE_MAX)
    .required(),
  imageUrl: Joi.string().uri().required(),
});

export const createBookValidator = (req: Req, res: Res, next: Next) => {
  const result = createBookSchema.validate(req.body, { abortEarly: false });
  if (result?.error) {
    return res.status(400).json(result.error);
  }
  next();
};

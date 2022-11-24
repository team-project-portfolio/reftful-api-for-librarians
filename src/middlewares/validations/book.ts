import { Request as Req, Response as Res, NextFunction as Next } from 'express';
import Joi from 'joi';

const createBookSchema = Joi.object({
  name: Joi.string().max(30).required().messages({
    'string.max': '책 제목은 30자 이하로 작성해 주세요 :(',
    'string.empty': '책 제목을 입력해 주세요 :(',
  }),
  author: Joi.string().max(40).required(),
  country: Joi.string().max(40).required(),
  gender: Joi.string().required(),
  year: Joi.number().min(1400).max(2022).required(),
  ISBN: Joi.string().min(10).max(12).required(),
  price: Joi.number().min(3000).max(300000).required(),
});

export const createBookValidator = (req: Req, res: Res, next: Next) => {
  const result = createBookSchema.validate(req.body, { abortEarly: false });
  if (result) {
    res.status(400).json(result);
  }
  next();
};

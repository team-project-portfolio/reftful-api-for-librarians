import './config/db';
import cors from 'cors';
import express from 'express';
import { bookRouter } from './routers';
import { errorLogger, errorHandler } from './middlewares';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use('/api', bookRouter);

// 미들웨어 (에러를 error.log 파일에 기록 및, 에러를 프론트엔드에 전달)
app.use(errorLogger);
app.use(errorHandler);

export { app };

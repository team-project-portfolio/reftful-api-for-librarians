import './configs/db';
import cors from 'cors';
import express from 'express';
import globalRouter from './routers';
import {
  errorLogger,
  errorHandler,
  appErrorHandler,
  notFoundErrorHandler,
} from './middlewares';
import morgan from 'morgan';

const app = express();

app.use(cors({ origin: '*' }));

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', globalRouter);

app.use(errorLogger);
app.use(notFoundErrorHandler);
app.use(errorHandler);
app.use(appErrorHandler);

export { app };

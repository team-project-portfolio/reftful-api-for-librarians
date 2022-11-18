import { model, Schema } from 'mongoose';
import { IBook } from '../../types/book';

const BookSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    ISBN: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    update_date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model<IBook>('Book', BookSchema);

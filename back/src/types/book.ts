import { Document } from 'mongoose';

export interface IBook extends Document {
  id: string;
  name: string;
  author: string;
  country: string;
  gender: string;
  year: string;
  ISBN: string;
  price: string;
}

export interface BookInfo {
  name: string;
  author: string;
  country: string;
  gender: string;
  year: string;
  ISBN: string;
  price: string;
}

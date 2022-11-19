import { Document } from 'mongoose';

export interface IBook extends Document {
  name: string;
  author: string;
  country: string;
  gender: string;
  year: string;
  ISBN: string;
  price: string;
  update_date: string;
}

export interface BookInfo {
  name: string;
  author: string;
  country: string;
  gender: string;
  year: string;
  ISBN: string;
  price: string;
  update_date: string;
}

export interface BookInfoById extends BookInfo {
  id?: string;
}

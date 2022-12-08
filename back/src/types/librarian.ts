import { Document } from 'mongoose';

export interface ILibrarian extends Document {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface LibrarianInfo {
  name: string;
  email: string;
  password: string;
  passwordCheck: string;
}

import { Schema, model, connection } from 'mongoose';
import { ILibrarian } from '../../types/librarian';

const LibrarianSchema: Schema = new Schema(
  {
    id: {
      type: Number,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicUrl: {
      type: String,
      default:
        'https://librarian-api.s3.ap-northeast-2.amazonaws.com/1670415151204',
    },
  },
  { collection: 'librarians', timestamps: true },
);

LibrarianSchema.pre('save', async function () {
  const sequenceCollection = connection.collection('sequences');

  const sequence = await sequenceCollection.findOneAndUpdate(
    {
      collectionName: 'librarians',
    },
    { $inc: { value: 1 } },
    {
      upsert: true,
      returnDocument: 'after',
    },
  );

  const id: number = sequence?.value?.value;
  this.set({ id });
});

export default model<ILibrarian>('librarians', LibrarianSchema);

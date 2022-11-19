import { Schema, model } from 'mongoose';

const SequenceSchema = new Schema({
  collectionName: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    default: 0,
  },
});

const SequenceModel = model('Sequence', SequenceSchema);

export { SequenceModel };

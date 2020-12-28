import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  beginTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

export default model('Appointment', userSchema);

import { Schema, model, models } from 'mongoose'


const exerciseSchema = new Schema({
  type: {
    type: String,
    enum: ['other', 'indoor', 'outdoor', 'gym'],
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,

  },
  intensity: {
    type: String,
    enum: ['low', 'medium', 'high'],
  },
  notes: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },

}, { timestamps: true })


const ExerciseModel = models.exercise || model('exercise', exerciseSchema);

export default ExerciseModel;
import { Schema, model, models } from 'mongoose'
import mongoose from 'mongoose';


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
      },
      height: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      exercises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Exercise',
      }],
      challenges: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Challenge',
      }],
}, {
  timestamps: true
})


const UserModel = models.users || model('users', userSchema);

export default UserModel;
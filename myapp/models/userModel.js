import { Schema, model, models } from 'mongoose'


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  avatar: String,
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'exercise'
  }],
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: 'workout'
  }]
}, {
  timestamps: true
})


const UserModel = models.users || model('users', userSchema);

export default UserModel;
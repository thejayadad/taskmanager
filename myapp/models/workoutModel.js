import { Schema, model, models } from 'mongoose'


const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
      },
      creator: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      type: {
        type: String,
        enum: ['strength', 'cardio'],
      }, 
      exercises: [
        {
          type: Schema.Types.ObjectId,
          ref: 'exercise',
        },
      ],
}, {
 
}, { timestamps: true })


const WorkoutModel = models.workout || model('workout', workoutSchema);

export default WorkoutModel;
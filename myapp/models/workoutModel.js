import { Schema, model, models } from 'mongoose'


const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
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
'use server'
import connectDB from "./database"
import WorkoutModel from "@/models/workoutModel"

export const getWorkouts = async () => {
    try {
        connectDB()
        const workouts = await WorkoutModel.find({})
        console.log("Works " + workouts) 
        return workouts
    } catch (error) {
        throw new Error("Failed to fetch workouts! " + error);

    }
}

export const getPost = async (id) => {
try {
    connectDB()
    const post = await WorkoutModel.findById(id)
    return post
} catch (error) {
    throw new Error("Failed to fetch workout! " + error);

}

}
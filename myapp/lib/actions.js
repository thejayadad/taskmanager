'use server'
import connectDB from "./database"
import getServerUser from "./getServerUser"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import ExerciseModel from "@/models/exerciseModel"
import WorkoutModel from "@/models/workoutModel"

export const addExercise = async (formData) => {
    const getUser = await getServerUser()
    const creator = getUser._id
    console.log("Creator " + creator)
    if(!getUser) throw new Error('Unathorized!')
    const { title, type, duration, distance, intensity, notes } =
    Object.fromEntries(formData);
    try {
        connectDB()
        const newExercise = new ExerciseModel({
            title,
            type,
            duration,
            distance,
            creator,
            intensity,
            notes
        })
        await newExercise.save()
    } catch (error) {
        throw new Error("Failed to Create Exercise" + error)
    }

    revalidatePath("/")
    redirect("/")

}

export const addWorkout  = async(formData) => {
    const getUser = await getServerUser()
    const creator = getUser._id
    const { title, type } =
    Object.fromEntries(formData);
    try {
        connectDB()
        const newWorkout = new WorkoutModel({
            title,
            creator,
            type
        })
        await newWorkout.save()
    } catch (error) {
        throw new Error("Failed to Create Workout" + error)

    }
}
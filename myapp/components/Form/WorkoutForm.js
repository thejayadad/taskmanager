'use client'
import { addWorkout } from '@/lib/actions'
import React from 'react'
import { SubmitButton } from '../Button/SubmitButton'
import {FiPlus} from "react-icons/fi"

const WorkoutForm = () => {
  return (
    <div>
        <form
       action={addWorkout}
        >
            <div
             className='flex flex-col mb-2'
            >
            <label className='font-bold tracking-tight cursor-pointer'>WorkOut Name</label>
        <input type="text"
         placeholder="Enter Name"
         name='title' 
         className="input input-bordered w-full max-w-lg" />
            </div>
            <div
             className='flex flex-col'
            >
            <label className='font-bold tracking-tight cursor-pointer'>Type</label>
            <select
            name='type'
            className="select select-bordered w-full max-w-lg">
            <option disabled selected>WorkOut Type</option>
            <option value='strength'>Strength</option>
            <option value='cardio'>Cardio</option>
            </select>
            </div>
            <SubmitButton 
            title={'Add WorkOut'}
            />
        </form>
    </div>
  )
}

export default WorkoutForm
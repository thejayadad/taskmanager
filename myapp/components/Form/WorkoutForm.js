'use client'
import React from 'react'

const WorkoutForm = () => {
  return (
    <div>
        <form
       
        >
            <div
             className='flex flex-col'
            >
            <label className='font-bold tracking-tight cursor-pointer'>WorkOut Name</label>
        <input type="text"
         placeholder="Enter Name"
         name='title' 
         className="input input-bordered w-full max-w-sm" />
            </div>
            <div
             className='flex flex-col'
            >
            <label className='font-bold tracking-tight cursor-pointer'>Type</label>
            <select
            name='type'
            className="select select-bordered w-full max-w-sm">
            <option disabled selected>WorkOut Type</option>
            <option value='strength'>strength</option>
            <option value='cardio'>Cardio</option>
            </select>
            </div>
            <button>Create WorkOut</button>
        </form>
    </div>
  )
}

export default WorkoutForm
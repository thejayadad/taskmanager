'use client'
import { addExercise } from '@/lib/actions'
import React from 'react'




const UploadForm = () => {
 
  return (
    <div className='mx-auto max-w-screen-xl'>
      <form
      action={addExercise}
      className='flex flex-col'
      >
        <label>Title</label>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          required
        />
        <label>TType</label>
        <input
          type='text'
          placeholder='Type...'
          name='type'
          required
        />
        <label>Duration</label>
        <input
          type='number'
          placeholder='Duration...'
          name='number'
        />
        <label>Distance</label>
        <input
          type='number'
          placeholder='Distance...'
          name='distance'
        />
        <label>Intensity</label>
        <input
          type='text'
          placeholder='Intensity...'
          name='intensity'
        />
        <label>Notes</label>
        <input
          type='text'
          placeholder='Notes...'
          name='notes'
        />
      <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default UploadForm
'use client'
import React, { useState } from 'react'
import UploadForm from '../Form/UploadForm'

const Createpost = () => {
  return (
    <section className='max-w-screen-xl mx-auto'>
      Create Post
      <UploadForm />
    </section>
  )
}

export default Createpost
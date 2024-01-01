import WorkoutForm from '@/components/Form/WorkoutForm'
import Modal from '@/components/modal/Modal'
import HeadingText from '@/components/ui/HeadingText'
import React from 'react'
import { FiActivity, FiPlusCircle } from 'react-icons/fi'

const WorkoutsPage = () => {
  return (
    <section className='px-4 py-8'>
        <div className=' flex items-center justify-between max-w-screen-xl mx-auto'>
        <HeadingText
        title={'Workouts'}
        description={'Add, View, & Update Your Workout Logs'}
        />
        <div>
        <Modal
        opening={
        <div className="flex items-center">
        <FiPlusCircle />

            <span className="text-sm links adjustment">WorkOut</span>
        </div>
        }
        title={'Add Workout'}
        description={'Create a New Workout and Add Exercises To The Plan'}
        children={<WorkoutForm />}
        />
        </div>
        </div>
    </section>
  )
}

export default WorkoutsPage
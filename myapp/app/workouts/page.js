import WorkoutForm from '@/components/Form/WorkoutForm';
import Modal from '@/components/modal/Modal';
import HeadingText from '@/components/ui/HeadingText';
import Link from 'next/link';
import React from 'react';
import { FiActivity, FiPlusCircle } from 'react-icons/fi';
import { getWorkouts } from '@/lib/data';

const WorkoutsPage = () => {
  const workouts = getWorkouts(); 
  console.log("Workouts " + workouts)

  return (
    <section className='px-4 py-8'>
      <div className='flex items-center justify-between max-w-screen-xl mx-auto bg-gray-100 p-4 rounded-md'>
        <HeadingText
          title={'Workouts'}
          description={'Add, View, & Update Your Workout Logs'}
        />
        <div>
          <Modal
            opening={
              <div className='flex items-center'>
                <FiPlusCircle />

                <span className='text-sm links adjustment'>WorkOut</span>
              </div>
            }
            title={'Add Workout'}
            description={'Create a New Workout and Add Exercises To The Plan'}
            children={<WorkoutForm />}
          />
        </div>
      </div>
      <div className='mt-8 max-w-screen-xl px-4 mx-auto sm:px-8'>
        <div className='px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 bg-gray-100 rounded-md'>
        {workouts.map((workout) => (
            <div key={workout._id}>
              <p>{workout.title}</p>
              <p>Type: {workout.type}</p>
              <p>Creator: {workout.creator}</p>
              <p>Exercises:</p>
              <ul>
                {workout.exercises.map((exercise) => (
                  <li key={exercise._id}>{exercise.title}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutsPage;

{/* <div className='inline-block min-w-full overflow-hidden rounded-md'>
<table className='min-w-full leading-normal'>
  <thead>
    <tr>
      <th className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'>
        User
      </th>
      <th className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'>
        Name
      </th>
      <th className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'>
        Details
      </th>
    </tr>
  </thead>
  <tbody>
  {
    workouts.map((workout) => (
      <div key={workout.id}>

      </div>
    ))
  }
  </tbody>
</table>
</div> */}

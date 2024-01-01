import WorkoutForm from '@/components/Form/WorkoutForm'
import Modal from '@/components/modal/Modal'
import HeadingText from '@/components/ui/HeadingText'
import Link from 'next/link'
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
        <div className='mt-8 container max-w-3xl px-4 mx-auto sm:px-8'>
          <div className='px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 bg-gray-100 rounded-md'>
            <div className='inline-block min-w-full overflow-hidden rounded-md'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                    className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                      User
                    </th>
                    <th
                    className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                      Name
                    </th>
                    <th
                    className='px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200'
                    >
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                    className='px-5 py-5 text-sm bg-white border-b border-gray-200'
                    >
                      <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                          <Link href={'/'}>
                            <img
                              src='mx-auto object-cover rounded-full h-10 w-10'
                              alt='creator'
                            />
                          </Link>
                        </div>
                        <div className='ml-3'>
                          <p
                          className='text-gray-900 whitespace-no-wrap'
                          >Creator</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    Admin
                                </p>
                            </td>
                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                <p class="text-gray-900 whitespace-no-wrap">
                                    12/09/2020
                                </p>
                            </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </section>
  )
}

export default WorkoutsPage
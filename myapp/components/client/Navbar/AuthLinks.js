'use client'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const AuthLinks = ({user}) => {
  return (
    <div className='flex items-center gap-4'>
               {
            !user
              ? <>
                  <button className='btn btn_login' onClick={() => signIn('google')}>
                    <span>Log in</span>
                  </button>

                  <button className='btn btn_icon'
                    onClick={() => signIn('google', { callbackUrl: '/create' })}
                  >
                    Create
                  </button>
              </>

              : <>
                 <span>{user.name}</span>
                 <Link href={'/create'}>Create</Link>
                  <button
                  onClick={signOut}
                  >LogOut</button>

                
              </>
          }
    </div>
  )
}

export default AuthLinks
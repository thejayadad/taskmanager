'use client'
import { signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AuthLinks = ({user}) => {
  return (
    <div className='flex items-center gap-4'>
        { 
            user ? (
                <div className='flex items-center'>
                <button className='' onClick={() => signOut( )}>SignOut</button>
                <span>{user?.name}</span>
                   
                </div>
            ) : (
                <div className='flex items-center'>
                <button className='' onClick={() => signIn('')}>SignIn</button>
                </div>
            )
        }
    </div>
  )
}

export default AuthLinks
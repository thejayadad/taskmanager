import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'

const Navbar = async () => {
    const user = await getServerUser()
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between max-w-screen-xl mx-auto'>
        <AuthLinks user={user} />
        </nav>
    </header>   
  )
}

export default Navbar
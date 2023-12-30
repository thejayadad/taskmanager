import getServerUser from '@/lib/getServerUser'
import React from 'react'
import AuthLinks from './AuthLinks'

const Navbar = async () => {
    const user = await getServerUser()
  return (
    <header className='px-4 py-8'>
        <nav className='flex items-center justify-between mx-auto'>
        <AuthLinks user={user} />
        </nav>
    </header>
  )
}

export default Navbar
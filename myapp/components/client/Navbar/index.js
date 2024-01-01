import React from 'react'
import AuthLinks from './AuthLinks'
import getServerUser from '@/lib/getServerUser'
import Logo from '@/components/Logo/Logo'

const Navbar = async () => {
    const user = await getServerUser()
  return (
    <header className='px-4 py-8'>
        <nav className='flex justify-between max-w-screen-xl mx-auto'>
          <Logo size={80} />
        <AuthLinks user={user} />
        </nav>
    </header>   
  )
}

export default Navbar
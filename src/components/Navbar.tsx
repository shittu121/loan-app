// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SmToggle } from './SmToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full bg-white h-20 border-b border-b-gray-300 px-5 lg:px-20 md:px-10'>
      <div className='lg:hidden md:hidden'>
        <SmToggle />
      </div>
      <div className="flex mx-auto lg:mx-0 md:mx-0 items-center">
        Loan Application
        {/* <Image src="/images/3080.png" className='mx-auto lg:mx-0 md:mx-0' alt='logo' width={200} height={200} /> */}
      </div>
      <Link href="/" className='hover:text-[#39cfa7] font-medium flex-shrink-0 lg:hidden md:hidden'> <h3>Join</h3> </Link>

      <div className="flex sm-hidden text-[17px] font-[400] items-center gap-7">
        <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0'> <h3>Home</h3> </Link>
        <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0 md:hidden lg:flex'> <h3>Features</h3> </Link>
        <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0 md:hidden lg:flex'> <h3>Docs</h3> </Link>
        <Link href="/" className='hover:text-[#39cfa7] flex-shrink-0'> <h3>Sign in</h3> </Link>
        <Link href="/" className='border border-[#39c139] text-[#39cfa7] p-1 px-4 hover:bg-[#025F46] hover:text-white rounded-md'> <button>Join</button> </Link>
      </div>
    </div>
  )
}

export default Navbar

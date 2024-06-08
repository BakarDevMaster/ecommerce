import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
  <nav className=' bg-green-400 p-4 '>
    <ul className='flex gap-x-4  justify-evenly '>
        <li className='sm:text-3xl  text-2xl font-bold text-orange-500 hover:text-orange-700'><Link href={"/"}>DevStore</Link></li>

        <li className='sm:text-3xl text-2xl font-bold text-orange-500 hover:text-orange-700'>
          <Link href={"/"}>
          Home
          </Link>
        </li>
        
        <li><Link href={"/cart"} className='sm:text-3xl text-2xl flex gap-x-2 items-center font-bold  ' >
        <FaCartShopping className='text-orange-500 hover:text-orange-700'/>
        <h1 className='text-orange-500 hover:text-orange-700'>Cart</h1> </Link></li>
       
        
    </ul>
  </nav>
  )
}

export default Navbar

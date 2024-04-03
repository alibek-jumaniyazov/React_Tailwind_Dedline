import React from 'react'
import Navbar from './Navbar'
import SerachHeader from './SerachHeader'

export default function Header() {
  return (
    <div className='Header flex flex-col justify-center items-start px-6 gap-4 bg-primary'>
        <Navbar/>
        <SerachHeader/>
    </div>
  )
}

import React from 'react'
import Navbar from './Navbar'
import SerachHeader from './SerachHeader'

export default function Header() {
  return (
    <div className='Header flex'>
        <Navbar/>
        <SerachHeader/>
    </div>
  )
}

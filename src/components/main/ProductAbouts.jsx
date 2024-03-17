import React from 'react'
import ProductAbout from './ProductAbout'
import ProductAboutTow from './ProductAboutTow'

export default function ProductAbouts() {
  return (
    <div className='ProductAbouts w-full flex flex-col justify-center items-start gap-6'>
        <ProductAbout/>
        <ProductAboutTow/>
    </div>
  )
}

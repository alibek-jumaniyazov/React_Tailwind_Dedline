import React from 'react'
import BannerSale from './BannerSale'
import PagesRout from './PagesRout'
import ProductAbout from './ProductAbout'

export default function Main() {
  return (
    <div className='Main w-full h-full flex flex-col justify-center items-start gap-6'>
        <BannerSale/>
        <PagesRout/>
        <ProductAbout/>
    </div>
  )
}

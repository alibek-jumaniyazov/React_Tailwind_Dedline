import React from 'react'
import BannerSale from './BannerSale'
import PagesRout from './PagesRout'
import ProductAbouts from './ProductAbouts'
import CompanyInfos from './CompanyInfos'
import CompanyWath from './CompanyWath'
import OrderUser from './OrderUser'

export default function Main() {
  return (
    <div className='Main w-full h-full flex flex-col justify-center items-start gap-6'>
        <BannerSale/>
        <PagesRout/>
        <ProductAbouts/>
        <CompanyInfos/>
        <CompanyWath/>
        <OrderUser/>
    </div>
  )
}

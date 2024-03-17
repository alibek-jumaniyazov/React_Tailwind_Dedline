import React from 'react'
import arrowRight from '../../assets/icons/arrow-right-red.svg'

export default function ArrowButton() {
  return (
    <div className='ArrowButton w-10 h-10 flex justify-center items-center rounded-xl bg-[#EC1026] cursor-pointer'>
        <img src={arrowRight} alt="" className='' />
    </div>
  )
}

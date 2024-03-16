import React from 'react'
import grIcon from "../../assets/icons/grIcon.svg";

export default function GrIcon() {
  return (
    <div className='GrIcon flex justify-center items-center border rounded-md border-[#222220] w-8 h-8 cursor-pointer'>
        <img src={grIcon} alt="" />
    </div>
  )
}

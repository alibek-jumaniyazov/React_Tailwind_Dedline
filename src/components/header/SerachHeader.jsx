import React from 'react'
import Katalog from './Katalog'
import GrIcon from './GrIcon'

export default function SerachHeader() {
  return (
    <div className='SerachHeader flex justify-between items-center gap-8'>
        <div className="flex justify-center items-center gap-5">
            <Katalog/>
            <GrIcon/>
        </div>
        <div className="flex justify-center items-center gap-5">

        </div>
    </div>
  )
}

import React from 'react'
import animationFooter from '../../assets/icons/animationFooter.svg'

export default function FooterAnimation() {
  return (
    <div className='FooterAnimation w-full h-16 flex justify-center items-center bg-mainTow p-3 gap-5'>
        <img src={animationFooter} alt="" />
        <p className='fontMedium text-white text-3xl'>Эксклюзив на Maldex ➔</p>
        <img src={animationFooter} alt="" />
        <p className='fontMedium text-white text-3xl'>Эксклюзив на Maldex ➔</p>
        <img src={animationFooter} alt="" />
        <p className='fontMedium text-white text-3xl'>Эксклюзив на Maldex ➔</p>
        <img src={animationFooter} alt="" />
        <p className='fontMedium text-white text-3xl'>Эксклюзив на Maldex ➔</p>
        
    </div>
  )
}

import React from 'react'
import megaphone from '../../assets/icons/megaphone.svg'
import basket from '../../assets/icons/basket.svg'
import delivery from '../../assets/icons/delivery.svg'
import connectivity from '../../assets/icons/connectivity.svg'
import gift from '../../assets/icons/gift.svg'
import russia from '../../assets/images/russia.png'
import china from '../../assets/images/china.png'
import usa from '../../assets/images/usa.png'
import europa from '../../assets/images/europa.png'
import farme from '../../assets/images/farme.png'

export default function CompanyWath() {
    return (
        <div className='CompanyWath flex flex-col gap-8'>
            <div className="flex fontBlod text-3xl gap-1">
                <span className='text-[#E94B67]'>Почему мы?</span>
                <p className=' text-[#0000B0]'>Всё под 1 крышей!</p>
            </div>
            <div className="flex justify-center items-start gap-24 ml-24 ">
                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={megaphone} alt="" className='w-12' />
                        <p className='fontMedium text-[#0000B0] text-2xl'>Брендинг</p>
                    </div>
                    <ul className='text-[#0000B0] list-disc flex flex-col gap-4'>
                        <li className=""><p className="text-black">Тампопечать</p></li>
                        <li className=""><p className="text-black">Вышивка</p></li>
                        <li className=""><p className="text-black">Шелкография</p></li>
                        <li className=""><p className="text-black">Гравировка</p></li>
                        <li className=""><p className="text-black">Деколь</p></li>
                        <li className=""><p className="text-black">Термотрансфер</p></li>
                        <li className=""><p className="text-black">Уф печать</p></li>
                        <li className=""><p className="text-black">Сублимация</p></li>
                        <li className=""><p className="text-black">Цифровая печать</p></li>
                        <li className=""><p className="text-black">Прямая печать на ткани DTG</p></li>
                    </ul>
                </div>

                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={basket} alt="" className='w-12' />
                        <p className='fontMedium text-[#BD43F6] text-2xl'>Складирование</p>
                    </div>
                    <ul className='text-[#BD43F6] list-disc flex flex-col gap-4 w-56'>
                        <li className=""><p className="text-black">Управление запасами</p></li>
                        <li className=""><p className="text-black">Сокращение складских затрат для наших клиентов</p></li>
                        <li className=""><p className="text-black">Управление складской инвентаризацией (ушло/пришло)</p></li>

                        <div className="fontRoman flex flex-col justify-center items-start gap-6 -mt-6">
                            <div className="flex flex-col gap-4">
                                <img src={delivery} alt="" className='w-20' />
                                <p className='fontMedium text-[#52B5A1] text-2xl'>Логистика</p>
                            </div>
                            <ul className='text-[#52B5A1] list-disc flex flex-col gap-4'>
                                <li className=""><p className="text-black">Фирменная упаковка</p></li>
                                <li className=""><p className="text-black">Бесплатная доставка</p></li>
                            </ul>
                        </div>

                    </ul>
                </div>

                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={connectivity} alt="" className='w-14' />
                        <p className='fontMedium text-[#F7CE46] text-2xl'>Брендинг</p>
                    </div>
                    <ul className=' list-disc flex flex-col gap-4'>
                        <li className="text-[#F7CE46]"><p className="text-black">Более 1 000 000 наименований</p></li>
                        <div className="flex flex-wrap justify-start items-center gap-8 w-80">
                            <div className="flex justify-start items-center gap-3">
                                <img src={russia} alt="" />
                                <p>Россия</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <img src={china} alt="" />
                                <p>Китай</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <img src={usa} alt="" />
                                <p>Америка</p>
                            </div>
                            <div className="flex justify-start items-center gap-3">
                                <img src={europa} alt="" />
                                <p>Европа</p>
                            </div>
                        </div>
                    </ul>
                </div>

                <div className="fontMedium flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col items-start gap-4">
                        <img src={gift} alt="" className='w-14' />
                        <p className='fontMedium text-[#E94B67] text-2xl'>Дизайн макеты бесплатно</p>
                        <ul className='flex flex-col gap-4'>
                          <div className="flex justify-center items-center gap-3 text-[#0000B0] text-xl">
                            <img src={farme} alt="" />
                            <p>лет на рынке</p>
                          </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

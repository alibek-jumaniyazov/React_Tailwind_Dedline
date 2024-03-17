import React from "react";
import doc from '../../assets/icons/doc.svg'
import gif from '../../assets/icons/gifCardTow.svg'
import MenangeUser from '../../assets/icons/MenangeUser.svg'
import badge from '../../assets/icons/badge.svg'
import chinaEar from '../../assets/icons/chinaEar.svg'

export default function OrderUser() {
    return (
        <div className="OrderUser flex flex-col gap-8">
            <div className="flex fontBlod text-3xl gap-1">
                <p className=" text-[#0000B0]">С заботой о клиентах</p>
            </div>

            <div className="flex justify-center items-start gap-44 ml-24 ">
                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={doc} alt="" className='w-12' />
                        <p className='fontMedium text-[#52B5A1] text-2xl'>Сборные заказы (gifts case)</p>
                    </div>
                    <ul className='text-[#52B5A1] list-disc flex flex-col gap-4 w-56'>
                        <li className=""><p className="text-black">Разработка для вас индивидуальных кейсов/подарочных наборов</p></li>

                        <div className="fontRoman flex flex-col justify-center items-start gap-6    ">
                            <div className="flex flex-col gap-4">
                                <img src={gif} alt="" className='w-12' />
                                <p className='fontMedium text-[#BD43F6] text-2xl'>При заказе от 50 000 рублей</p>
                            </div>
                            <ul className='text-[#BD43F6] list-disc flex flex-col gap-4'>
                                <li className=""><p className="text-black">10% от стоимости заказа в подарок!</p></li>
                                <li className=""><p className="text-black">Подарок из каталога на сумму 5000 рублей</p></li>
                            </ul>
                        </div>

                    </ul>
                </div>
                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={MenangeUser} alt="" className='w-12' />
                        <p className='fontMedium text-[#F7CE46] text-2xl'>Персональный менеджер</p>
                    </div>
                    <ul className='text-[#F7CE46] list-disc flex flex-col gap-4 w-56'>
                        <li className=""><p className="text-black">Обслуживание клиента с учетом его персональных предпочтений и требований</p></li>

                        <div className="fontRoman flex flex-col justify-center items-start gap-6 ">
                            <div className="flex flex-col gap-4">
                                <img src={badge} alt="" className='w-14' />
                                <p className='fontMedium text-[#0000B0] text-2xl'>Чем больше заказов, тем больше скидки</p>
                            </div>
                            <ul className='text-[#0000B0] list-disc flex flex-col gap-4'>
                                <li className=""><p className="text-black">Предоставляем дополнительную скидку на заказ</p></li>
                            </ul>
                        </div>

                    </ul>
                </div>
                <div className="fontRoman flex flex-col justify-center items-start gap-6">
                    <div className="flex flex-col gap-4">
                        <img src={chinaEar} alt="" className='w-12' />
                        <p className='fontMedium text-[#E94B67] text-2xl'>Персональный менеджер</p>
                    </div>
                    <ul className='text-[#E94B67] list-disc flex flex-col gap-4 w-56'>
                        <li className=""><p className="text-black">Поможем воплотить любую идею</p></li>
                        <li className=""><p className="text-black">Разработка макета</p></li>
                        <li className=""><p className="text-black">Быстро найдем фабрику</p></li>
                        <li className=""><p className="text-black">Согласуем образец</p></li>
                        <li className=""><p className="text-black">Доставим удобным вам способом</p></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

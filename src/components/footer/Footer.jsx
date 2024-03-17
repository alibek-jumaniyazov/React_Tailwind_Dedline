import React, { useState } from 'react'
import footerIcon from '../../assets/icons/footerIcon.svg'

export default function Footer() {

  return (
    <div className='Footer flex flex-col justify-center items-start gap-14 bg-[#090909] w-full p-7 fontRoman'>
      <div className="flex w-full justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-7">
          <span className='text-sm text-[#838383]'>По всем вопросам</span>
          <p className='text-5xl text-[#F2F2F2] decoration-solid '>maldex@info.com</p>
        </div>
        <div className="flex flex-col justify-center items-start gap-7">
          <span className='text-sm text-[#838383]'>Бесплатный звонок из любой точки России</span>
          <p className='text-5xl text-[#F2F2F2] decoration-solid'>8-800 333-67-84</p>
        </div>
        <img src={footerIcon} alt="" />
      </div>
      <div className="flex w-full justify-between items-start">
        <div className="flex flex-col justify-center items-start gap-5">
          <span className='text-sm text-[#838383]'>Основные категории</span>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Коллекции</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Автомобильные аксессуары</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Деловые подарки</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для дома</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для отдыха</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для путешествий</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для спорта</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Женские аксессуары</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Зонты</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Кухня и посуда</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Личные</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Мужские аксессуары</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Одежда</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для офиса</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Коллекции</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Автомобильные аксессуары</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Деловые подарки</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для дома</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для отдыха</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для путешествий</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Для спорта</p>
        </div>


        <div className="flex flex-col justify-center items-start gap-5">
          <span className='text-sm text-[#838383]'>разделы</span>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Главная</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>О компании</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Каталог</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Доставка и оплата</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Новости и статьи</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Команда</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Наши дилеры</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Стать дилером</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Контакты</p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-center items-start gap-5">
          <span className='text-sm text-[#838383]'>Адрес</span>
          <div className="flex flex-col justify-center items-start gap-7">
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Мы в Москве:</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Огородный проезд, д. 5, стр. 2</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Телефон: </p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>+7 (499) 704-33-62</p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Мы в Санкт-Петербурге</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Московский пр., 10-12</p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>Телефон: </p>
              <p className='text-xs text-[#F2F2F2] decoration-solid '>+7 (812) 389-44-14</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  w-full border-t pt-5 border-[#FFFFFF] justify-between items-center">
        <div className="">
          <span className='text-sm text-[#838383]'>© 2023 Maldex. Все права защищены.</span>
        </div>
        <div className="flex gap-3 text-sm text-[#EEEDE9]">
          <div className="p-1 border border-[#EEEDE9] rounded-md">
            <p className=''>Правила использования материалов</p>
          </div>
          <div className="p-1 border border-[#EEEDE9] rounded-md">
            <p className=''>Политика конфиденциальности</p>
          </div>
          <div className="p-1 border border-[#EEEDE9] rounded-md">
            <p className=''>Написать сообщение</p>
          </div>
        </div>
      </div>
    </div>
  )
}

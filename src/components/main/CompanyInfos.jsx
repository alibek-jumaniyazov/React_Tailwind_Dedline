import React, { useState } from "react";

export default function CompanyInfos() {
  return (
    <div className="CompanyInfos flex flex-col gap-7 mt-11">
      <h1 className="fontMedium text-3xl text-[#0000B0]">Кто мы?</h1>
      <div className="fontRoman flex flex-col justify-center items-start gap-7 ml-24">
        <p>Позвольте нам представить себя:</p>
        <ul className="flex flex-col justify-center items-start gap-5 list-disc text-base w-[52%]">
          <li className="text-[#0000B0]">
            <p className="text-black">  
              Maldex– это комплексный сервис по производству сувенирной
              продукции для российских и международных компаний. С нашей помощью
              компании смогут расширить клиентскую базу, повысить лояльность
              аудитории, укрепить позиции на рынке.
            </p>
          </li>
          <li className="text-[#E94B67]">
            <p className="text-black">
              Наша команда берет на себя весь спектр задач по ведению сделки,
              Вам нужно предоставить лишь логотип для нанесения. Мы изготовим,
              забрендируем и доставим ваш бизнес сувенир.
            </p>
          </li>
          <li className="text-[#F7CE46]">
            <p className="text-black">
              У Вас есть идеи собственных сувениров? –Прекрасно!С нашей помощью
              вы можете изготовить любой сувенир по индивидуальному дизайну.
            </p>
          </li>
          <li className="text-[#52B5A1]">
            <p className="text-black">
              Бизнес-сувениры из России, Европы, Америки и Китая. Более 1 000
              000 подарков со всего мира. Нам есть что вам предложить! / Нам
              есть чем вас удивить?
            </p>
          </li>
          <li className="text-[#BC40F6]">
            <p className="text-black">
              Maldex – производи правильное впечатление!
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

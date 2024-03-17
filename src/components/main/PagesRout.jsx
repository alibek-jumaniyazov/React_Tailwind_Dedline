import React from "react";
import delivery from '../../assets/icons/delivery.svg'
import whiteDocIcon from '../../assets/icons/whiteDocIcon.svg'
import taskList from '../../assets/icons/taskList.svg'


export default function PagesRout() {
  return (
    <div className="flex flex-col gap-8">
      <div className="fontBlod text-3xl gap-1">
        <p className="">Промо одежда /</p>
        <p className="">Портативные колонки /</p>
        <p className="">Беспроводная колонка Chubby /</p>
        <span className="text-[#EC1026]">Артикул 7557.30</span>
      </div>
      <div className="flex justify-center items-start gap-44 ml-24">
        <div className="">
          <div className="">
            <img src={taskList} alt="" />
          </div>
          <p className="">Оставьте заявку по телефону</p>
          <p className="">8 (800) 777-59-19</p>
          <span className="">либо оформите заказ на сайте</span>
        </div>
        <div className="">
          <div className="">
            <img src={whiteDocIcon} alt="" />
          </div>
          <p className="">Подтвердите заказ у менеджера</p>
        </div>
        <div className="">
            <div className="">
              <img src={delivery} alt="" />
            </div>
            <p>Получите товар курьерской доставкой</p>
            <span>или в нашем офисе: Варшавское шоссе 35</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import delivery from '../../assets/icons/delivery.svg'
import whiteDocIcon from '../../assets/icons/whiteDocIcon.svg'
import taskList from '../../assets/icons/taskList.svg'


export default function OrderInstruction() {
  return (
    <div className="OrderInstruction flex flex-col gap-8">
      <div className="flex fontBlod text-3xl gap-1">
        <p className=" text-[#0000B0]">С Maldex просто как</p>
        <p className=" text-[#E94B67]">раз</p>
        <p className=" text-[#F7CE46]">два</p>
        <p className=" text-[#0000B0]">три</p>
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

import React from "react";
import whiteDeliveryIcon from "../../assets/icons/whiteDeliveryIcon.svg";
import whiteDocIcon from "../../assets/icons/whiteDocIcon.svg";
import taskList from "../../assets/icons/taskList.svg";
import vectorOne from "../../assets/icons/vectorOne.svg";
import vectorTow from "../../assets/icons/vectorTow.svg";

export default function OrderInstruction() {
  return (
    <div className="OrderInstruction flex flex-col gap-8 ">
      <div className="flex fontBlod text-3xl gap-1">
        <p className=" text-[#0000B0]">С Maldex просто как</p>
        <p className=" text-[#E94B67]">раз</p>
        <p className=" text-[#F7CE46]">два</p>
        <p className=" text-[#0000B0]">три</p>
      </div>

      <div className="flex justify-center items-start gap-28 ml-24 my-20 fontRoman relative">
        <img src={vectorOne} alt="" className="absolute -bottom-14 left-12" />
        <img src={vectorTow} alt="" className="absolute -top-14 right-64" />
        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center w-24 h-24 bg-[#E94B67] rounded-xl">
            <img src={taskList} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start ">
            <p className="w-32 fontMedium text-base text-[#E94B67]">
              Оставьте заявку по телефону
            </p>
            <p className="text-base fontMedium">8 (800) 777-59-19</p>
            <span className="text-sm">либо оформите заказ на сайте</span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div className="flex justify-center items-center w-24 h-24 bg-[#F7CE46] rounded-xl">
            <img src={whiteDocIcon} alt="" />
          </div>
          <div className="">
            <p className="text-base  text-[#F7CE46] w-60">
              Подтвердите заказ у менеджера
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-6 -ml-8">
          <div className="flex justify-center items-center w-24 h-24 bg-[#52B5A1] rounded-xl">
            <img src={whiteDeliveryIcon} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="w-48 fontMedium text-base text-[#52B5A1]">
              Получите товар курьерской доставкой
            </p>
            <span className="w-48 text-sm">
              или в нашем офисе: Варшавское шоссе 35
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

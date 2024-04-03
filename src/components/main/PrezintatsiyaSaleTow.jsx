import React from "react";
import PrezintatImg from "../../assets/images/PrezintatImgTow.png";

export default function PrezintatsiyaSaleTow() {
  return (
    <div className="PrezintatsiyaSale w-[830px] h-[410px] bg-mainTow flex justify-between items-center p-5">
      <div className="h-full flex flex-col justify-between items-start fontMedium text-white w-64 text-5xl">
        <div className="flex flex-col justify-center items-start">
          <div className="text-xs border border-white rounded-md p-1">
            <p>корпоративные подарки</p>
          </div>
          <h1>давайте займемся подарками!</h1>
        </div>
        <div className="flex gap-5">
          <button className="w-40 h-11 rounded-md border border-white fontMedium text-white text-sm">
            Подробнее
          </button>
          <button className="w-40 h-11 rounded-md border border-white fontMedium text-white text-sm">
            заказать
          </button>
        </div>
      </div>
      <img src={PrezintatImg} alt="" />
    </div>
  );
}

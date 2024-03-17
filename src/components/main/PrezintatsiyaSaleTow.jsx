import React from "react";
import PrezintatImg from "../../assets/images/PrezintatImgTow.png";

export default function PrezintatsiyaSaleTow() {
  return (
    <div className="PrezintatsiyaSale w-[830px] h-[410px] bg-[#00B6BA] flex justify-between items-center p-5">
      <div className="h-full flex flex-col justify-between items-start fontMedium text-white w-64 text-5xl">
        <h1>давайте займемся подарками!</h1>
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

import React from "react";
import PrezintatImg from "../../assets/images/PrezintatImg.png";

export default function PrezintatsiyaSale() {
  return (
    <div className="PrezintatsiyaSale w-[830px] h-[410px] bg-mainTow flex justify-between items-center p-5">
      <div className="h-full flex flex-col justify-between items-start fontMedium text-white w-64 text-5xl">
        <h1>скачать презентацию</h1>
        <div className="flex gap-5">
          <button className="w-40 h-11 rounded-md border border-white fontMedium text-white text-sm">
            заказать
          </button>
          <button className="w-40 h-11 rounded-md border border-white fontMedium text-white text-sm">
            скачать
          </button>
        </div>
      </div>
      <img src={PrezintatImg} alt="" />
    </div>
  );
}

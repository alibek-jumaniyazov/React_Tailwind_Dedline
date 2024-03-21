import React from "react";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

export default function BannerSale() {
  return (
    <div className="BannerSale w-full flex justify-between items-center">
      <div className="cursor-pointer">
        <img src={arrowLeft} alt="" />
      </div>
      <div className="flex justify-center items-center gap-2 text-sm">
        <span className="fontMedium text-main">30%</span>
        <p className="fontMedium">Cкидка при первом заказе! 🎉</p>
        <button className="fontRoman text-xs text-[#222220] border border-[#222220] rounded-md px-2 py-1">
          подробнее
        </button>
      </div>
      <div className="cursor-pointer">
        <img src={arrowRight} alt="" />
      </div>
    </div>
  );
}

import React from "react";
import Pimg1 from "../../assets/images/Pimg1.png";
import Pimg2 from "../../assets/images/Pimg2.png";
import Pimg3 from "../../assets/images/Pimg3.png";
import Pimg4 from "../../assets/images/Pimg4.png";
import Pimg5 from "../../assets/images/Pimg5.png";
import Pimg6 from "../../assets/images/Pimg6.png";
import Pimg7 from "../../assets/images/Pimg7.png";
import Pimg8 from "../../assets/images/Pimg8.png";
import Pimg9 from "../../assets/images/Pimg9.png";
import Pimg10 from "../../assets/images/Pimg10.png";
import Pimg11 from "../../assets/images/Pimg11.png";
import Pimg12 from "../../assets/images/Pimg12.png";
import Pimg13 from "../../assets/images/Pimg13.png";
import Pimg14 from "../../assets/images/Pimg14.png";

export default function ImagesProduct() {
  return (
    <div className="ImagesProduct flex flex-col justify-center items-start gap-5 p-9">
      <div className="w-full flex gap-5">
        <div className="flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-[#E94B67] text-4xl fontMedium">
              Сувенирная продукция
            </p>
            <span className="text-lg fontRoman w-[450px]">
              Каталог «от ручки до ракеты» «от промо до VIP» Более{" "}
              <span className="fontMedium"> 1 000 000 </span>
              бизнес сувениров со всего мира
            </span>
          </div>
          <img src={Pimg1} alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <img src={Pimg2} alt="" />
          <div className="flex gap-5">
            <img src={Pimg3} alt="" />
            <img src={Pimg4} alt="" />
          </div>
        </div>
        <div className="">
          <img src={Pimg5} alt="" />
        </div>
      </div>
      <div className="w-full flex gap-5">
        <img src={Pimg6} alt="" />
        <img src={Pimg7} alt="" />
        <img src={Pimg8} alt="" />
      </div>
      <div className="w-full flex gap-5">
        <img src={Pimg9} alt="" />
        <div className="flex flex-col gap-5">
          <img src={Pimg10} alt="" />
          <img src={Pimg14} alt="" />
        </div>
        <img src={Pimg11} alt="" />
        <div className="flex flex-col gap-5">
          <img src={Pimg12} alt="" />
          <img src={Pimg13} alt="" />
        </div>
      </div>
    </div>
  );
}

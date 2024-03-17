import React from "react";
import ArrowButton from "../ui/ArrowButton";
import katalogImg1 from "../../assets/images/katalog1.png";
import katalogImg2 from "../../assets/images/katalogBook.png";
import katalogImg3 from "../../assets/images/katalogWashing.png";
import katalogImg4 from "../../assets/images/katalog1.png";
import katalogImg5 from "../../assets/images/katalog1.png";
import katalogImg6 from "../../assets/images/katalog1.png";
import katalogImg7 from "../../assets/images/katalog1.png";
import PrezintatsiyaSale from "./PrezintatsiyaSale";

export default function ProductAbout() {
  return (
    <div className="ProductAbout">
      <div className="flex justify-between items-center">
        <div className=" flex justify-center items-center gap-4">
          <div className="group cursor-pointer w-80 h-[410px] flex flex-col justify-center items-center gap-3 ">
            <p className="hidden group-hover:flex fontRoman">Перейти в каталог</p>
            <img src={katalogImg1} alt="" />
            <div className="hidden group-hover:flex w-full flex justify-end">
              <ArrowButton />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start w-[200px] gap-3">
            <div className="group cursor-pointer w-52 h-52  flex flex-col justify-center items-center p-5">
              <p className="hidden group-hover:flex fontRoman">Перейти в каталог</p>
              <img src={katalogImg3} alt="" />
              <div className="hidden group-hover:flex w-full flex justify-end">
                <ArrowButton />
              </div>
            </div>
            <div className="group cursor-pointer w-52 h-52  flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex fontRoman">Перейти в каталог</p>
              <img src={katalogImg2} alt="" />
              <div className="hidden group-hover:flex w-full flex justify-end">
                <ArrowButton />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <PrezintatsiyaSale/>
        </div>
      </div>

      
      <div className=""></div>
    </div>
  );
}

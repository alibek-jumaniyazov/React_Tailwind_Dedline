import React from "react";
import ArrowButton from "../ui/ArrowButton";
import katalogImg1 from "../../assets/images/prImg1.png";
import katalogImg2 from "../../assets/images/prImg2.png";
import katalogImg3 from "../../assets/images/prImg3.png";
import PrezintatsiyaSaleTow from "./PrezintatsiyaSaleTow";


export default function ProductAboutTow() {
  return (
    <div className="ProductAbout w-full">
      
      <div className="flex justify-between items-center">
      <PrezintatsiyaSaleTow/>

        <div className="w-2/4 flex flex-col justify-center items-center gap-4">
          <div className="group cursor-pointer w-80 h-[169px] flex flex-col justify-between items-center gap-3 ">
            <div className="">
              <p className="hidden group-hover:flex fontRoman">
                Перейти в каталог
              </p>
            </div>
            <img src={katalogImg1} alt="" className="" />
            <div className=" w-full flex justify-end">
              <div className="hidden group-hover:flex">
                <ArrowButton />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-start w-full gap-3">
            <div className="group cursor-pointer w-[340px] h-40  flex flex-col justify-center items-center p-5">
              <p className="hidden group-hover:flex fontRoman">
                Перейти в каталог
              </p>
              <img src={katalogImg3} alt="" />
              <div className=" w-full flex justify-end">
                <div className="hidden group-hover:flex w-full flex justify-end">
                  <ArrowButton />
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-[340px] h-40  flex flex-col justify-center items-center">
              <p className="hidden group-hover:flex fontRoman">
                Перейти в каталог
              </p>
              <img src={katalogImg2} alt="" />
              <div className=" w-full flex justify-end">
                <div className="hidden group-hover:flex w-full flex justify-end">
                  <ArrowButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

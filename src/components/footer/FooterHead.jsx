import React from "react";
import footerIcon from "../../assets/icons/footerIcon.svg";

export default function FooterHead() {
  return (
    <div className="FooterHead flex w-full justify-between items-center">
      <div className="flex flex-col justify-center items-start gap-7">
        <span className="text-sm text-garyTow">По всем вопросам</span>
        <p className="text-5xl text-garyFour decoration-solid ">
          maldex@info.com
        </p>
      </div>
      <div className="flex flex-col justify-center items-start gap-7">
        <span className="text-sm text-garyTow">
          Бесплатный звонок из любой точки России
        </span>
        <p className="text-5xl text-garyFour decoration-solid">
          8-800 333-67-84
        </p>
      </div>
      <img src={footerIcon} alt="" />
    </div>
  );
}

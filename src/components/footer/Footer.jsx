import React, { useState } from "react";
import FooterHead from "./FooterHead";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <div className="Footer flex flex-col justify-center items-start gap-14 bg-[#090909] w-full p-7 fontRoman">
      <FooterHead />
      <FooterMain />
      <FooterBottom />
    </div>
  );
}

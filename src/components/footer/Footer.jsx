import React, { useState } from "react";
import FooterHead from "./FooterHead";
import FooterMain from "./FooterMain";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <div className="Footer  flex flex-col justify-center items-start gap-14 bg-[#090909] w-full p-7 fontRoman max-[320px]:bg-red-700 flex flex-row gap-96"  >
      <FooterHead />
      <FooterMain />
      <FooterBottom />
    </div>
  );
}

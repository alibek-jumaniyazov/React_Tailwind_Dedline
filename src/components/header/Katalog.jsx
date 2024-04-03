import React from "react";
import menu from "../../assets/icons/menu.svg";

export default function Katalog() {
  return (
    <div className="Katalog flex justify-center items-center gap-2 rounded-lg w-[120px] h-9 bg-main cursor-pointer">
      <img src={menu} alt="" />
      <p className="text-white text-lg fontRoman">Каталог</p>
    </div>
  );
}

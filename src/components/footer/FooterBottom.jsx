import React from "react";

export default function FooterBottom() {
  return (
    <div className="FooterBottom flex  w-full border-t pt-5 border-white justify-between items-center">
      <div className="">
        <span className="text-sm text-garyTow">
          © 2023 Maldex. Все права защищены.
        </span>
      </div>
      <div className="flex gap-3 text-sm text-garyFour">
        <div className="p-1 border border-garyFour rounded-md">
          <p className="">Правила использования материалов</p>
        </div>
        <div className="p-1 border border-garyFour rounded-md">
          <p className="">Политика конфиденциальности</p>
        </div>
        <div className="p-1 border border-garyFour rounded-md">
          <p className="">Написать сообщение</p>
        </div>
      </div>
    </div>
  );
}

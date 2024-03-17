import React from "react";
import Pimg1 from "../../assets/images/Pimg1.png"
import Pimg2 from "../../assets/images/Pimg2.png"
import Pimg3 from "../../assets/images/Pimg3.png"
import Pimg4 from "../../assets/images/Pimg4.png"
import Pimg5 from "../../assets/images/Pimg5.png"


export default function ImagesProduct() {
  return (
    <div className="ImagesProduct">
      <div className="">
        <div className="">
          <div className="">
            <p>Сувенирная продукция</p>
            <span>
              Каталог «от ручки до ракеты» «от промо до VIP» Более 1 000 000
              бизнес сувениров со всего мира
            </span>
          </div>
          <img src={Pimg1} alt="" />
        </div>
        <div className="">
          <img src={Pimg2} alt="" />
          <div className="">
            <img src={Pimg3} alt="" />
            <img src={Pimg4} alt="" />
          </div>
        </div>
        <div className="">
          <img src={Pimg5} alt="" />
        </div>
      </div>
    </div>
  );
}

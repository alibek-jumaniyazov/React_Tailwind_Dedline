import logo from "../../assets/icons/logo.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import location from "../../assets/icons/location.svg";
import heart from "../../assets/icons/heart.svg";

export default function Navbar() {
  return (
    <div className="Navbar ">
      <div className="">
        <img src={logo} alt="" />
        <div className="">
          <img src={phoneIcon} alt="" />
          <p>8-800-333-6784</p>
        </div>

        <div className="">
          <img src={emailIcon} alt="" />
          <p> info@maldex.ru</p>
        </div>

        <div className="">
          <img src={location} alt="" />
          <p>Москва</p>
        </div>
      </div>
      <div className="">
        <span>Минимальная сумма заказа от 30 тыс рублей</span>
      </div>
      <div className="">
        <div className="">
          <p>Доставка</p>
          <p>Оплата</p>
          <p>Контакты</p>
        </div>
        <div className="">
          <img src={heart} alt="" />
        </div>
      </div>
    </div>
  );
}

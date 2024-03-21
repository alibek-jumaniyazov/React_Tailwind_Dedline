import logo from "../../assets/icons/Logo.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import emailIcon from "../../assets/icons/emailIcon.svg";
import location from "../../assets/icons/location.svg";
import heart from "../../assets/icons/heart.svg";

export default function Navbar() {
    return (
        <div className="Navbar flex justify-between items-center w-full border-b border-[#E1DFDA] h-20">
            <div className="flex gap-5 fontRoman text-sm ">
                <img src={logo} alt="" />
                <div className="flex gap-4 justify-center items-center">
                    <img src={phoneIcon} alt="" />
                    <p className="hidden mobile:inline">8-800-333-6784</p>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img src={emailIcon} alt="" />
                    <p> info@maldex.ru</p>
                </div>
                <div className="flex gap-4 justify-center items-center">
                    <img src={location} alt="" />
                    <p>Москва</p>
                </div>
            </div>
            <div className="text-[#9D9C98] text-sm">
                <span>Минимальная сумма заказа от 30 тыс рублей</span>
            </div>
            <div className="flex justify-center items-center gap-5 fontRoman">
                <div className="flex text-sm gap-5">
                    <p className="cursor-pointer">Доставка</p>
                    <p className="cursor-pointer">Оплата</p>
                    <p className="cursor-pointer">Контакты</p>
                </div>
                <div className="">
                    <img src={heart} alt="" />
                </div>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center w-9 h-9 rounded-full bg-main">
                        <span className="text-white text-sm">3</span>
                    </div>
                    <p>14 619,00 ₽</p>
                </div>
            </div>
        </div>
    );
}

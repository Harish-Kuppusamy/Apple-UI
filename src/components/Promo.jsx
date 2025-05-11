import iPad from "../assets/ipad.jpg";
import iPhone from "../assets/iphone.jpg";
import iPhone16 from "../assets/iphone16.jpg";
import macbook from "../assets/macbook.jpg";
import man from "../assets/man.jpg";
import watch2 from "../assets/watch2.jpg";
import { FaApple } from "react-icons/fa";



const promoData = [
  {
    image: iPad,
    title: "Ipad Air",
    subtitle: "Now Super Charged By M3 Ship!",
    button: "Buy",
    align: "start",
    textColor: "text-black",
  },
  {
    image: iPhone,
    title: "TradeIn",
    subtitle: "Upgrade And Use! Its That's easy",
    button: "Get Estimate",
    align: "start",
    textColor: "text-black",
  },
  {
    image: iPhone16,
    title: "Iphone 16",
    subtitle: "Build For Apple Intelligence",
    button: "Buy",
    align: "end",
    textColor: "text-white",
  },
  {
    image: macbook,
    title: "MacBook Air",
    subtitle: "Sky Blue Colour Build Your Passion!",
    button: "Buy",
    align: "start",
    textColor: "text-black",
  },
  {
    image: man,
    title: "Airpods-4",
    subtitle: "Iconic! Now Super Sonic, Available With Noice cancellation.",
    button: "Buy",
    align: "end",
    textColor: "text-white",
  },
  {
    image: watch2,
    title: (
      <span className="flex items-center justify-center gap-1">
        <FaApple /> Watch
      </span>
    ),
    subtitle: "Show Your Stripes With New Pride Edition Sports Band!",
    button: "Buy",
    align: "start",
    textColor: "text-black",
  },
];



function Promo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-6">
      {promoData.map((item, index) => (
        <div
          key={index}
          className={`w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-${item.align}`}
          style={{ backgroundImage: `URL(${item.image})` }}
        >
          <div
            className={`w-fit h-fit mx-auto ${
              item.align === "end" ? "mb-6 md:mb-24" : "mt-6 md:mt-24"
            } flex flex-col gap-1 md:p-4`}
          >
            <h1
              className={`text-center font-bold text-xl md:text-5xl ${item.textColor}`}
            >
              {item.title}
            </h1>
            <h3 className={`font-light md:text-3xl ${item.textColor}`}>
              {item.subtitle}
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              {item.button}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Promo
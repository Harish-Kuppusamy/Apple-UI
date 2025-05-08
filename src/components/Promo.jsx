import iPad from "../assets/ipad.jpg";
import iPhone from "../assets/iphone.jpg";
import iPhone16 from "../assets/iphone16.jpg";
import macbook from "../assets/macbook.jpg";
import man from "../assets/man.jpg";
import watch2 from "../assets/watch2.jpg";
import { FaApple } from "react-icons/fa";


function Promo() {
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mt-6">
        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
          style={{ backgroundImage: `URL(${iPad})` }}
        >
          <div className="w-fit h-fit mx-auto  mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl">Ipad Air</h1>
            <h3 className="font-light md:text-3xl">
             Now Super Charged By M3 Ship!
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>

        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
          style={{ backgroundImage: `URL(${iPhone})` }}
        >
          <div className="w-fit h-fit mx-auto  mt-6 flex flex-col gap-1.5 md:mt-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl">TradeIn</h1>
            <h3 className="font-light md:text-3xl">
              Upgrade And Use! Its That's easy
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Get Estimate
            </button>
          </div>
        </div>

        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-end"
          style={{ backgroundImage: `URL(${iPhone16})` }}
        >
          <div className="w-fit h-fit mx-auto  mb-6 flex flex-col gap-1 md:mb-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl text-white">Iphone 16</h1>
            <h3 className="font-light md:text-2xl  text-white">
              Build For Apple Intelligence
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>

        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
          style={{ backgroundImage: `URL(${macbook})` }}
        >
          <div className="w-fit h-fit mx-auto  mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl">MacBook Air</h1>
            <h3 className="font-light md:text-3xl">
              Sky Blue Colour Build Your Passion!
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>

        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-end"
          style={{ backgroundImage: `URL(${man})` }}
        >
          <div className="w-fit  h-fit mx-auto  mb-6 flex flex-col gap-1.5 md:mb-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl text-white">Airpods-4</h1>
            <h3 className="font-light md:text-2xl text-white">
             Iconic! Now Super Sonic, Available With Noice cancellation.
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>

        <div
          className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
          style={{ backgroundImage: `URL(${watch2})` }}
        >
          <div className="w-fit h-fit mx-auto  mt-6 flex flex-col gap-1 md:mt-24 md:p-4">
            <h1 className="text-center font-bold text-xl md:text-5xl">
                   <span className="flex items-center justify-center gap-1"><FaApple/> Watch</span>
                   </h1>
            <h3 className="font-light md:text-3xl">
              Show Your Stripes With New Pride Edition Sports Band!
            </h3>
            <button className="block mx-auto bg-blue-600 text-white font-thin px-2 py-1.5 rounded-md cursor-pointer">
              Buy
            </button>
          </div>
        </div>
      </div>
    );

}

export default Promo
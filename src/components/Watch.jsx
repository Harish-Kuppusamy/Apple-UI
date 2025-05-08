import watch from "../assets/watch.jpg";
import { FaApple } from "react-icons/fa";
function Watch() {
  return (
    <div
      className="w-full h-[400px] md:h-[800px] bg-cover bg-center mt-4 flex items-start"
      style={{ backgroundImage: `URL(${watch})` }}
    >
      <div className="w-fit h-fit mx-auto  mt-6 flex flex-col gap-1 md:mt-24">
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
  );
}

export default Watch

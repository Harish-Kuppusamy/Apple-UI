import { FaApple } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between md:justify-center space-x-4 md:gap-5 bg-black text-white md:bg-opacity-75 py-4 px-3 fixed top-0 left-0">
      <FaApple size={24} className="cursor-pointer" />

      
        <ul className="hidden md:flex space-x-3 text-sm font-light md:font-normal " >
          <li className="hover:text-gray-300 cursor-pointer">Store</li>
          <li className="hover:text-gray-300 cursor-pointer">Mac</li>
          <li className="hover:text-gray-300 cursor-pointer">iPad</li>
          <li className="hover:text-gray-300 cursor-pointer">iPhone</li>
          <li className="hover:text-gray-300 cursor-pointer">Watch</li>
          <li className="hover:text-gray-300 cursor-pointer">AirPods</li>
          <li className="hover:text-gray-300 cursor-pointer">TV & Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Entertainment</li>
          <li className="hover:text-gray-300 cursor-pointer">Accessories</li>
          <li className="hover:text-gray-300 cursor-pointer">Support</li>
        </ul>
   

      <div className="flex items-center justify-center space-x-6">
        <FiSearch size={20} className="cursor-pointer" />
        <BsBag size={20} className="cursor-pointer" />
        <HiOutlineMenu size={20} className="cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;

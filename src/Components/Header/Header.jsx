import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import { FaCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <h1 className="text-5xl text-center font-Playfair font-bold mt-10">
        Awoaz News Portal
      </h1>
      <p className="text-base text-center mt-4 text-gray-500">
        Journalism Without Fair Or Favour
      </p>
      <p className="text-base text-center mt-4 text-gray-500">
        <span className="font-semibold text-black">Sunday</span> 2025
      </p>
      <p className="mt-4 py-3 bg-base-200 text-center font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem cum
        ullam facere, quasi sunt aspernatur!{" "}
      </p>
      <div className=" flex justify-between items-center  mt-10 mb-10">
        <div className=" flex md:justify-end md:w-[60%]">
            
          
          <Navbar ></Navbar>
        </div>
        <div className="flex  items-center justify-end gap-4 ">
          <p className="text-2xl">
            <FaCircleUser />
          </p>
          <button className="bg-gray-700 py-2 px-6 text-white">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

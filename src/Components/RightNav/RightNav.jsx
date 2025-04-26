import React from "react";
import { FaGoogle } from "react-icons/fa6";

import { FiGithub } from "react-icons/fi";
// import { FcGoogle } from 'react-icons/fc';

const RightNav = () => {
  return (
    <div>
      <h3 className="font-bold">Login With</h3>
      <div className="flex flex-col gap-2 mt-5">
        <button className=" border-2 border-blue-500 py-1  text-blue-500 rounded-sm flex items-center   text-center justify-center gap-2">
          <div>
            <FaGoogle />
          </div>
          <div>
            Login With Goggle
          </div>
        </button>
        <button className=" border-2 border-gray-700 py-1  text-gray-700 rounded-sm flex items-center   text-center justify-center gap-2">
          <div>
          <FiGithub />
          </div>
          <div>
            Login With Goggle
          </div>
        </button>
        
      </div>
    </div>
  );
};

export default RightNav;

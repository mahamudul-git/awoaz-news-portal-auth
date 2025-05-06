import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import { FaCircleUser } from "react-icons/fa6";
import moment from "moment";
import LatestNews from "../LatestNews/LatestNews";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {user,logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      console.log('log out successfully');
    })
    .catch(error=>{
      console.log(error.message);
    })
  }

  return (
    <div>
      <h1 className="text-5xl text-center font-Playfair font-bold mt-10">
        Awoaz News Portal
      </h1>
      <p className="text-base text-center mt-4 text-gray-500">
        Journalism Without Fair Or Favour
      </p>
      <p className="text-base text-center mt-4 text-gray-500">
        {moment().format("dddd, MMMM D, YYYY, h:mm:ss a")}
      </p>
      <div className="flex justify-between items-center ">
        <h4 className="bg-red-600 px-4 py-2 text-white rounded-sm text-center">
          Latest
        </h4>
        <LatestNews></LatestNews>
      </div>
      <div className=" flex justify-between items-center  mt-10 mb-10">
        <div className=" flex md:justify-end md:w-[60%]">
          <Navbar></Navbar>
        </div>
        <div className="flex  items-center justify-end gap-4 ">
          <p className="text-2xl">
            <FaCircleUser />
          </p>
          {
            user? 
            <button onClick={handleLogOut} className="bg-gray-700 py-2 px-6 text-white">LogOut</button>
            :<Link to="/login">
            <button className="bg-gray-700 py-2 px-6 text-white">Login</button>
          </Link>
         
          }
        </div>
      </div>
    </div>
  );
};

export default Header;

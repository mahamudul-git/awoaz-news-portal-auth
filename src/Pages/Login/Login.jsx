import { FaCircleUser } from "react-icons/fa6";
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className=" flex justify-between items-center  mt-10 mb-10">
      <div className=" flex md:justify-end md:w-[60%]">
        <Navbar></Navbar>
      </div>
      <div className="flex  items-center justify-end gap-4 ">
        <p className="text-2xl">
          <FaCircleUser/>
        </p>
        <Link to="/login">
          <button className="bg-gray-700 py-2 px-6 text-white">Login</button>
        </Link>
      </div>

      
    </div>
    <div className="w-full md:w-[50%] mx-auto  p-10 shadow-md rounded-md mt-20 bg-base-100 ">
        <h3 className="text-lg font-bold text-center">Login Your Account</h3>
        <form action="">
          <div className="form-control w-full mt-5">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full mt-5">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered w-full "
            />
          </div>
         <input className="btn w-full mt-5 bg-gray-800 text-white" type="submit" value='Login' />
          <p className="text-center mt-5">New to this site? <Link to="/register" className="text-blue-500">Create an account</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;

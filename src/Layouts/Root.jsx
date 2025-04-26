import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-l md:px-6 px-2">
            <Header></Header>
            <Outlet></Outlet>
          
            
        </div>
    );
};

export default Root;
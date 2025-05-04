import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="max-w-screen-xl mx-auto font-l md:px-6 px-2">
            
            <Outlet></Outlet>
          
            
        </div>
    );
};

export default Root;
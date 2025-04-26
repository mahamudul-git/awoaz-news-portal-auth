import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex gap-10 justify-between">

            <NavLink to='/'  >Home</NavLink>
            <NavLink to='/about' >About</NavLink>
            <NavLink to='/career'  >Career</NavLink>
            
        </div>
    );
};

export default Navbar;
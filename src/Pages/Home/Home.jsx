import LeftNav from "../../Components/LeftNav/LeftNav";
import RightNav from "../../Components/RightNav/RightNav";

const Home = () => {
    return (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 md:gap-6 ">
            <div className="invisible md:visible"><LeftNav></LeftNav></div>
            <div className="col-span-2">
                <h3 className="font-bold">Awoaz News Home</h3>
            </div>
            <div className="invisible md:visible" ><RightNav></RightNav></div>
        </div>
    );
};

export default Home;
import Header from "../../Components/Header/Header";
import LeftNav from "../../Components/LeftNav/LeftNav";
import RightNav from "../../Components/RightNav/RightNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-4 md:gap-6 ">
            <div className="hidden md:block"><LeftNav></LeftNav></div>
            <div className="col-span-2">
                <h3 className="font-bold">Awoaz News Home</h3>
            </div>
            <div className="hidden md:block" ><RightNav></RightNav></div>
        </div>
        </div>
    );
};

export default Home;
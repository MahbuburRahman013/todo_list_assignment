import Banner from "./Banner";
import Footer from "./Footer";
import Navbar from "./Navbar";
import User from "./User";


const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mt-[55px]">
            <Banner></Banner>
            <User></User>
           <Footer></Footer>
            </div>
        </div>
    );
};

export default HomePage;
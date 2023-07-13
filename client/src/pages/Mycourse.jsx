import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import reconstruction from "../assets/reconstruction.png"
import ImageComponent from "../components/ImageComponent";

function Mycourse(){
 
    return(
        <>
        <Navbar/>
    <div className="max-w-[1240px] mx-auto floa px-4 mt-[-100px] ">
        <div className="sm:text-7xl text-5xl font-bold py-[400px]  text-center">My course comming soon!</div>
        <div className="flex ">
        <ImageComponent src={reconstruction} styling="sm:h-[425px] h-[250px] max-w-[1240px] mx-auto mt-[-300px] mb-[250px]" useHeight={250} useWidth={300} useHash="LNLWd|jr0[j[TLaxxZfl1nbHr;az"/>
        </div>
        </div>
        <Footer/>
        </>
    )
}


export default Mycourse
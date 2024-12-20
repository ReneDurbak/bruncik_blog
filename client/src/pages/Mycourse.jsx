import reconstruction from "../assets/reconstruction.png";
import ImageComponent from "../components/ImageComponent";
import Email from "../components/Email";
import { Link } from "react-scroll";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Mycourse() {
  return (
    <>
      <Helmet>
        <title>My course page</title>
        <link rel="icon" type="image/svg+xml" href="/mycourse.png" />
      </Helmet>

      <Navbar />
      <div className="max-w-[1240px] mx-auto  px-4  ">
        <div className="sm:text-7xl text-5xl font-bold py-[250px]   text-center">
          My course coming soon!{" "}
          <div className="sm:text-2xl text-lg mt-20 ">
            Sign up for our exclusive mailing list down below now and be part of
            an extraordinary journey of growth and transformation.{" "}
          </div>
          <button className="bg-slate-300 rounded-xl p-2 text-center duration-500 ease-in-out hover:scale-110 sm:mt-0 mt-2  shadow-xl">
            <Link to="Email" smooth={true} offset={-400}>
              {" "}
              <AiOutlineArrowDown className="sm:text-3xl text-2xl" />
            </Link>
          </button>
        </div>

        <div className="flex">
          <ImageComponent
            src={reconstruction}
            styling="sm:h-[425px] h-[250px] max-w-[1240px] mx-auto mt-[-200px] md:mb-[300px] mb-[200px]"
            useHeight={250}
            useWidth={300}
            useHash="LNLWd|jr0[j[TLaxxZfl1nbHr;az"
          />
        </div>
      </div>

      <Email />
      <Footer />
    </>
  );
}

export default Mycourse;

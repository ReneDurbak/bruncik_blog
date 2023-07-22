import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import selfie from "../assets/selfe.jpg"
import { Link } from "react-router-dom";
import food from"../assets/food.jpg"
import gym from"../assets/gym.jpg"
import aehim from "../assets/aehim.jpg"
import book from "../assets/book.jpg"
import ImageComponent from "../components/ImageComponent";
import Email from "../components/Email";
import Registration from "../components/Registration";






function About(){

    {/*1st picture*/}
    const hash1 = "LFLDroDOOSMv_MNGDj%M.TogD%D*";
    const styling1 = "w-[600px] float-right mt-[-670px] rounded-md shadow-xl"
    const height1 = 800;
    const width1 = 550;


    {/*2nd picture*/}

    const hash2 = "|33[@:-;D*9FDiM|.7-;xaRjf6fks:off6Rkayj[00D%-:?b.8tQD%D%NGx[ogaeM{M|kC%LogR*~p-;IU9FDiRj%g?Ht7MxNFog%M%LRjIURjt74oD%%L-;-;t7IUD%Rix]xuV@IUIVxt%MxuNG?b%MRjD%D%M{%M-;t8"
    const styling2 = "float-left rounded-xl w-[475px] mr-12 h-1/2 "
    const height2 = 845;
    const width2 = 475;


    {/*3rd picture - Food*/}
    const hash3 = "|DGHYi={K6W?OsofxCxaNG~Bj[Rjs:ofxaoLWBWq5;I;D$xYr=RkI;R*off9s:WoayWVR*WBoJo1D%s.kDNHo#oJxuoes:nNodogNGR*o0WCbbjZR5s:x^j[WBkCaJR+NGn#xGkDWXsSbHjtWXf6ofs.t7WVM_a#R*smxa";
    const styling3 = "w-full rounded-lg mb-6 2xl:h-[355px] xl:h-[320px] lg:h-[250px] md:h-[170px] sm:h-[140px] h-[140px]"
    const height3 = 350;
    const width3 = 325;

    
    {/*4th picture - Nature*/}
    const hash4 = "|+GvS8aJjGfQayaxafjtf6lVjFjsbHoKj?ayazayafbcjYf6jsj[fRazayVroej[aya|j@fRayfQIpjEfkj[oej?ayfQj[o#WDjta}ayj[f6jtayt6bbayoLazbHj[fQjtadoej[WVa#a}fkj@fQRkjYoea}WVazj[fkj@";
    
    {/*5th picture - book*/}
    const hash5 = "|DHBbzLNX8rp4os,MxNGNH-Uj]RjM{xFR+j[aeRj00m+Iqo#?GR+R*NGjFMxD%Ne-:IpV@jFxuo}RjM|RPW=o}xux]tRofE3t6V@Ipxuxut7M|nhyDtRs:NGoJf7Rjs,t7t7kDRjM{xDR*ayt5kCX9xatRoeRPIVaeWBVs";


    {/*6th picture - gym*/}
    const hash6 = "|GGIP}p1I-R;Rqj]Sh%KIUpJb{aeayR*j^R,tRRjGdtS#lWBkVa#njbdV?u6o$j=bJs;aejZozV@NKkXXTjraJa}a#bJj[bLW=RibIkCWBWBbIWAt8kDxuofaxa#R*kCofozWVt8oJRjbHa{ayV@NaR+ofj]a}oLV@t6j]";





return(
    <> 
    <Navbar/>
    
    {/*Hello intro*/}
        <div className="xl:py-[545px] max-w-[1240px] mx-auto text-left  2xl:px-[10px] px-[20px] md:text-[170px] text-4xl font-bold not-italic">
    <div className="mt-[120px] ml-[px]">
      <div className="">Hello!</div>
      <div className="italic text-[90px] mt-[100px] font-shadows font-regular">I am Peter Brunčík</div>

      </div>
      <ImageComponent useHash={hash1} src={selfie} styling={styling1} useWidth={width1} useHeight={height1}/>
    </div>


        

    {/*Who am I?*/}
    <div className="w-full bg-stone-500		 py-[350px]">
        <div className="max-w-[1240px] mx-auto  text-white px-4">
        <ImageComponent src={aehim} useHash={hash2} styling={styling2} useWidth={width2} useHeight={height2}/>
        <div className="mb-[150px] mt-[-170px]">
        <h1 className="text-7xl font-bold text-start" >Who am I?</h1>
        </div> 

        <div className="text-xl break-words font-regular tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit vehicula est, nec mattis magna semper eu. Nunc convallis gravida enim a fringilla. Aliquam viverra condimentum varius. Donec rutrum commodo sapien a blandit. Pellentesque eget faucibus augue, ut cursus ipsum. Vestibulum aliquam tempor lorem, ac fermentum ipsum vestibulum non. Duis sit amet porttitor dui. Curabitur euismod eget sem ac hendrerit.
        </div>


        </div>
    </div>


    {/*Values*/}

<div className="max-w-[1360px] mx-auto py-[175px] sm:px-4 sm:mb-[125px]">
  <h1 className="text-center sm:text-7xl text-5xl font-bold">
    My values
  </h1>

  <div className="grid sm:grid-cols-3  lg:gap-20 sm:gap-8 gap-2  text-center sm:mt-[125px] mt-[50px] lg:text-xl sm:text-lg text-xs px-4">
    
    <div className="2xl:w-[325px] sm:w-full w-[150px]">
      <ImageComponent src={food} useHash={hash3} styling={styling3} useWidth={width3} useHeight={height3} />
      <div className="border-2 rounded-3xl bg-stone-500 text-white sm:p-2 p-1 duration-300 ease-in-out hover:scale-105">
        <Link to="/articles">Learn More</Link>
      </div>
    </div>

    

    <div className="2xl:w-[325px] sm:w-full w-[150px]">
      <ImageComponent src={book} useHash={hash5} styling={styling3} useWidth={width3} useHeight={height3} />
      <div className="border-2 rounded-3xl bg-stone-500 text-white p-2 duration-300 ease-in-out hover:scale-105">
        <Link to="/articles">Learn More</Link>
      </div>
    </div>

    <div className="2xl:w-[325px] sm:w-full w-[150px]">
      <ImageComponent src={gym} useHash={hash6} styling={styling3} useWidth={width3} useHeight={height3} />
      <div className="border-2 rounded-3xl bg-stone-500 text-white p-2 duration-300 ease-in-out hover:scale-105">
        <Link to="/articles">Learn More</Link>
      </div>
    </div>
  </div>
</div>

    


<Registration/>


    
    <Footer/>
    </>
)


}

export default About
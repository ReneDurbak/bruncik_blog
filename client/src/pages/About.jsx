import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import selfie from "../assets/selfiePhoto.png"
import { Link } from "react-router-dom";
import Registration from "../components/Registration";
import { Helmet } from 'react-helmet';






function About(){

    {/*1st picture*/}
    const hash1 = "LFLDroDOOSMv_MNGDj%M.TogD%D*";
    const styling1 = "w-[500px] float-right"
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
    <Helmet>
        <title>About me</title>
        <link rel="icon" type="image/svg+xml" href="/aboutme.png" />
    </Helmet>

    <Navbar/>
    
    {/*Hello intro*/}
    <div className="bg-no-repeat bg-cover pt-[100px] pb-[90px]" style={{
      backgroundImage: `url('/src/assets/aboutMeIntro.png')`,
      backgroundSize: '120%',
      backgroundPosition: 'center'}}>
        <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 lg:px-20 sm:px-10 px-6 md:text-[170px] text-4xl font-bold not-italic">
    <div className="mt-0 flex">
      <div className="pr-20 mt-[150px]">
        <div className="font-bold">Hi!</div>
        <div className="text-[90px] mt-[100px] font-thin">I am Peter<div className="mt-10">Brunčík</div> </div>
        <div className="text-lg font-thin font-spectral tracking-wide mt-20 mb-[-40px]">Oh, hello. So, you're genuinely curious about who I am. That truly warms my heart. So, without further ado, allow me to introduce myself. I'm Peter Brunčík, an 18-year-old with no major achievements, no prestigious competition wins, and absolutely no fame in the media spotlight. Surprising, isn't it? I'm just an ordinary individual who wholeheartedly embraces self-discovery and personal growth. I'm on a life journey striving to become the best version of myself. Will you join me?</div>
        <button className="p-2 text-white  bg-[#2A6CA5] custom-shadow text-sm rounded-[30px]">Learn more</button>
      </div>
      <img src={selfie} className="h-[750px] aspect-auto p-10 float-right mt-8"/>
      </div>
    </div>
    </div>


        

  {/*My story*/}

  <div className="h-[850px] bg-no-repeat mt-[-100px]" style={{
      backgroundImage: `url('/src/assets/aboutMeMyStory.png')`,
      backgroundSize: '100%',
      backgroundPosition: 'center'}}>
      
      <div className="mt-20">
      <h1 className="text-black text-3xl text-center pt-20 font-spectral uppercase tracking-[10px] font-bold">My story</h1>


      

      <div className="relative">
        <div className="bg-white p-4 w-[450px] h-[250px] float-left ml-20 mt-[50px] blur-xl rounded-[30px] relative">
        </div>
        <p className="absolute top-[90px] blur-none w-[400px] left-[120px]">My story begins where your story ends. Naozaj! Moja cesta transformácie začala práve vtedy, keď som sa ocitol v situácií, kde som bezprostredne videl ako mnohí moji rovesníci sa oddávajú zábave a iným nerestiam, vedú bezstarostný život a žijú zo dňa na deň. Ja som bol však v tomto </p>
      </div>
      

      <div className="relative">
        <div className="bg-white p-4 w-[500px] h-[300px] float-right mr-20 mt-[350px] blur-xl rounded-[30px] relative">
        </div>
        <p className="absolute top-[400px] blur-none w-[400px] right-[135px]"> Sed molestie, quam a fringilla fringilla, nibh est interdum lectus, a pulvinar lectus lorem sit amet nisl. Aliquam consectetur, turpis quis ultrices rutrum, nisi ante aliquam libero, nec mattis augue leo eget ligula. Proin ac semper lorem. Suspendisse posuere accumsan diam sed tempor. Vivamus nunc dui, cursus sed augue eget, sodales eleifend orci. Fusce vestibulum volutpat velit. </p>
      </div>


      </div>

  </div>

    


<Registration/>


    
    <Footer/>
    </>
)


}

export default About
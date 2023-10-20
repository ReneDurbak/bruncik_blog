import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive'
import {Link as RouteLink} from "react-router-dom"
import { Helmet } from 'react-helmet';
import Autosuggest from 'react-autosuggest';
import magnifier from "../assets/magnifier.png"
import arrowDown from "../assets/arrowDown.png"
import NewsletterPopup from "../components/NewsletterPopup";

{/*Icons - unchecked filter option*/}
import meditation from "../assets/filteroptions/meditationFilter.png"
import wmh from "../assets/filteroptions/WHMfilter.png"
import vegan from "../assets/filteroptions/veganfilter.png"
import exercise from "../assets/filteroptions/exercisefilter.png"
import nofap from "../assets/filteroptions/nofapfilter.png"
import mind from "../assets/filteroptions/mindfilter.png"
import inspiration from "../assets/filteroptions/insipirationfilter.png"



{/*Icons - checked filter option*/}
import meditationWhite from "../assets/filteroptions/meditationFilterW.png"
import wmhWhite from "../assets/filteroptions/WHMfilterW.png"
import veganWhite from "../assets/filteroptions/veganfilterW.png"
import exerciseWhite from "../assets/filteroptions/exercisefilterW.png"
import nofapWhite from "../assets/filteroptions/nofapfilterW.png"
import mindWhite from "../assets/filteroptions/mindfilterW.png"
import inspirationWhite from "../assets/filteroptions/insipirationfilterW.png"




function Articles(){

      {/*Filter*/}
      const filterOptions = useMemo(()=>[
        {name: "MEDITATION", id:1, imageUrl: meditation, imageUrlClicked:meditationWhite},
        {name: "WHM - WIM HOF METHOD", id:2, imageUrl: wmh, imageUrlClicked:wmhWhite},
        {name: "GO VEGAN", id:3, imageUrl: vegan, imageUrlClicked:veganWhite},
        {name: "EXERCISE", id:4, imageUrl: exercise, imageUrlClicked: exerciseWhite},
        {name: "NOFAP", id: 5,imageUrl: nofap, imageUrlClicked: nofapWhite},
        {name: "MIND & SOUL", id: 6, imageUrl: mind, imageUrlClicked:mindWhite},
        {name: "INSPIRATION", id: 7, imageUrl: inspiration, imageUrlClicked:inspirationWhite},
      ],
      []
      
      );

      const ListofArticles = [
        {
          id: 1,
          title: "How to start meditation (Beginners Guide)",
          label: filterOptions[0].name,
        },
        {
          id: 2,
          title: "The Wim Hof Method and Its Surprising Benefits",
          label: filterOptions[1].name,
        },
        {
          id: 3,
          title: "Vegan staple foods (must eat)",
          label: filterOptions[2].name,
        },
        {
          id: 4,
          title: "TOP 3 books about Stoicism (Ryan Holiday choice)",
          label: filterOptions[6].name,
        },
      ]
  

      {/*Filter*/}
      const [selectedFilter, setSelectedFilter] = useState(null);
      const [checkClickFilter, setcheckClickFilter] = useState(false)
      
      const handleFilterClick = (filter) => {
        setSelectedFilter(selectedFilter === filter ? null : filter);
        setcheckClickFilter(!checkClickFilter)
      };
      

      {/*Filter hover effect*/}
      const [hoveredFilter, setHoveredFilter] = useState(null);

        const handleFilterHover = (filterId) => {
          setHoveredFilter(filterId);
        };




      {/*Search*/}
      const [searchQuery, setSearchQuery] = useState(""); // State to store the search query
      const [suggestions, setSuggestions] = useState([]); // State to store search suggestions
    
      // Function to handle search input change
      const handleSearchChange = (event, { newValue }) => {
        setSearchQuery(newValue);
      };
    
      // Function to fetch suggestions based on the input value
      const getSuggestions = (value) => {
        // Fetch suggestions from your backend based on the input value
        // Update the suggestions state with fetched suggestions
      };

      const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          handleSearchSubmit();
        }
      };
    
      // Autosuggest input properties
      const inputProps = {
        value: searchQuery,
        onChange: handleSearchChange,
        onKeyPress: handleKeyPress,
        id: "searchInput",
        placeholder: "Search...",
        className: "outline-none sm:pt-2 lg:pt-3 pt-1 sm:pb-1 lg:pb-2 xl:pb-2 pb-1  2xl:text-[23px] xl:text-[26px] lg:text-xl sm:text-[17px] text-[16px] w-full ease-in-out duration-500 flex font-normal block px-3 pr-4 xl:text-[25px] tracking-wide"
      }; 


      //Media queries
      const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})





      {/*Pop-up*/}
      const [timedPopup, setTimedPopup] = useState(false) 


      useEffect(()=>{
        setTimeout(()=>{
          setTimedPopup(true)
        },1000);
        
      },[])


    return(
        <>

<Helmet>
        <title>Articles Page</title>
        <link rel="icon" type="image/svg+xml" href="/articles.png" />
</Helmet>

{/*Articles intro*/}
    <Navbar/>
    <div id="articles" className="text-white 2xl:pt-[200px]  2xl:pb-[75px] xl:pt-[250px] xl:pb-16 lg:pt-[350px] lg:pb-[115px]  md:pt-[300px] md:pb-[50px] sm:pt-[150px] sm:pb-[120px] pt-[260px] pb-20   md:tracking-normal   2xl:bg-[url('/src/assets/articlesintrobg.png')] xl:bg-[url('/src/assets/articlesintrobglaptopxl.png')] md:bg-[url('/src/assets/articlesintrobgtablet.png')] bg-[url('/src/assets/articlesintrobgmobile.png')] bg-cover font-spectral ">
     <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-20 sm:px-10 px-6 grid sm:grid-cols-2 sm:grid-flow-col	lg:gap-8 sm:gap-8 2xl:mt-4 xl:mt-[-25px] lg:mt-[-185px] md:mt-[-135px] sm:mt-[-25px] mt-[-190px]">   
     
     <div className="col-span-2 sm:mt-0 2xl:mt-[-25px]">
    <h1 className="2xl:text-8xl lg:text-7xl mb-6 text-6xl tracking-wide" >Articles</h1>

  <div className="2xl:text-[30px] xl:text-2xl lg:text-[19px] md:text-lg sm:text-[19px]  text-[17px] mb-[100px] tracking-wide">
    <div>
      “It is impossible for a man to learn what he thinks he already knows.”
      <div className="text-right mt-4 font-bold">-Epictetus</div>
    </div>
  </div>

{/*desktop - additional text*/}
  <div className="hidden lg:block">
  <div className=" tracking-normal 2xl:text-lg xl:text-[16px] md:text-[15px] break-words text-black bg-slate-100 rounded-2xl py-5 px-6 mt-[100px] font-poppins shadow-2xl">
  Welcome to my articles homepage, the vibrant ❤️ of this platform, where each word brims with passion and dedication. Whether you're a new here or a loyal reader, I'm thrilled you're here. I'm committed to sharing wisdom 🧠, tips 💡, and experiences 🌟 to help you thrive in life, firmly believing that continuous learning and growth are essential.<br/>
 I hope you'll find inspiration 💫 and practical guidance here. Thank you for your support 🙏, and let's embrace the journey of lifelong learning 📚 and growth 🌱 together! 🤝
  </div>

  <p className="font-bold mt-[80px]  2xl:text-3xl xl:text-2xl md:text-xl text-base font-poppins">Enjoy!</p>
</div>


    </div>




    {/*Newsletter pop-up - mobile res*/}
<NewsletterPopup trigger={timedPopup} setTrigger={setTimedPopup}>


<div className="sm:mt-[-105px]  max-w-[350px]  sm:px-0 px-6 "> 
<div>
    <div className="bg-white rounded-2xl sm:px-6 px-4 sm:py-5 py-3 text-center font-spectral">
      <div className="w-full py-2">
<div className="mx-0">
    <h1 className="uppercase text-black underline underline-offset-4 font-bold sm:text-xl text-lg">Try out my newsletter</h1>
    <section className=" sm:my-2 my-1">
    <div className="text-black mx-4 text-base">Sign up for our weekly newsletter and get a dose of inspiration! </div>
    </section>

    <section>
      <input className="bg-white rounded-xl italic mt-2 mb-1 outline-1 outline outline-offset-1 outline-black focus:outline focus:shadow-lg sm:py-[10px] py-[6px]  text-black text-center w-full sm:text-base text-sm" placeholder="My email address is..."/>
    </section>

    <section>
      <input type="submit" value="Subscribe" className="active:bg-white active:text-black italic bg-slate-950 rounded-xl mt-2 hover:shadow-xl ease-in-out duration-300 sm:py-3 py-[10px] text-white text-center w-full sm:text-base text-sm" placeholder="My email address is..."/>
    </section>

      <div className="text-black mt-4  text-[11px] italic">"Zero spam. Only the finest ideas you'll discover online."</div>

    </div>
    </div>
    </div>
</div>
</div>
</NewsletterPopup>


    {/*Newsletter*/}
    <div className="xl:mt-[-75px] lg:mt-[-45px] md:mt-[-50px] max-w-[350px] md:max-w-[265px] xl:max-w-[325px] lg:max-w-[285px] 2xl:max-w-full lg:block md:px-0 hidden"> 
<div className="border-l-2">
    <div className="bg-white rounded-2xl px-6  xl:px-4 md:px-5 2xl:pt-5 2xl:pb-2 xl:py-3 md:py-1 ml-4 text-center font-spectral">
      <div className="lg:max-w-[320px] w-full py-2">
<div className="mx-0">
    <h1 className="uppercase text-black underline underline-offset-4 font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-[15px] mt-1">Try out my newsletter</h1>
    <section className="xl:my-1 sm:my-2 my-1">
    <div className="text-black xl:mx-8 md:mx-2 2xl:text-base xl:text-sm md:text-[12px] text-[12px]">Sign up for our weekly newsletter and get a dose of inspiration! </div>
    </section>

    <section>
      <input className="bg-white rounded-xl mt-2 mb-1 outline-2 outline outline-offset-1 outline-black focus:outline focus:shadow-lg 2xl:py-[10px] xl:py-[8px] md:py-[4px] sm:py-[2px] py-[2px] text-black text-center w-full 2xl:text-base sm:text-sm text-[13px]" placeholder="My email address is..."/>
    </section>

    <section>
      <input type="submit" value="Subscribe" className="active:bg-white active:text-black italic bg-slate-950 rounded-xl mt-2 hover:shadow-xl ease-in-out duration-300  2xl:py-3 xl:py-[8px] md:py-[6px] sm:py-[4px] py-[5px] text-white text-center w-full 2xl:text-base sm:text-sm text-[13px]" placeholder="My email address is..."/>
    </section>

      <div className="text-black xl:mt-4 sm:mt-3 mt-2 2xl:text-[13px] xl:text-[12px] md:text-[11px] text-[11px] italic">"Zero spam. Only the finest ideas you'll discover online."</div>

    </div>
    </div>
    </div>
</div>


</div>
    </div>


{/*tablet and mobile res of additional text*/}
    <div className="lg:hidden block max-w-[1380px] mx-auto sm:px-10 px-6 xl:mt-[-115px] lg:mt-[-95px] md:mt-[-15px] sm:mt-[-15px] mt-[-25px]">
  <div className="2xl:text-xl xl:text-[18px] md:text-[15px] sm:text-[15px] text-[14px] tracking-normal  break-words text-black bg-slate-100 rounded-2xl 2xl:py-5 xl:py-4 md:py-3 md:px-6 sm:py-3 sm:px-3 px-3 py-3 lg:mt-[100px] font-poppins shadow-2xl">
  Welcome to my articles homepage, the vibrant ❤️ of this platform, where each word brims with passion and dedication. Whether you're a new here or a loyal reader, I'm thrilled you're here. I'm committed to sharing wisdom 🧠, tips 💡, and experiences 🌟 to help you thrive in life, firmly believing that continuous learning and growth are essential.
I hope you'll find inspiration 💫 and practical guidance here. Thank you for your support 🙏, and let's embrace the journey of lifelong learning 📚 and growth 🌱 together! 🤝  </div>

  <p className="font-bold mt-[80px] sm:text-lg text-base font-poppins">Enjoy!</p>
</div>


{/*Arrow Down */}
    <div className="text-center 2xl:mt-[-155px] xl:mt-[-200px] lg:mt-[-175px] md:mt-[-175px] sm:mt-[-125px]">
    <div><Link to="mainArticles" smooth={true} offset={-50}><img src={arrowDown} className="text-center max-w-[1240px] mx-auto 2xl:mt-[240px] xl:mt-[190px] lg:mt-[225px] md:mt-[215px] sm:mt-[175px] mt-[15px] 2xl:w-[45px]  lg:w-[35px] md:w-[30px] sm:w-[32px] 
    w-[25px] duration-500 ease-in-out hover:scale-125 active:scale-125"/> </Link></div>
    </div>
    </div>
    







{/*Topics*/}
        <div>
    <h2 className="mx-auto text-center 2xl:text-6xl xl:text-7xl lg:text-6xl sm:text-5xl text-5xl font-thin 2xl:py-[65px] sm:py-[50px] py-[35px]	" id="mainArticles">Topics</h2>
    </div>




{/*Filter section*/}
<div className="2xl:max-w-[1380px] w-full mx-auto 2xl:px-4 sm:px-6 lg:px-10 px-2 grid grid-flow-col auto-cols-auto sm:mb-[125px] mb-20 2xl:mt-0 mt-4">


<div className=" flex flex-row  justify-center	flex-wrap auto-rows-fr gap-x-3 gap-y-4 sm:gap-x-4 lg:gap-x-8 xl:gap-x-10 sm:gap-y-6 lg:font-normal font-normal   font-spectralsc">




{
/*Search bar*/}

<div className="shadow-lg flex justify-between outline 2xl:outline-[2px] outline-[1px] rounded-full focus:outline-black sm:mx-0 lg:mx-6 sm:px-1 lg:px-2 mx-12 mt-4 sm:mt-0 lg:mt-2 lg:mb-1 mb-1 sm:mb-0 w-full sm:w-auto">
<div className="my-auto flex-grow">
<Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
          inputProps={inputProps}


        />
        </div>

<span className="px-2 my-auto"><img src={magnifier} className="text-black 2xl:w-[30px] xl:w-[28px] lg:w-[24px] sm:w-[20px] w-[20px] md:mx-0 mx-1"/> </span>
</div>


{/*Filter options*/}

     {filterOptions.map((filter) => (
        <span
          key={filter.id}
          className={`shadow-lg rounded-full sm:px-4 px-2 lg:py-3 sm:py-2 py-2 my-auto cursor-pointer outline 2xl:outline-[2px] outline-[1px] 2xl:outline-offset-0 outline-offset-0 ease-in-out duration-500  tracking-widest  2xl:text-xl xl:text-lg lg:text-base sm:text-[11px] text-[11px] lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:text-white hover:duration-500 ${
            selectedFilter === filter.id
              ? "bg-gray-950 text-white outline-black"
              : `${checkClickFilter=== true ? "hidden" : ""}`
          }`}
          onClick={() => handleFilterClick(filter.id)}
          onMouseOver={() => handleFilterHover(filter.id)}
          onMouseLeave={() => handleFilterHover(null)}
        >
       <div className="flex">
      <div className="my-auto">
        <img
          src={
            selectedFilter === filter.id || hoveredFilter === filter.id
            ? isLaptop ? filter.imageUrlClicked : selectedFilter === filter.id ? filter.imageUrlClicked : filter.imageUrl
            : filter.imageUrl
          }
          className="2xl:w-[40px] xl:w-[38px] lg:w-[32px] sm:w-[26px] w-[20px] mr-2"
        />
      </div>
      <div className="xl:mt-auto sm:my-auto my-auto mx-auto text-center">{filter.name}</div>
    </div>
        </span>
      ))}

    </div>
    </div>




 
{/*All articles*/}

<div className="xl:tracking-[4px] tracking-[1px] 2xl:px-20 sm:px-10 px-4 2xl:max-w-[1680px] max-w-[1380px] mx-auto grid md:grid-cols-3 sm:grid-cols-2  grid-cols-2 2xl:gap-x-[110px] lg:gap-x-[20px] md:gap-x-[15px] sm:gap-x-[25px]  sm:gap-y-12 gap-y-10 gap-x-8 mb-20 font-spectral 2xl:text-base lg:text-xs md:text-[11px] sm:text-xs text-[8px] font-thin">
  
{ListofArticles.map((article) =>
  <RouteLink to={`/articles/${article.id}`}>
  <div className="w-full" key={article.id}>
  <div className="z-[-1] relative bg-slate-200 aspect-[16/10]"><div className=" absolute bottom-0 lg:px-4 px-1 py-1 bg-gray-950 text-white uppercase tracking-widest ">{article.label} </div> </div>
  
  <div className="mt-2 2xl:text-[24px]  xl:text-2xl lg:text-lg md:text-base sm:text-lg text-[10px]">
{article.title}
  </div>
  </div>
  </RouteLink>
)
}  
 
</div>











    


    <Footer/>
    </> 
    )
    
}


export default Articles
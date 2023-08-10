import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from "react-scroll";
import Autosuggest from 'react-autosuggest';
import magnifier from "../assets/magnifier.png"
import arrowDown from "../assets/arrowDown.png"

{/*Icons - unchecked filter option*/}
import meditation from "../assets/filteroptions/meditationFilter.png"
import wmh from "../assets/filteroptions/WHMfilter.png"
import vegan from "../assets/filteroptions/veganfilter.png"
import exercise from "../assets/filteroptions/exercisefilter.png"
import nofap from "../assets/filteroptions/nofapfilter.png"
import mind from "../assets/filteroptions/mindfilter.png"
import inspiration from "../assets/filteroptions/insipirationfilter.png"



{/*Icons - checked filter option*/}

import wmhWhite from "../assets/filteroptions/WHMfilterW.png"
import veganWhite from "../assets/filteroptions/veganfilterW.png"
import exerciseWhite from "../assets/filteroptions/exercisefilterW.png"
import nofapWhite from "../assets/filteroptions/nofapfilterW.png"
import mindWhite from "../assets/filteroptions/mindfilterW.png"
import inspirationWhite from "../assets/filteroptions/insipirationfilterW.png"




function Articles(){
      const filterOptions = useMemo(()=>[
        {name: "MEDITATION", id:1, imageUrl: meditation},
        {name: "WHM - WIM HOF METHOD", id:2, imageUrl: wmh, imageUrlClicked:wmhWhite},
        {name: "GO VEGAN", id:3, imageUrl: vegan, imageUrlClicked:veganWhite},
        {name: "EXERCISE", id:4, imageUrl: exercise, imageUrlClicked: exerciseWhite},
        {name: "NOFAP", id: 5,imageUrl: nofap, imageUrlClicked: nofapWhite},
        {name: "MIND & SOUL", id: 6, imageUrl: mind, imageUrlClicked:mindWhite},
        {name: "INSPIRATION", id: 7, imageUrl: inspiration, imageUrlClicked:inspirationWhite},
      ],
      []
      
      );
    
    
      const [selectedFilter, setSelectedFilter] = useState(null);
    
      const handleFilterClick = (filter) => {
        setSelectedFilter(filter === selectedFilter ? null : filter);

      }



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
        placeholder: "Search...",
        className: "outline-none py-1  text-2xl  ease-in-out duration-500 sm:w-[190px] w-full block px-2 xl:text-[25px]"
      };






    return(
        <>
{/*Articles intro*/}
    <Navbar/>
    <div id="articles" className="text-white 2xl:pt-[145px]  2xl:pb-[115px] xl:pt-[145px] xl:pb-14 lg:pt-[280px] lg:pb-[115px]  md:pt-[250px] md:pb-[105px]  md:tracking-normal  pt-[260px] pb-[240px]  bg-[url('/src/assets/articlesintrobg.png')] bg-cover font-spectral ">
     <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-4 sm:px-10 px-6 grid grid-cols-2 grid-flow-col auto-cols-auto	 gap-20 2xl:mt-4 xl:mt-[-25px] lg:mt-[-185px] md:mt-[-135px]">   
     
     <div className="col-span-2">
    <h1 className="xl:text-8xl lg:text-7xl mb-6 text-6xl tracking-wide" >Articles</h1>

  <div className="2xl:text-[41px] xl:text-3xl lg:text-2xl md:text-xl mb-[100px] tracking-wide">
    <div>
      “It is impossible for a man to learn what he thinks he already knows.”{" "}
      <div className="text-right mt-4 font-bold">-Epictetus</div>
    </div>
  </div>

{/*desktop - additional text*/}
  <div className="hidden 2xl:block">
  <div className=" tracking-normal text-xl break-words text-black bg-slate-100 rounded-2xl py-5 px-6 mt-[100px] font-poppins shadow-2xl">
    Here you can read about my thoughts, work and what I am currently working on. My blog is intended for everyone who is open to new opportunities, willing to work on themselves and constantly improve. My site is for people who are constantly looking for something new, for those who are not afraid of new things and are willing to take risks and step out of their comfort zone. For brave, authentic and predictable people with a great appetite for change and a better version of themselves. For those who want to improve themselves and work on themselves with every step, either physically or mentally.
  </div>

  <p className="font-bold mt-[80px] text-3xl font-poppins">Enjoy!</p>
</div>


    </div>



    {/*Newsletter*/}
    <div className="xl:mt-[-75px] lg:mt-[-45px] md:mt-[-50px] md:max-w-[265px] xl:max-w-[325px] lg:max-w-[285px] 2xl:max-w-full"> 
<div className="border-l-2">
    <div className="bg-slate-100 rounded-2xl px-6  xl:px-4 md:px-5 2xl:py-5 xl:py-3 md:py-1 ml-4 text-center font-spectral">
      <div className="lg:max-w-[320px] w-full py-2">
<div className="mx-0">
    <h1 className="uppercase text-black underline underline-offset-4 font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-[15px] mt-1">Try out my newsletter</h1>
    <section className="xl:my-1 md:my-2">
    <div className="text-black xl:mx-8 md:mx-2 2xl:text-base xl:text-sm md:text-[12px] text-xs">Sign up for our weekly newsletter and get a dose of inspiration! </div>
    </section>

    <section>
      <input className="bg-white rounded-xl italic mt-2 mb-1 outline-2 outline outline-offset-1 outline-black focus:outline focus:shadow-lg 2xl:py-[10px] xl:py-[8px] md:py-[4px] text-black text-center w-full 2xl:text-base md:text-sm" placeholder="My email address is..."/>
    </section>

    <section>
      <input type="submit" value="Subscribe" className="active:bg-white active:text-black italic bg-slate-950 rounded-xl mt-2 hover:shadow-xl ease-in-out duration-300  2xl:py-3 xl:py-[8px] md:py-[6px] text-white text-center w-full 2xl:text-base md:text-sm" placeholder="My email address is..."/>
    </section>

      <div className="text-black xl:mt-4 md:mt-3 2xl:text-[13px] xl:text-[12px] md:text-[11px] italic">"Zero spam. Only the finest ideas you'll discover online."</div>

    </div>
    </div>
    </div>
</div>


</div>
    </div>


{/*laptop, tablet and mobile res of additional text*/}
    <div className="2xl:hidden block max-w-[1380px] mx-auto sm:px-10 px-6 xl:mt-[-115px] lg:mt-[-95px] md:mt-[-15px]">
  <div className="2xl:text-xl xl:text-[18px] md:text-[15px] tracking-normal text-lg break-words text-black bg-slate-100 rounded-2xl 2xl:py-5 xl:py-4 md:py-3 px-6 lg:mt-[100px] font-poppins shadow-2xl">
    Here you can read about my thoughts, work and what I am currently working on. My blog is intended for everyone who is open to new opportunities, willing to work on themselves and constantly improve. My site is for people who are constantly looking for something new, for those who are not afraid of new things and are willing to take risks and step out of their comfort zone. For brave, authentic and predictable people with a great appetite for change and a better version of themselves. For those who want to improve themselves and work on themselves with every step, either physically or mentally.
  </div>

  <p className="font-bold mt-[80px] 2xl:text-3xl xl:text-2xl md:text-xl font-poppins">Enjoy!</p>
</div>



    <div className="text-center xl:mt-[-160px] lg:mt-[-175px] md:mt-[-175px]">
    <div><Link to="mainArticles" smooth={true} offset={15}><img src={arrowDown} className="text-center max-w-[1240px] mx-auto 2xl:mt-[240px] xl:mt-[190px] lg:mt-[225px] md:mt-[215px] sm:mt-[160px] mt-[100px] 2xl:w-[45px]  lg:w-[35px] md:w-[30px] 
    w-[25px] duration-500 ease-in-out hover:scale-125 active:scale-125"/> </Link></div>
    </div>
    </div>
    



        <div>
    <h2 className="mx-auto text-center xl:text-7xl text-6xl font-thin 2xl:py-[65px] sm:py-[50px] py-[35px]	" id="mainArticles">Topics</h2>

    </div>









{/*Filter section*/}
<div className="2xl:max-w-[1380px] w-full mx-auto 2xl:px-4 sm:px-10 px-6 grid grid-flow-col auto-cols-auto mb-[125px] 2xl:mt-0 mt-4">


<div className=" flex sm:flex-row flex-col justify-center	flex-wrap auto-rows-fr gap-x-10 gap-y-8 lg:font-normal font-normal sm:font-bold 2xl:text-2xl lg:text-xl sm:text-lg text-xl font-spectralsc  font-serif">
{
/*Search bar*/}

<div className=" flex justify-between outline outline-[2px] rounded-full focus:outline-black focus:shadow-lg px-2 mt-4 sm:mt-0 mb-10 sm:mb-0">
<div className="my-auto">
<Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
          inputProps={inputProps}


        />
        </div>

<span className=" inline-flex items-center px-2 my-auto"><img src={magnifier} className="text-black w-[30px]"/> </span>
</div>


{/*Filter options*/}

      {filterOptions.map((filter) => (
        <span
          key={filter.id}
          className={`grid grid-flow-col grid-cols-auto rounded-full px-4 py-3 my-auto cursor-pointer outline outline-[2px] 2xl:outline-offset-2 outline-offset-1 ease-in-out duration-200  tracking-widest ${
            selectedFilter === filter.id
              ? "bg-gray-950 text-white outline-black"
              : "bg-slate-100	 text-gray-800"
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
       {selectedFilter ===filter.id ?
        <div className="flex">
             <div className="">
              <img src={filter.imageUrlClicked} className="2xl:w-[45px] md:w-[38px] sm:w-[34px] w-[35px] mr-2"/>
              </div>

         <div className="xl:mt-auto sm:my-auto my-auto mx-auto text-center"> {filter.name}</div>
          </div>
          :
          <div className="flex">
             <div className="">
              <img src={filter.imageUrl} className="2xl:w-[45px] md:w-[38px] sm:w-[34px] w-[35px] mr-2"/>
              </div>

         <div className="xl:mt-auto sm:my-auto my-auto mx-auto text-center"> {filter.name}</div>
          </div>

        }
        </span>
      ))}
    </div>
    </div>









 
{/*All articles*/}

<div className="tracking-[4px] 2xl:px-4 sm:px-10 px-6 2xl:max-w-[1680px] max-w-[1380px] mx-auto grid xl:grid-cols-3 sm:grid-cols-2  grid-cols-1 2xl:gap-x-[110px] lg:gap-x-[75px] md:gap-x-[75px] sm:gap-x-[25px]  sm:gap-y-12 gap-y-[135px] mb-20 font-spectral 2xl:text-lg lg:text-base sm:text-xs text-base font-thin">
  


<div className="w-full">
  <div className="z-[-1] relative bg-slate-200 2xl:h-[300px] lg:h-[275px] sm:h-[225px] h-[275px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2 2xl:text-[28px] lg:text-2xl sm:text-xl text-2xl"> How to start meditation (Beginners Guide)</div>
  </div>



  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 2xl:h-[300px] lg:h-[275px] sm:h-[225px] h-[275px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2 2xl:text-[28px] lg:text-2xl sm:text-xl text-2xl"> How to start meditation (Beginners Guide)</div>
  </div>


  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 2xl:h-[300px] lg:h-[275px] sm:h-[225px] h-[275px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2 2xl:text-[28px] lg:text-2xl sm:text-xl text-2xl"> How to start meditation (Beginners Guide)</div>
  </div>



  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 2xl:h-[300px] lg:h-[275px] sm:h-[225px] h-[275px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2 2xl:text-[28px] lg:text-2xl sm:text-xl text-2xl"> How to start meditation (Beginners Guide)</div>
  </div>


 
  </div>











    


    <Footer/>
    </> 
    )
    
}


export default Articles
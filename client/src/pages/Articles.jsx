import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useMemo, useState } from "react";
import { AiOutlineArrowDown } from 'react-icons/ai';
import { Link } from "react-scroll";
import Autosuggest from 'react-autosuggest';



function Articles(){
      const filterOptions = useMemo(()=>[
        {name: "MEDITATION", id:1},
        {name: "WHM - WIM HOF METHOD", id:2},
        {name: "GO VEGAN", id:3},
        {name: "EXERCISE", id:4},
        {name: "NOFAP", id: 5},
        {name: "MIND & SOUL", id: 6},
        {name: "INSPIRATION", id: 7},
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
        className: "outline  outline outline-[3px] px-4 my-auto py-3 text-2xl rounded-full focus:outline-black focus:shadow-lg ease-in-out duration-500"
      };







    return(
        <>
{/*Articles intro*/}
    <Navbar/>
    <div className="text-white 2xl:pt-[200px]  2xl:pb-14   md:pt-[250px] md:pb-[210px] xl:pt-[250px] xl:pb-[280px] lg:pt-[280px] lg:pb-[230px] md:tracking-normal  pt-[260px] pb-[240px]  bg-[url('/src/assets/articlesintrobg.png')] bg-cover font-spectral ">
     <div className="2xl:max-w-[1680px] max-w-[1380px] mx-auto 2xl:px-4 sm:px-10 px-6 grid grid-cols-2 grid-flow-col auto-cols-auto	 gap-20 mt-4">   
     
     <div className="col-span-2">
    <h1 className="xl:text-8xl md:text-5xl mb-6 text-5xl" >Articles</h1>
      <div className="text-4xl mb-[100px]  w-full ">
        <div>“It is impossible for a man to learn what he thinks he already knows.”      <div className="text-right mt-4">-Epictetus</div></div>
      </div>

    <div className="outline-[3px] outline xl:text-xl md:text-lg tracking-normal text-lg break-words text-black bg-slate-100	 rounded-2xl py-5 px-6 mt-[150px] font-poppins shadow-2xl ">Here you can read about my thoughts, work and what I am currently working on. My blog is ntended for everyone who is open to new opportunities, willing to work on themselves and constantly improve. My site is for people who are constantly looking for something new, for those who are not afraid of new things and are willing to take risks and step out of their comfort zone. For brave, authentic and predictable people with a great appetite for change and a better version of themselves. For those who want to improve themselves and work on themselves with every step, either physically or mentally.</div>
    <p className="font-bold mt-[80px] text-3xl">Enjoy!</p>
    </div>

    {/*Newsletter*/}
    <div> 
<div className="border-l-2">
    <div className="bg-slate-100	 rounded-2xl px-8 py-4 ml-4 text-center font-spectral">
      <div className="lg:max-w-[275px] max-w-[120px]">
    <h1 className="uppercase text-black underline underline-offset-4 font-bold lg:text-xl text-lg mt-3">Try out my newsletter</h1>
    <section className="mt-1">
    <div className="text-black lg:mx-8 lg:text-sm text-xs">Sign up for our weekly newsletter and get a dose of inspiration! </div>
    </section>

    <section>
      <input className="bg-white rounded-xl mt-2 outline-2 outline outline-offset-1 outline-black focus:outline focus:shadow-lg px-2 py-2 text-black text-center w-full" placeholder="My email address is..."/>
    </section>

    <section>
      <input type="submit" value="Subscribe" className="active:bg-sky-700 italic bg-slate-950 rounded-xl mt-2 outline-2 outline outline-offset-1 outline-black hover:shadow-xl ease-in-out duration-300 px-2 py-2 text-white text-center w-full" placeholder="My email address is..."/>
    </section>

      <div className="text-black mt-4 text-xs">"Zero spam. Only the finest ideas you'll discover online."</div>
    </div>
    </div>
</div>


</div>
    </div>





    <div className="text-center mt-[-125px]">
    <div><Link to="mainArticles" smooth={true} offset={-50}><AiOutlineArrowDown className="text-center max-w-[1240px] mx-auto md:mt-[190px] sm:mt-[160px] mt-[100px] xl:text-5xl sm:text-4xl text-3xl duration-500 ease-in-out hover:scale-125"/> </Link></div>
    </div>
    </div>
    



        <div>
    <h2 className="mx-auto text-center md:text-7xl text-6xl font-thin py-[50px]	" id="mainArticles">Topics</h2>

    </div>





{/*Filter section*/}
<div className="2xl:max-w-[1380px] max-w-[1080px] w-full mx-auto 2xl:px-4 sm:px-10 px-6 grid grid-flow-col auto-cols-auto mb-[125px]">


<div className=" flex flex-row justify-center	flex-wrap auto-rows-fr gap-x-10 gap-y-8 text-2xl font-spectralsc font-extralight font-serif">
<Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={({ value }) => getSuggestions(value)}
          onSuggestionsClearRequested={() => setSuggestions([])}
          getSuggestionValue={(suggestion) => suggestion.name}
          renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
          inputProps={inputProps}


        />

      {filterOptions.map((filter) => (
        <span
          key={filter.id}
          className={`rounded-full px-4 py-3 my-auto cursor-pointer outline outline-[3px] outline-offset-2 ease-in-out duration-200  ${
            selectedFilter === filter.id
              ? "bg-gray-950 text-white outline-black"
              : "bg-slate-100	 text-gray-800"
          }`}
          onClick={() => handleFilterClick(filter.id)}
        >
          {filter.name}
        </span>
      ))}
    </div>
    </div>





 
{/*All articles*/}

<div className="tracking-wide 2xl:px-4 sm:px-10 px-6 2xl:max-w-[1680px] max-w-[1380px] mx-auto grid grid-cols-3 gap-x-[175px] gap-y-12 mb-20 font-spectral text-[23px] font-thin">
  
<div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>


  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>


  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>


  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>

  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>


  <div className="w-full">
  <div className="z-[-1] relative bg-slate-200 h-[250px]"><div className=" absolute bottom-0 px-4 py-1 bg-gray-950 text-white text-base uppercase tracking-widest ">Mind </div> </div>
  
 <div className="mt-2"> How to start meditation (Beginners Guide)  </div>
  </div>



</div>







    


    <Footer/>
    </> 
    )
    
}


export default Articles

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive'
import { Link as RouteLink,  useNavigate, useSearchParams} from "react-router-dom"
import { Helmet } from 'react-helmet';
import axios from 'axios'
import Autosuggest from 'react-autosuggest';
import magnifier from "../assets/magnifier.png"
import arrowDown from "../assets/arrowDown.png"
import NewsletterPopup from "../components/NewsletterPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from 'emailjs-com'
import ReactPaginate from 'react-paginate';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";





{/*Icons - unchecked filter option*/ }
import meditation from "../assets/filteroptions/meditationFilter.png"
import wmh from "../assets/filteroptions/WHMfilter.png"
import vegan from "../assets/filteroptions/veganfilter.png"
import exercise from "../assets/filteroptions/exercisefilter.png"
import nofap from "../assets/filteroptions/nofapfilter.png"
import mind from "../assets/filteroptions/mindfilter.png"
import inspiration from "../assets/filteroptions/insipirationfilter.png"



{/*Icons - checked filter option*/ }
import meditationWhite from "../assets/filteroptions/meditationFilterW.png"
import wmhWhite from "../assets/filteroptions/WHMfilterW.png"
import veganWhite from "../assets/filteroptions/veganfilterW.png"
import exerciseWhite from "../assets/filteroptions/exercisefilterW.png"
import nofapWhite from "../assets/filteroptions/nofapfilterW.png"
import mindWhite from "../assets/filteroptions/mindfilterW.png"
import inspirationWhite from "../assets/filteroptions/insipirationfilterW.png"
{ }



function Articles({ articles }) {




  {/*Filter*/ }
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [checkClickFilter, setCheckClickFilter] = useState(false)
  const [selectedFilterId, setSelectedFilterId] = useState(null)

  const handleFilterClick = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
    navigate(`?page=1`);


    if (checkClickFilter === false){
      setSelectedFilterId(filter)
    }else{
      setSelectedFilterId(null)
    }

    setCheckClickFilter(!checkClickFilter)
  };


  {/*Filter hover effect*/ }
  const [hoveredFilter, setHoveredFilter] = useState(null);

  const handleFilterHover = (filterId) => {
    setHoveredFilter(filterId);
  };




  {/*Search*/ }
  const [searchQuery, setSearchQuery] = useState("");

  


  //Media queries
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px )' })
  const isTablet = useMediaQuery({query: '(min-width: 768px )'})





  {/*Pop-up*/ }
  const [timedPopup, setTimedPopup] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true)
    }, 1000);

  }, [])



  const [articleSections, setArticleSections] = useState([])

  const fetchArticleSections = async () => {
    try {
      const response = await axios.get("http://localhost:4000/admin/articleSections/getAllArticleSections")
      const articleSections = response.data
      setArticleSections(articleSections)

    } catch (error) {
      console.error("Error fetching article sections:", error.message)
    }
  }

  useEffect(() => {
    fetchArticleSections()
  }, [])



  const articlesPerPage = isTablet ? 3 : 4; 
  const [searchParams, setSearchParams] = useSearchParams(); ;
  const [currentPage, setCurrentPage] = useState(0);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const navigate = useNavigate(); 


  useEffect(() => {
    setFilteredArticles(articles);

    const pageQueryParam = parseInt(searchParams.get('page')) || 1;
    pageQueryParam === 1 ?  navigate(`?page=1`) : null
    setCurrentPage(pageQueryParam-1);
 

    const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);
    const offset = currentPage * articlesPerPage;
    const currentArticles = filteredArticles.slice(offset, offset + articlesPerPage);
  }, [articles]);


  useEffect(() => {
    setFilteredArticles(articles.filter((article) => {
      const titleMatches = article.title.toLowerCase().includes(searchQuery.toLowerCase());
      const sectionMatches = selectedFilterId === null || (article.section && article.section._id === selectedFilterId);

      return titleMatches && sectionMatches;
    }));
    setCurrentPage(0);
 
  }, [searchQuery, selectedFilterId]);


  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    navigate(`?page=${selected + 1}`);

  };


  const pageCount = Math.ceil(filteredArticles.length / articlesPerPage);
  const offset = currentPage * articlesPerPage;
  const currentArticles = filteredArticles.slice(offset, offset + articlesPerPage);







  const[email,setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState(true)

  function handleChange(e){
    e.preventDefault()
    setEmail(e.target.value)
  }

  function sendEmail(e){
    e.preventDefault()
    const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/


    if(rgExp.test(email)){
      setError(false)
      setMessage("Message was sent successfully")
      emailjs.sendForm(
        'test123',
         'template_nbi58c7',
          e.target,
          '6Rv8j2Hq5xEQ8kKOX'
          ).then(res=>{
            console.log(res)
          }).catch(err=> console.error(err))
        
    } else if(email === ""){
      setError(true)
      setMessage("Please Enter email")
  
    } else if(!rgExp.test(email)){
      setError(true)
      setMessage("Email is not valid")
    
    }else {
      setMessage("")
  
    }
  }
  


  return (
    <>

      <Helmet>
        <title>Articles Page</title>
        <link rel="icon" type="image/svg+xml" href="/articles.png" />
      </Helmet>

      <Navbar />
      {/*Articles intro*/}
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
                Welcome to my articles homepage, the vibrant ❤️ of this platform, where each word brims with passion and dedication. Whether you're a new here or a loyal reader, I'm thrilled you're here. I'm committed to sharing wisdom 🧠, tips 💡, and experiences 🌟 to help you thrive in life, firmly believing that continuous learning and growth are essential.<br />
                I hope you'll find inspiration 💫 and practical guidance here. Thank you for your support 🙏, and let's embrace the journey of lifelong learning 📚 and growth 🌱 together! 🤝
              </div>

              <p className="font-bold mt-[80px]  2xl:text-3xl xl:text-2xl md:text-xl text-base font-poppins">Enjoy!</p>
            </div>


          </div>




          {/*Newsletter pop-up - mobile res*/}
          <NewsletterPopup trigger={timedPopup} setTrigger={setTimedPopup}>


            <div className="sm:mt-[-105px]  max-w-[350px]  sm:px-0 px-6 ">
              <form  onSubmit={sendEmail}>
                <div className="bg-white rounded-2xl sm:px-6 px-4 sm:py-5 py-3 text-center font-spectral">
                  <div className="w-full py-2">
                    <div className="mx-0">
                      <h1 className="uppercase text-black underline underline-offset-4 font-bold sm:text-xl text-lg">Try out my newsletter</h1>
                      <section className=" sm:my-2 my-1">
                        <div className="text-black mx-4 text-base">Sign up for our weekly newsletter and get a dose of inspiration! </div>
                      </section>

                      <section>
                        <input type="email"  name="user_Email" value={email} onChange={(e)=> setEmail(e.target.value)} className="bg-white rounded-xl italic mt-2 mb-1 outline-1 outline outline-offset-1 outline-black focus:outline focus:shadow-lg sm:py-[10px] py-[6px]  text-black text-center w-full sm:text-base text-sm" placeholder="My email address is..." />
                      </section>

                      <section>
                        <input type="submit" value="Subscribe" className="active:bg-white active:text-black italic bg-slate-950 rounded-xl mt-2 hover:shadow-xl ease-in-out duration-300 sm:py-3 py-[10px] text-white text-center w-full sm:text-base text-sm" placeholder="My email address is..." />
                      </section>
                      <div className={`${error ? 'text-red-400' : 'text-green-400'}`}>{message}</div>
                      <div className="text-black mt-4  text-[11px] italic">"Zero spam. Only the finest ideas you'll discover online."</div>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </NewsletterPopup>


          {/*Newsletter*/}
          <div className="xl:mt-[-75px] lg:mt-[-45px] md:mt-[-50px] max-w-[350px] md:max-w-[265px] xl:max-w-[325px] lg:max-w-[285px] 2xl:max-w-full lg:block md:px-0 hidden">
            <form onSubmit={sendEmail} className="border-l-2">
              <div className="bg-white rounded-2xl px-6  xl:px-4 md:px-5 2xl:pt-5 2xl:pb-2 xl:py-3 md:py-1 ml-4 text-center font-spectral">
                <div className="lg:max-w-[320px] w-full py-2">
                  <div className="mx-0">
                    <h1 className="uppercase text-black underline underline-offset-4 font-bold 2xl:text-xl xl:text-lg lg:text-base md:text-[15px] mt-1">Try out my newsletter</h1>
                    <section className="xl:my-1 sm:my-2 my-1">
                      <div className="text-black xl:mx-8 md:mx-2 2xl:text-base xl:text-sm md:text-[12px] text-[12px]">Sign up for our weekly newsletter and get a dose of inspiration! </div>
                    </section>

                    <section>
                      <input  type="email"  name="user_Email" onChange={(e) => setEmail(e.target.value)} className="bg-white rounded-xl mt-2 mb-1 outline-2 outline outline-offset-1 outline-black focus:outline focus:shadow-lg 2xl:py-[10px] xl:py-[8px] md:py-[4px] sm:py-[2px] py-[2px] text-black text-center w-full 2xl:text-base sm:text-sm text-[13px]" placeholder="My email address is..." />
                    </section>

                 
                      <input type="submit" value="Subscribe" className="active:bg-white active:text-black italic bg-slate-950 rounded-xl mt-2 hover:shadow-xl ease-in-out duration-300  2xl:py-3 xl:py-[8px] md:py-[6px] sm:py-[4px] py-[5px] text-white text-center w-full 2xl:text-base sm:text-sm text-[13px]" placeholder="My email address is..." />
                
                    <div className={`${error ? 'text-red-400' : 'text-green-400'}`}>{message}</div>
                    <div className="text-black xl:mt-4 sm:mt-3 mt-2 2xl:text-[13px] xl:text-[12px] md:text-[11px] text-[11px] italic">"Zero spam. Only the finest ideas you'll discover online."</div>

                  </div>
                </div>
              </div>
            </form>


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
              <input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Search..." className="placeholder:not-italic outline-none sm:pt-2 lg:pt-3 pt-1 sm:pb-1 lg:pb-2 xl:pb-2 pb-1  2xl:text-[23px] xl:text-[26px] lg:text-xl sm:text-[17px] text-[16px] w-full ease-in-out duration-500 flex font-normal block px-3 pr-4 xl:text-[25px] tracking-wide"/>
            </div>

            <span className="px-2 my-auto"><img src={magnifier} className="text-black 2xl:w-[30px] xl:w-[28px] lg:w-[24px] sm:w-[20px] w-[20px] md:mx-0 mx-1" /> </span>
          </div>


          {/*Filter options*/}

          {articleSections && articleSections.map((filter) => (
            <span
              key={filter._id}
              className={`shadow-lg rounded-full sm:px-4 px-2 lg:py-3 sm:py-2 py-2 my-auto cursor-pointer outline 2xl:outline-[2px] outline-[1px] 2xl:outline-offset-0 outline-offset-0 ease-in-out duration-500  tracking-widest  2xl:text-xl xl:text-lg lg:text-base sm:text-sm text-[11px] text-[11px] lg:hover:scale-110 lg:hover:bg-gray-950 lg:hover:text-white hover:duration-500 ${selectedFilter === filter._id
                  ? "bg-gray-950 text-white outline-black"
                  : `${checkClickFilter === true ? "hidden" : ""}`
                }`}
              onClick={() => handleFilterClick(filter._id)}
              onMouseOver={() => handleFilterHover(filter._id)}
              onMouseLeave={() => handleFilterHover(null)}
            >
              <div className="flex">
                <div className="my-auto">
                  <img
                    src={
                      selectedFilter === filter._id || hoveredFilter === filter._id
                        ? isLaptop ? `http://localhost:4000/public/${filter.imageClicked}` : selectedFilter === filter._id ? `http://localhost:4000/public/${filter.imageClicked}` : `http://localhost:4000/public/${filter.image}`
                        : `http://localhost:4000/public/${filter.image}`
                    }
                    className="2xl:w-[40px] xl:w-[38px] lg:w-[32px] sm:w-[26px] w-[20px] mr-2"
                  />
                </div>
                <div className="xl:mt-auto sm:my-auto my-auto mx-auto text-center">{filter.title}</div>
              </div>
            </span>
          ))}

        </div>
      </div>





      {/*All articles*/}

      <div className="xl:tracking-[4px] tracking-[1px] 2xl:px-20 sm:px-10 px-4 2xl:max-w-[1680px] max-w-[1380px] mx-auto grid md:grid-cols-3 sm:grid-cols-2  grid-cols-2 2xl:gap-x-[110px] lg:gap-x-[20px] md:gap-x-[15px] sm:gap-x-[25px]  sm:gap-y-12 gap-y-10 gap-x-8 mb-20 font-spectral 2xl:text-base lg:text-xs md:text-[11px] sm:text-xs text-[8px] font-thin">

      {currentArticles.map((article) => (
          <RouteLink key={article._id} to={`/articles/${article._id}`}>
          <div className="w-full">
            <div className="z-[-1] relative bg-slate-200 aspect-[16/10]"><div className=" absolute bottom-0 lg:px-4 px-1 py-1 bg-gray-950 text-white uppercase tracking-widest ">{article.label} </div> </div>

            <div className="mt-2 2xl:text-[24px]  xl:text-2xl lg:text-lg md:text-base sm:text-lg text-[10px]">
              {article.title}
            </div>
          </div>
        </RouteLink>
      ))}





      </div>

      <ReactPaginate
  pageCount={pageCount}
  pageRangeDisplayed={5}
  marginPagesDisplayed={2}
  previousLabel={
    <span className="flex items-center justify-center mx-1 bg-blue-200 lg:hover:bg-blue-300 rounded-lg md:w-9 w-7 md:h-9 h-7 duration-300 ease-in-out">
          <MdKeyboardArrowLeft/>

    </span>
 
  }
  nextLabel={
    <span className="flex items-center justify-center mx-1 bg-blue-200 lg:hover:bg-blue-300 rounded-lg md:w-9 w-7 md:h-9 h-7 duration-300 ease-in-out">
    <MdKeyboardArrowRight/>
    </span>
  }
  breakLabel={'...'}
  onPageChange={handlePageChange}
  containerClassName={'flex justify-center list-none  space-x-2 mb-[150px] p-4'}
  pageClassName={'border border-solid border-blue-200 lg:hover:bg-blue-300 lg:hover:border-blue-300 md:w-8 w-6 md:h-9 h-7 md:text-base text-sm flex items-center justify-center rounded-lg duration-300 ease-in-out'}
  activeClassName={'bg-blue-200 '}
  pageLinkClassName={'p-2  text-black '}
  breakClassName={'px-2 py-2 border text-gray-500 '}
  forcePage={currentPage}
/>
      <Footer />

    </>
  )

}


export default Articles
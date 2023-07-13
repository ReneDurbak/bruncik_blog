import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Select from "react-dropdown-select"
import Rating from '@mui/material/Rating';


function Articles(){
    const [value, setRatingValue] = useState(0)
    const [articleSection, setArticleSection] = useState([])
    const articles = [
        {name: "Meditation", id:1},
        {name: "Workout", id:2},
        {name: "Mindset", id:3},
        {name: "Motivation", id:4},
        {name: "Nature", id: 5},
    ]

    useEffect(()=>{
        setArticleSection(articleSection)
        setRatingValue(value)
    },[])

    const handleDropdownChange = (selectedArticle) =>{
        setArticleSection(selectedArticle)
    }



    //console.log(articleSection)
    //console.log(value)


    return(
        <>

    <Navbar/>
    <div className="text-white 2xl:pt-[315px] 2xl:pb-[325px]  px-4 md:pt-[250px] md:pb-[210px] xl:pt-[250px] xl:pb-[280px] lg:pt-[280px] lg:pb-[230px] md:tracking-normal  pt-[260px] pb-[240px]  bg-cyan-700">
     <div className="max-w-[1240px] mx-auto px-4">   
    <h1 className="xl:text-7xl md:text-5xl font-bold mb-[90px] text-5xl" >Welcome to articles page</h1>
    <div className="xl:text-xl md:text-lg tracking-normal text-lg break-words">Here you can read about my thoughts, work and what I am currently working on. My blog is ntended for everyone who is open to new opportunities, willing to work on themselves and constantly improve. My site is for people who are constantly looking for something new, for those who are not afraid of new things and are willing to take risks and step out of their comfort zone. For brave, authentic and predictable people with a great appetite for change and a better version of themselves. For those who want to improve themselves and work on themselves with every step, either physically or mentally.</div>
    <p className="font-bold mt-[80px] text-2xl">Enjoy!</p>
    </div>
    </div>



        <div>
    <h2 className="mx-auto text-center md:text-8xl text-7xl font-thin py-[50px]">Articles</h2>

    </div>


      {/*Filter section*/}
    <div className="mb-[215px]">
        <div className="bg-amber-500  sm:p-12 py-6">
            <div>
            <div className="mx-auto max-w-[1240px] lg:w-[800px] sm:w-[400px]  w-[275px] md:text-xl text-lg bg-white ">
            <Select 
                placeholder="filter articles by section..."
                options={articles}
                valueField="id"
                labelField="name"
                onChange={handleDropdownChange }
                color="rgb(149 149 149)"
                dropdownGap={-3}
                multi
            >
                <div>{articleSection}</div>
            </Select>

            </div>
        </div>
        </div>
    </div>






   {/* All Articles */}
<div className="mx-auto max-w-[1240px] mb-[350px]  xl:px-0 px-4">

{/* Single Article */}
<div className="mb-[215px] xl:h-[300px] sm:h-[250px] h-[200px] relative text-left px-4">
  <div className="sm:visible invisible border-solid border-6 sm:p-7 xl:w-[300px] xl:h-[290px] sm:w-[250px] sm:h-[242px] float-left mr-8 bg-black"></div>

  <div className="sm:text-justify xl:mr-0 mr-4">

    <h1 className="font-bold xl:text-4xl text-3xl">Article Name</h1>
    <div className="xl:mb-[60px] mb-[30px] xl:text-base text-sm">Section Name</div>

    <div className="xl:text-lg md:text-sm text-xs  break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales est augue, ut varius turpis ultricies eget. Curabitur scelerisque quam.</div>

    <div className="xl:text-base text-sm">
      <div className="flex justify-between">
        <div className="sm:visible invisible absolute bottom-0">
      <Rating
    size="medium"
  name="simple-controlled"
  value={value}
  precision={0.5}
  onChange={(event,selectedRating) => {
    setRatingValue(selectedRating)}}
/>
</div>

<div className="sm:invisible visible  absolute bottom-0">
      <Rating
    size="small"
  name="simple-controlled"
  value={value}
  precision={0.5}
  onChange={(event,selectedRating) => {
    setRatingValue(selectedRating)}}
/>
</div>


      <div>
        <div className="sm:ml-[130px] ml-[100px] sm:text-base absolute bottom-0 mb-1 text-xs">Reading time: xx min.</div>
        </div>

      </div>
    </div>
  </div>
</div>
</div>





    


    <Footer/>
    </> 
    )
    
}


export default Articles
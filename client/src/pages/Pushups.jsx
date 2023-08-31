import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import ringbell from "../assets/Ringbelt.png"
import profilepicture from "../assets/profilepicture.png"
import hearticon from "../assets/hearticon.png"
import {MdKeyboardDoubleArrowDown} from "react-icons/md"

function Pushups(){

  const Filteroptions = [
    {
      name: "Newest",
      id: 1
    },
    {
      name: "Oldest",
      id: 2
    },
    {
      name: "Recent",
      id: 3
    },
    {
      name: "Popular",
      id: 4
    },
  ]
    return(
        <>
        <Navbar/>
        <div className="bg-[url('/src//assets/pushupsintrobg.png')] bg-cover py-[540px]"/>




    <div className=" 2xl:max-w-[1680px] py-[100px] max-w-[1380px] mx-auto 2xl:px-4 sm:px-10 px-6 font-poppins">
       
       
        <div className="bg-gray-300 px-12 pt-14 pb-10 rounded-[50px]">
            <div className="flex justify-between ">
                <div className="my-auto">
                <h1 className="text-[42px] font-regular tracking-normal">Explore</h1>
                </div>
                <div className="flex space-x-12">
                    
                    <div className="my-auto">
                    <img src={ringbell} className="w-[48px]"/>
                    </div>
                    
                    <div>
                    <img src={profilepicture} className="w-[64px]"/>
                    </div>

                </div>
            </div>


            
        <div className="pt-10 pb-2 flex justify-between">
        <div className="underline underline-offset-[3px] font-spectral text-[18px] font-bold tracking-normal my-auto">Learn more about 100 club challenge </div>


        <div className="flex space-x-6"><div className="text-md my-auto text-[#545454]">Filter</div> 
        <div>
        <div className="bg-white rounded-2xl max-w-full px-4 h-[40px] flex items-center justify-center">
          <div className="mr-2">Newest</div> <MdKeyboardDoubleArrowDown size={18}/></div>
          
          <div className="rounded-b-2xl bg-white mt-[-5px]">
          {Filteroptions.map((filteroption) => 
          <div 
            key={filteroption.id} 
            className="flex items-center justify-center px-4 py-2 ">
              {filteroption.name}
              </div>
              )}
          </div>
          
          </div>
        </div>

        </div>


        <div className=" pt-4  font-poppins">
          <div className="flex justify-center max-h-[700px]">
<div className="grid grid-cols-5  gap-y-10 gap-x-10 px-4  justify-center overflow-y-scroll pushupsScroll">

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  
  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  
  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
  </div>

  <div className="relative w-[250px] bg-blue-300  h-[450px] rounded-[30px]">
    <div className="absolute bottom-0 w-full flex justify-between px-3 pb-4">
      <div className="text-white left-0 text-2xl font-bold pl-3">DAY 1</div>
      <div className="text-white right-0 flex"><img src={hearticon}/><div className="my-auto pl-2 text-lg">56</div></div>
    </div>
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


export default Pushups
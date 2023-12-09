import { useState } from "react"

export default function AdminLogin({articles}) {


  console.log(articles)

  const [name, setName] = useState('')
  const [pass, setPass] = useState('')
  const [verify, setVerification] = useState(false)

  const verification = () => {

    console.log(name)
    console.log(pass)
    if(name === "Peto" && pass === "123") setVerification(true)
}






  return (
    <>

    {
      verify 
      ?
      <div className="flex space-x-6">
        <div className="flex flex-col justify-between h-screen bg-[#2A6CA5] px-6 text-white w-[16rem]">
          <ul className="flex flex-col items-start mt-8 space-y-4">
            <li className="text-xl font-bold">Pages</li>
            <li>idk</li>
            <li>idkdddddddd</li>
          </ul>


          <div>
            <div className="flex justify-between">
              <div>fotka</div>
              <div>Peter Bruncik</div>
              <div className="flex-end">od</div>
            </div>
          </div>
        </div>


        <div className="w-full text-left  mt-10">
          <h1 className="text-3xl font-bold">Pages</h1>

          <div className="space-x-4 mt-10 flex flex-row items-end">
            <textarea type="text" className="outline outline-1 shadow-xl rounded-xl  min-h-[20rem] max-h-[30rem] w-[60rem] p-2"/>
            <div className="items-end">
              <button className="rounded-lg bg-yellow-400  px-2 py-1 mb-[-1rem]">Send</button>
            </div>
          </div>

          <div>
            {
              articles && articles.map((article)=> (
                <div key={article._id}>{article.title}</div>
              ))
            }
          </div>
        </div>
        
      </div>


      :

      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
        <div className="flex flex-col  px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
            <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-8">Login for Admin</h1>
            <div className="flex justify-center flex-col space-y-4 mt-14">
              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs" >Name</p>
                <input id="name" type="text" onChange={e=> setName(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required/>
              </div>

              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs">Password</p>
                <input id="password" type="password"  onChange={e=> setPass(e.target.value) } className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required/>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button onClick={()=>verification()} className="md:py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                login
              </button>
              </div>
        </div>
    </div>
    }
    
    </>
  )
}

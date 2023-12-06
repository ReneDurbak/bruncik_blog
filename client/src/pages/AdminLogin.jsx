
export default function AdminLogin() {




  return (
    <>
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300">
        <form className="flex flex-col  px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
            <h1 className="text-center text-4xl lg:text-5xl font-bold mt-8">Login for Admin</h1>
            <div className="flex justify-center flex-col space-y-4 mt-14">
              <div className="flex flex-col justify-center">
                <p>Name</p>
                <input id="name" type="text" className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required/>
              </div>

              <div className="flex flex-col justify-center">
                <p>Password</p>
                <input id="password" type="text" className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required/>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <button className="py-2 px-4 rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                login
              </button>
              </div>
        </form>
    </div>
    </>
  )
}

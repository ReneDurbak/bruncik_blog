import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="font-poppins flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
        <div className="px-4 lg:px-10 pt-10 pb-8 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Reset password
          </h1>
          <form>
            <div className="flex flex-col mt-16">
           
                <p className="lg:text-base sm:text-sm text-xs mb-1">
                  New password
                </p>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-4 rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out"
                  required
                />
             

              
                <p className="lg:text-base sm:text-sm text-xs mb-1">
                  Confirm new password
                </p>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out"
                  required
                />
              </div>
        

            <div className="flex justify-between items-center">
              <Link to="/login">
                <button className="float-left mt-8 py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-white hover:bg-slate-200 text-black hover:shadow-xl shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                  Back
                </button>
              </Link>

              <button
                type="submit"
                className="float-right mt-8 py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black text-white shadow-lg hover:text-slate-400 hover:shadow-xl outline-0 outline duration-300 ease-out"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

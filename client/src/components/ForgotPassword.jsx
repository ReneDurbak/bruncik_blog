import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";


export default function ForgotPassword() {
  const [email, setEmail] = useState("");


  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);


  const handleSendResetPasswordLink = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:4000/users/sendResetPasswordLink`,
        {
          email,
        }
      );

      toast.success("Reset Password email successfully sent.");
    } catch (error) {
      toast.error('User not found');
    }
  };

  useEffect(() => {
    if(userInfo && userInfo.confirmed === true){
      navigate('/')
    }
  }, [navigate, userInfo])

  return (
    <>
      <ToastContainer />
      <div className="font-poppins flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
        <form
          onSubmit={handleSendResetPasswordLink}
          className="flex flex-col px-4 md:px-8 lg:px-10 pt-10 lg:pb-8 pb-5 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl"
        >
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Forgot password?
          </h1>
          <div>
            <div className="flex justify-center flex-col space-y-4 mt-16">
              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs mb-1">
                  E-mail associated with your account
                </p>
                <input
                  id="name"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out"
                  required
                />
              </div>
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
          </div>
        </form>
      </div>
    </>
  );
}

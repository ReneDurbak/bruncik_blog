import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginMutation } from "../slices/user/usersApiSlice";
import { setCredentials } from "../slices/user/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");
  const email = new URLSearchParams(location.search).get("email");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [login, { isLoading }] = useLoginMutation();

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
      } else {
        const response = await axios.post(
          `http://localhost:4000/users/resetPassword?token=${token}`,
          {
            password,
          }
        );

        const res = await login({ email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        toast.success('Password reset successful')
        navigate("/");
      }
    } catch (error) {
      toast.error('Please enter new password');
      console.error(error)
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.confirmed === true) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleResetPassword}
        className="font-poppins flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6"
      >
        <div className="px-4 md:px-8 lg:px-10 pt-10 lg:pb-8 pb-5 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
            Reset password
          </h1>
          <div>
            <div className="flex flex-col mt-16">
              <p className="lg:text-base sm:text-sm text-xs mb-1">
                New password
              </p>
              <input
                id="name"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out"
                required
              />

              <p className="lg:text-base sm:text-sm text-xs mb-1">
                Confirm new password
              </p>
              <input
                id="name"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out"
                required
              />
            </div>

            <div className="flex justify-end items-center mt-8">
              {isLoading && (
                <Spinner
                  className="mr-4"
                  color="pink"
                  aria-label="Large Pink spinner example"
                  size="lg"
                />
              )}

              <button
                type="submit"
                className="float-right py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black text-white shadow-lg hover:text-slate-400 hover:shadow-xl outline-0 outline duration-300 ease-out"
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

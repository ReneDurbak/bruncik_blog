import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import { toast, ToastContainer } from "react-toastify";
import { useRegisterMutation } from "../slices/user/usersApiSlice";
import { setCredentials } from "../slices/user/authSlice";
import { showLogin } from "../slices/uiSlice";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

export default function Register() {
  const isBigMobile = useMediaQuery({ query: "(min-width: 640px )" });

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const handleRegister = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (name === "") {
      setNameError(true);
      hasError = true;
    }

    if (email === "") {
      setEmailError(true);
      hasError = true;
    }

    if (password === "") {
      setPasswordError(true);
      hasError = true;
    }

    if (confirmPassword === "") {
      setConfirmPasswordError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({ name, email, password }).unwrap(); //unwraps the promise
        dispatch(setCredentials({ ...res }));
        toast.success(
          "Registration successful. Please check your email for verification."
        );
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="font-poppins flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
        <div className="flex flex-col  px-4 md:px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-8">
            Register an account
          </h1>
          <form onSubmit={handleRegister}>
            <div className="flex justify-center flex-col space-y-4 mt-14">
              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs">Name</p>
                <input
                  id="name"
                  type="text"
                  placeholder={nameError ? "Please enter your name!" : ""}
                  onClick={() => {
                    setNameError(false);
                  }}
                  onChange={(e) => setName(e.target.value)}
                  className={`rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                    nameError
                      ? "border-red-600 placeholder-red-600 animate-shake"
                      : "border-black"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs">E-mail</p>
                <input
                  id="email"
                  type="text"
                  placeholder={emailError ? "Please enter your e-mail!" : ""}
                  onClick={() => {
                    setEmailError(false);
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                    emailError
                      ? "border-red-600 placeholder-red-600 animate-shake"
                      : "border-black"
                  }`}
                />
              </div>

              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs">Password</p>
                <div className="relative">
                  <input
                    id="password"
                    type={isShowPassword ? "text" : "password"}
                    placeholder={
                      passwordError ? "Please enter your password!" : ""
                    }
                    onClick={() => {
                      setPasswordError(false);
                      setConfirmPasswordError(false);
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                      passwordError
                        ? "border-red-600 placeholder-red-600 animate-shake"
                        : "border-black"
                    }`}
                  />
                  <FaEyeSlash
                    onClick={() => setIsShowPassword(false)}
                    size={isBigMobile ? 18 : 16}
                    className={`${
                      isShowPassword ? "block" : "hidden"
                    } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                  />

                  <FaEye
                    onClick={() => setIsShowPassword(true)}
                    size={isBigMobile ? 18 : 16}
                    className={`${
                      isShowPassword ? "hidden" : "block"
                    } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="lg:text-base sm:text-sm text-xs">
                  Confirm password
                </p>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={isShowConfirmPassword ? "text" : "password"}
                    placeholder={
                      passwordError && confirmPasswordError
                        ? "Please enter your password!"
                        : confirmPasswordError
                        ? "Please confirm your password"
                        : ""
                    }
                    onClick={() => {
                      setConfirmPasswordError(false);
                    }}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                      confirmPasswordError
                        ? "border-red-600 placeholder-red-600 animate-shake"
                        : "border-black"
                    }`}
                  />

                  <FaEyeSlash
                    onClick={() => setIsShowConfirmPassword(false)}
                    size={isBigMobile ? 18 : 16}
                    className={`${
                      isShowConfirmPassword ? "block" : "hidden"
                    } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                  />

                  <FaEye
                    onClick={() => setIsShowConfirmPassword(true)}
                    size={isBigMobile ? 18 : 16}
                    className={`${
                      isShowConfirmPassword ? "hidden" : "block"
                    } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-10">
              <div className="lg:text-base text-sm mr-4 my-auto duration-300 ease-in-out hover:text-gray-600 hover:cursor-pointer">
                <Link to="/" onClick={() => dispatch(showLogin())}>
                  Already have an account?
                </Link>
              </div>
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
                className="py-2 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out"
              >
                register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

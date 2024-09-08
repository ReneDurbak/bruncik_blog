import { useState, useEffect, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../assets/icon.png";
import { IoIosLogIn } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useLogoutMutation } from "../slices/user/usersApiSlice";
import { logout } from "../slices/user/authSlice";
import { Dropdown } from "flowbite-react";
import { useLoginMutation } from "../slices/user/usersApiSlice";
import { setCredentials } from "../slices/user/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Spinner } from "flowbite-react";
import { showLogin, hideLogin } from "../slices/uiSlice";
import closeButton from "../assets/closebutton.png";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { useRegisterMutation } from "../slices/user/usersApiSlice";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const scrollDirection = useScrollDirection();

  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
      let lastScrollY = window.pageYOffset;

      const updateScrollDirection = () => {
        if (window.innerWidth < 768) {
          const scrollY = window.pageYOffset;
          const direction = scrollY > lastScrollY ? "down" : "up";
          if (
            direction !== scrollDirection &&
            (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
          ) {
            setScrollDirection(direction);
          }
          lastScrollY = scrollY > 0 ? scrollY : 0;
        }
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      };
    }, [scrollDirection]);

    return scrollDirection;
  }

  const isBigMobile = useMediaQuery({ query: "(min-width: 640px )" });

  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  {
    /*Login variables*/
  }

  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginEmailError, setLoginEmailError] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState(false);
  const { isLoginVisible } = useSelector((state) => state.ui);
  const [isShowLoginPassword, setIsShowLoginPassword] = useState(false);

  const handleCloseLogin = () => {
    dispatch(hideLogin());
  };

  const handleOpenLogin = () => {
    dispatch(showLogin());
    setIsLoginFormVisible(true);
  };

  const loginFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginFormRef.current &&
        !loginFormRef.current.contains(event.target)
      ) {
        dispatch(hideLogin());
        setIsForgotPasswordFormVisible(false);
        setIsRegisterFormVisible(false);
        setIsLoginFormVisible(true);
      }
    };

    if (isLoginVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoginVisible, dispatch]);

  const [login, { isLoginLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (loginEmail === "") {
      setLoginEmailError(true);
      hasError = true;
    }

    if (loginPassword === "") {
      setLoginPasswordError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const res = await login({
        email: loginEmail,
        password: loginPassword,
      }).unwrap(); //unwraps the promise
      dispatch(setCredentials({ ...res }));
      setLoginEmail("");
      setLoginPassword("");
      navigate("/");
      dispatch(hideLogin());
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  {
    /* Register variables*/
  }

  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const [registerName, setRegisterName] = useState("");
  const [registerNameError, setRegisterNameError] = useState(false);

  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPasswordError, setRegisterPasswordError] = useState(false);

  const [confirmRegisterPassword, setConfirmRegisterPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [isShowRegisterPassword, setIsShowRegisterPassword] = useState(false);
  const [isShowConfirmRegisterPassword, setIsShowConfirmRegisterPassword] =
    useState(false);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerEmailError, setEmailError] = useState(false);

  const [register, { isRegisterLoading }] = useRegisterMutation();

  const handleRegister = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (registerName === "") {
      setRegisterNameError(true);
      hasError = true;
    }

    if (registerEmail === "") {
      setEmailError(true);
      hasError = true;
    }

    if (registerPassword === "") {
      setRegisterPasswordError(true);
      hasError = true;
    }

    if (confirmRegisterPassword === "") {
      setConfirmPasswordError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    if (registerPassword !== confirmRegisterPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const res = await register({
          name: registerName,
          email: registerEmail,
          password: registerPassword,
        }).unwrap(); //unwraps the promise
        // dispatch(setCredentials({ ...res }));
        toast.success(
          "Registration successful. Please check your email for verification."
        );
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  {
    /*Forgot Password variables*/
  }

  const [isForgotPasswordFormVisible, setIsForgotPasswordFormVisible] =
    useState(false);

  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordEmailError, setForgotPasswordEmailError] = useState("");

  const handleSendResetPasswordLink = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (forgotPasswordEmail === "") {
      setForgotPasswordEmailError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/users/sendResetPasswordLink`,
        {
          email: forgotPasswordEmail,
        }
      );

      toast.success("Reset Password email successfully sent.");
    } catch (error) {
      toast.error("User not found");
    }
  };

  useEffect(() => {
    if (scrollDirection === "down") {
      setNav(false);
    }
  }, [scrollDirection]);

  return (
    <>
      <header
        className={`w-full z-[5] font-poppins bg-[#2A6CA5] text-white transition-all duration-500  sm:fixed sticky ${
          scrollDirection === "down" ? "top-[-100px]" : "top-0"
        } ${isLoginVisible ? "blur-[1px]" : ""}`}
      >
        <div className="relative 2xl:p-5 xl:p-6 sm:p-[18px] p-4 md:flex md:flex-cols-2 md:items-center md:justify-between 2xl:max-w-[1680px]  mx-auto 2xl:px-20 xl:px-[70px] lg:px-10 sm:px-10 px-6">
          <div className="flex flex-1 items-center justify-between w-full md:w-auto">
            <h1 className="text-white 2xl:text-[32px] xl:text-3xl lg:text-[26px] md:text-2xl sm:text-2xl  text-[25px] font-hurricane cursor-pointer">
              <Link to="/">
                <div className="flex space-x-2">
                  <img
                    src={logo}
                    className="xl:w-[32px] lg:w-[26px] md:w-[24px] w-[24px]  my-auto"
                  />
                  <div>Peter Brunčík</div>
                </div>
              </Link>
            </h1>
            <div onClick={handleNav} className="block md:hidden">
              {!nav ? (
                <AiOutlineMenu className="cursor-pointer" size={20} />
              ) : (
                <AiOutlineClose className="cursor-pointer" size={20} />
              )}
            </div>
          </div>
          {/* ----desktop version------ */}
          <ul className="md:flex md:flex-row flex-col md:items-center hidden lg:ml-10">
            <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg  hover:text-neutral-400 duration-300">
              <NavLink to="/push-ups">Push-ups</NavLink>
            </li>
            <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300">
              <NavLink to="/articles">Articles</NavLink>
            </li>
            <li className="sm:mx-0 md:mx-3 lg:mx-4 xl:mx-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300">
              <NavLink to="/mycourse">My Course</NavLink>
            </li>
            <li className="sm:ml-0 md:ml-3 lg:ml-4 xl:ml-5  md:text-sm xl:text-base 2xl:text-lg hover:text-neutral-400 duration-300">
              <NavLink to="/about">About Me</NavLink>
            </li>
          </ul>

          {userInfo ? (
            <div className="ml-6 md:block hidden">
              <Dropdown
                label={`${userInfo.name}`}
                style={{ backgroundColor: "black" }}
              >
                <Link to="/profile">
                  <Dropdown.Header>
                    <span className="block text-sm">{userInfo.name}</span>
                    <span className="block truncate text-sm font-medium">
                      {userInfo.email}
                    </span>
                  </Dropdown.Header>
                </Link>

                <Dropdown.Divider />
                <Dropdown.Item onClick={() => logoutHandler()}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            </div>
          ) : (
            <>
              <div
                onClick={() => handleOpenLogin()}
                className="hidden md:flex items-center justify-center space-x-2  ml-[31.4px]  md:text-sm xl:text-base bg-black py-2 px-3  rounded-xl ease-in-out duration-500 hover:bg-white hover:text-black w-[100px]"
              >
                <div className="block font-medium p-[4px] xl:p-[1px] cursor-pointer text-[14px]">
                  Login
                </div>
                <IoIosLogIn className="text-sm" size={22} />
              </div>
            </>
          )}
        </div>

        {/* ----mobile version------ */}
        <ul
          className={
            nav
              ? "origin-top flex flex-col absolute top-18  w-full ease-in-out duration-500  md:hidden  bg-[#2A6CA5] opacity-100  z-20"
              : "origin-top scale-y-0 	 flex flex-col absolute top-18  w-full ease-in-out duration-500  md:hidden  bg-[#2A6CA5] opacity-100  z-20"
          }
        >
          <li className="p-4 md:text-lg text-sm hover:text-neutral-400 duration-300 w-full text-center">
            <NavLink onClick={() => setNav(false)} to="/">
              Home
            </NavLink>
          </li>
          <li className="p-4 md:text-lg text-sm hover:text-neutral-400 duration-300 text-center">
            <NavLink onClick={() => setNav(false)} to="/push-ups">
              Push-ups
            </NavLink>
          </li>
          <li className="p-4 md:text-lg text-sm hover:text-neutral-400 duration-300 text-center">
            <NavLink onClick={() => setNav(false)} to="/articles">
              Articles
            </NavLink>
          </li>
          <li className="p-4 md:text-lg text-sm hover:text-neutral-400 duration-300 text-center">
            <NavLink onClick={() => setNav(false)} to="/mycourse">
              My Course
            </NavLink>
          </li>
          <li className="p-4 pb-6 md:text-lg text-sm hover:text-neutral-400 duration-300 text-center">
            <NavLink onClick={() => setNav(false)} to="/about">
              About Me
            </NavLink>
          </li>
          {userInfo ? (
            <li className="text-sm hover:text-neutral-400 duration-300 flex justify-center w-full text-center bg-black">
              <Dropdown
                label={`${userInfo.name}`}
                className="w-min"
                style={{ backgroundColor: "black" }}
              >
                <Link to="/profile">
                  <Dropdown.Header className=" flex flex-col">
                    <span className="text-sm">{userInfo.name}</span>
                    <span className="truncate text-sm font-medium">
                      {userInfo.email}
                    </span>
                  </Dropdown.Header>
                </Link>

                <Dropdown.Divider />
                <Dropdown.Item onClick={() => logoutHandler()}>
                  Sign out
                </Dropdown.Item>
              </Dropdown>
            </li>
          ) : (
            <>
              <div
                className="text-sm hover:text-neutral-400 duration-300 flex space-x-2 justify-center items-center w-full text-center bg-black p-2 h-[42px]"
                onClick={() => handleOpenLogin()}
              >
                <div className="block font-medium">Login</div>
                <IoIosLogIn className="text-sm" size={22} />
              </div>
            </>
          )}
        </ul>
      </header>

      <ToastContainer />
      {isLoginFormVisible ? (
        <div
          className={`${
            isLoginVisible ? "block" : "hidden"
          } fixed top-[0%]  w-full   backdrop-blur-sm z-[20]`}
        >
          <div className="relative font-poppins flex justify-center items-center h-screen  px-6">
            {" "}
            {/*bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300*/}
            <div
              ref={loginFormRef}
              className="relative flex flex-col  px-4 md:px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300"
            >
              <img
                src={closeButton}
                className="hover:scale-125 duration-300 ease-in-out w-min absolute lg:right-6 right-4 lg:top-4 top-2 lg:scale-100 scale-90"
                onClick={handleCloseLogin}
              />

              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-12">
                Login into an account
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="flex justify-center flex-col space-y-4 mt-14">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">E-mail</p>
                    <input
                      id="loginEmail"
                      type="text"
                      value={loginEmail}
                      placeholder={
                        loginEmailError ? "Please insert your e-mail!" : ""
                      }
                      onClick={() => {
                        setLoginEmailError(false);
                      }}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                        loginEmailError
                          ? "border-red-600 placeholder-red-600 animate-shake"
                          : "border-black"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Password</p>
                    <div className="relative">
                      <input
                        id="loginPassword"
                        type={isShowLoginPassword ? "text" : "password"}
                        value={loginPassword}
                        placeholder={
                          loginPasswordError
                            ? "Please insert your password!"
                            : ""
                        }
                        onClick={() => {
                          setLoginPasswordError(false);
                        }}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                          loginPasswordError
                            ? "border-red-600 placeholder-red-600 animate-shake"
                            : "border-black"
                        }`}
                      />

                      <FaEyeSlash
                        onClick={() => setIsShowLoginPassword(false)}
                        size={isBigMobile ? 18 : 14}
                        className={`${
                          isShowLoginPassword ? "block" : "hidden"
                        } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                      />

                      <FaEye
                        onClick={() => setIsShowLoginPassword(true)}
                        size={isBigMobile ? 18 : 14}
                        className={`${
                          isShowLoginPassword ? "hidden" : "block"
                        } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div
                      onClick={() => {
                        setIsLoginFormVisible(false);
                        setIsRegisterFormVisible(false);
                        setIsForgotPasswordFormVisible(true);
                      }}
                      className="ml-auto"
                    >
                      <p className="lg:text-sm text-xs underline-offset-4 cursor-pointer">
                        Forgot password?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <div className="lg:text-base text-sm mr-4 my-auto duration-300 ease-in-out hover:text-gray-600 hover:cursor-pointer underline-offset-4">
                    <div
                      onClick={() => {
                        setIsLoginFormVisible(false);
                        setIsRegisterFormVisible(true);
                        setIsForgotPasswordFormVisible(false);
                      }}
                    >
                      <u>Not registered yet?</u>
                    </div>
                  </div>
                  {isLoginLoading && (
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
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : isRegisterFormVisible ? (
        <div
          className={`${
            isLoginVisible ? "block" : "hidden"
          } fixed top-[0%]  w-full   backdrop-blur-sm z-[20]`}
        >
          <div className="font-poppins flex justify-center items-center h-screen px-6">
            <div
              ref={loginFormRef}
              className="relative flex flex-col  px-4 md:px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl  bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300"
            >
              <img
                src={closeButton}
                className="hover:scale-125 duration-300 ease-in-out w-min absolute lg:right-6 right-4 lg:top-4 top-2 lg:scale-100 scale-90"
                onClick={handleCloseLogin}
              />
              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-8">
                Register an account
              </h1>
              <form onSubmit={handleRegister}>
                <div className="flex justify-center flex-col space-y-4 mt-14">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Name</p>
                    <input
                      id="registerName"
                      type="text"
                      placeholder={
                        registerNameError ? "Please enter your name!" : ""
                      }
                      onClick={() => {
                        setRegisterNameError(false);
                      }}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className={`rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                        registerNameError
                          ? "border-red-600 placeholder-red-600 animate-shake"
                          : "border-black"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">E-mail</p>
                    <input
                      id="registerEmail"
                      type="email"
                      placeholder={
                        registerEmailError ? "Please enter your e-mail!" : ""
                      }
                      onClick={() => {
                        setEmailError(false);
                      }}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className={`rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                        registerEmailError
                          ? "border-red-600 placeholder-red-600 animate-shake"
                          : "border-black"
                      }`}
                    />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Password</p>
                    <div className="relative">
                      <input
                        id="registerPassword"
                        type={isShowRegisterPassword ? "text" : "password"}
                        placeholder={
                          registerPasswordError
                            ? "Please enter your password!"
                            : ""
                        }
                        onClick={() => {
                          setRegisterPasswordError(false);
                          setConfirmPasswordError(false);
                        }}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                          registerPasswordError
                            ? "border-red-600 placeholder-red-600 animate-shake"
                            : "border-black"
                        }`}
                      />
                      <FaEyeSlash
                        onClick={() => setIsShowRegisterPassword(false)}
                        size={isBigMobile ? 18 : 16}
                        className={`${
                          isShowRegisterPassword ? "block" : "hidden"
                        } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                      />

                      <FaEye
                        onClick={() => setIsShowRegisterPassword(true)}
                        size={isBigMobile ? 18 : 16}
                        className={`${
                          isShowRegisterPassword ? "hidden" : "block"
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
                        id="confirmRegisterPassword"
                        type={
                          isShowConfirmRegisterPassword ? "text" : "password"
                        }
                        placeholder={
                          registerPasswordError && confirmPasswordError
                            ? "Please enter your password!"
                            : confirmPasswordError
                            ? "Please confirm your password"
                            : ""
                        }
                        onClick={() => {
                          setConfirmPasswordError(false);
                        }}
                        onChange={(e) =>
                          setConfirmRegisterPassword(e.target.value)
                        }
                        className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                          confirmPasswordError
                            ? "border-red-600 placeholder-red-600 animate-shake"
                            : "border-black"
                        }`}
                      />

                      <FaEyeSlash
                        onClick={() => setIsShowConfirmRegisterPassword(false)}
                        size={isBigMobile ? 18 : 16}
                        className={`${
                          isShowConfirmRegisterPassword ? "block" : "hidden"
                        } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                      />

                      <FaEye
                        onClick={() => setIsShowConfirmRegisterPassword(true)}
                        size={isBigMobile ? 18 : 16}
                        className={`${
                          isShowConfirmRegisterPassword ? "hidden" : "block"
                        } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <div className="lg:text-base text-sm mr-4 my-auto duration-300 ease-in-out hover:text-gray-600 hover:cursor-pointer">
                    <div onClick={() => setIsLoginFormVisible(true)}>
                      Already have an account?
                    </div>
                  </div>
                  {isRegisterLoading && (
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
        </div>
      ) : isForgotPasswordFormVisible ? (
        <div
          className={`${
            isLoginVisible ? "block" : "hidden"
          } fixed top-[0%]  w-full   backdrop-blur-sm z-[20]`}
        >
          <div className="font-poppins flex justify-center items-center h-screen px-6">
            <form
              ref={loginFormRef}
              onSubmit={handleSendResetPasswordLink}
              className="relative flex flex-col px-4 md:px-8 lg:px-10 pt-10 lg:pb-8 pb-5 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 "
            >
              <img
                src={closeButton}
                className="hover:scale-125 duration-300 ease-in-out w-min absolute lg:right-6 right-3 lg:top-4 top-2 lg:scale-100 scale-75"
                onClick={handleCloseLogin}
              />

              <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold">
                Forgot password?
              </h1>
              <div>
                <div className="flex justify-center flex-col space-y-4 lg:mt-16 mt-12">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs mb-1">
                      E-mail associated with your account
                    </p>
                    <input
                      type="email"
                      placeholder={
                        forgotPasswordEmailError
                          ? "Please enter your e-mail!"
                          : ""
                      }
                      onChange={(e) => setForgotPasswordEmail(e.target.value)}
                      onClick={() => setForgotPasswordEmailError(false)}
                      className={`rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
                        forgotPasswordEmailError
                          ? " border-red-600 placeholder-red-600 animate-shake"
                          : "border-black"
                      }`}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div onClick={() => setIsLoginFormVisible(true)}>
                    <button className="float-left mt-8 py-2 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-white hover:bg-slate-200 text-black hover:shadow-xl shadow-lg outline-0 outline duration-300 ease-out">
                      Back
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="float-right mt-8 py-2 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black text-white shadow-lg hover:text-slate-400 hover:shadow-xl outline-0 outline duration-300 ease-out"
                  >
                    Reset password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;

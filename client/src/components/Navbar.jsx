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

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const { isLoginVisible } = useSelector((state) => state.ui);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleCloseLogin = () => {
    dispatch(hideLogin());
  };

  const handleOpenLogin = () => {
    dispatch(showLogin());
  };

  const loginFormRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginFormRef.current &&
        !loginFormRef.current.contains(event.target)
      ) {
        dispatch(hideLogin());
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

  const [login, { isLoading }] = useLoginMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    if (email === "") {
      setEmailError(true);
      hasError = true;
    }

    if (password === "") {
      setPasswordError(true);
      hasError = true;
    }

    if (hasError) {
      return;
    }

    try {
      const res = await login({ email, password }).unwrap(); //unwraps the promise
      dispatch(setCredentials({ ...res }));
      setEmail("");
      setPassword("");
      navigate("/");
      dispatch(hideLogin());
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  return (
    <>
      <header
        className={`w-full z-[5] font-poppins bg-[#2A6CA5] text-white transition-all duration-500  sm:fixed sticky ${
          scrollDirection === "down" ? "top-[-100px]" : "top-0"
        } ${isLoginVisible ? "blur-[1px]" : ""}`}
      >
        <div className="relative 2xl:p-5 xl:p-6 sm:p-[18px] p-4 md:flex md:items-center md:justify-between 2xl:max-w-[1680px]  mx-auto 2xl:px-20 xl:px-[70px] lg:px-10 sm:px-10 px-6">
          <div className="flex items-center justify-between w-full md:w-auto">
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

            {userInfo ? (
              <li className="ml-6">
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
              </li>
            ) : (
              <>
                <div
                  onClick={() => handleOpenLogin()}
                  className="flex items-center justify-center space-x-2  ml-[31.4px]  md:text-sm xl:text-base bg-black py-2 px-3  rounded-xl ease-in-out duration-500 hover:bg-white hover:text-black w-[100px]"
                >
                  <div className="block font-medium p-[4px] xl:p-[1px] cursor-pointer text-[14px]">
                    Login
                  </div>
                  <IoIosLogIn className="text-sm" size={22} />
                </div>
              </>
            )}
          </ul>
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
                className="text-sm hover:text-neutral-400 duration-300 flex justify-center w-full text-center bg-black p-2"
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
              className="hover:scale-125 duration-300 ease-in-out w-min absolute right-6 top-4"
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
                    id="email"
                    type="text"
                    value={email}
                    placeholder={emailError ? "Please insert your e-mail!" : ""}
                    onClick={() => {
                      setEmailError(false);
                    }}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out ${
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
                      value={password}
                      placeholder={
                        passwordError ? "Please insert your password!" : ""
                      }
                      onClick={() => {
                        setPasswordError(false);
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
                      size={isBigMobile ? 18 : 14}
                      className={`${
                        isShowPassword ? "block" : "hidden"
                      } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                    />

                    <FaEye
                      onClick={() => setIsShowPassword(true)}
                      size={isBigMobile ? 18 : 14}
                      className={`${
                        isShowPassword ? "hidden" : "block"
                      } absolute right-2 top-1/2 -translate-y-1/2  cursor-pointer`}
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <Link to="/forgotPassword" className="ml-auto">
                    <p className="lg:text-sm text-xs underline-offset-4 cursor-pointer">
                      Forgot password?
                    </p>
                  </Link>
                </div>
              </div>

              <div className="flex justify-end mt-10">
                <div className="lg:text-base text-sm mr-4 my-auto duration-300 ease-in-out hover:text-gray-600 hover:cursor-pointer underline-offset-4">
                  <Link to="/register">
                    <u>Not registered yet?</u>
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
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

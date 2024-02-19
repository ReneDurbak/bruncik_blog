import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SHA256 } from 'crypto-js';
import axios from "axios";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthStatus } from '../slices/adminAuthSlice';
import { toast, ToastContainer } from 'react-toastify'



export default function AdminLogin({ articles }) {
  const location = useLocation();
  const isAdminRoute = location.pathname === '/admin';

  const [admins, setAdmins] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputPass, setInputPass] = useState('');
  const [verify, setVerification] = useState(false);
  const dispatch = useDispatch();

  const verification = (e) => {
    e.preventDefault();

    const hashedInputPass = SHA256(inputPass).toString();

    const isAdmin = admins.some((admin) => admin.username === inputName && admin.password === hashedInputPass);

    if (isAdmin) {
      dispatch(setAuthStatus(true));
      setVerification(true);
    }else{
      toast.error('Incorrect credentials')

    }
  };

  const fetchAdmin = async () => {
    try {
      const response = await axios.get("http://localhost:4000/getAdminCredentials")
      const admins = response.data
      setAdmins(admins);
    } catch (err) {
      console.error("Error fetching admin data:", err.message)
    }
  }

  useEffect(() => {
    fetchAdmin()
  }, [])

  if (isAdminRoute && verify) {
    return <Navigate to='/admin/articles' />;
  }

  return (
    <>
      {  isAdminRoute && (
        <>
        <ToastContainer/>
          <div className="flex justify-center items-center h-screen bg-gradient-to-br from-red-100 via-yellow-200 to-purple-300 px-6">
            <div className="flex flex-col  px-10 py-6 rounded-[30px] w-[40rem] outline outline-[1px] shadow-2xl">
              <h1 className="text-center text-2xl md:text-4xl lg:text-5xl font-bold mt-8">Login for Admin</h1>
              <form onSubmit={verification}>
                <div className="flex justify-center flex-col space-y-4 mt-14">
                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Name</p>
                    <input id="name" type="text" onChange={e => setInputName(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required />
                  </div>

                  <div className="flex flex-col justify-center">
                    <p className="lg:text-base sm:text-sm text-xs">Password</p>
                    <input id="password" type="password" onChange={e => setInputPass(e.target.value)} className="rounded-xl outline outline-0 shadow-md px-2 py-[6px] focus:outline-0 focus:shadow-lg duration-300 ease-in-out" required />
                  </div>
                </div>

                <div className="flex justify-end mt-10">
                  <button type="submit" className="md:py-2 py-1 md:px-4 px-3 text-sm lg:text-base rounded-[16px] bg-black hover:bg-white text-white hover:text-black shadow-lg hover:shadow-xl outline-0 outline duration-300 ease-out">
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
      
          </>
        )
      }
    </>
  )
}

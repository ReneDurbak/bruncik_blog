import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { setCredentials } from "../slices/user/authSlice";
import { useDispatch } from "react-redux";


const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const token = new URLSearchParams(location.search).get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/verify?token=${token}`
        );

        const { user: userInfo } = response.data;

        setMessage(response.data.message);
        localStorage.setItem(
          "userInfo",
          JSON.stringify({ ...userInfo, confirmed: true })
        );

        dispatch(setCredentials(userInfo));
        
        navigate("/");
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    if (token) {
      verifyEmail();
    }
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Email Verification, please wait...</h2>
    </div>
  );
};

export default Verify;

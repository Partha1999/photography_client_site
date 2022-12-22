import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login/login.png";
import useAuth from "../Hooks/useAuth";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import useDocumentTitle from "../../useDocumentTitle";

const handleLogin = (email, password, loginUser, location, navigate) => {
  loginUser(email, password, location, navigate);
};



export default Login;

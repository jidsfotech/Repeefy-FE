import React, { useState } from "react";
import  "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import LoaderButton from '../../Components/LoaderButton/LoaderButton';
import Header from '../../Components/Header/Header';
// import getTokenDetails from "../../lib/jwt";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    return Axios.post("https://repify-demo-api.herokuapp.com/api/user/login", data)
      .then(async (res) => {
        const data = await res.data;
        localStorage.setItem("UserToken", data.token);
        // redirects the user to the dashboard
        window.location.href = "/dashboard";
      })
      .catch((err) => {
        //This ERROR CHECK IS FAILING
       if (err.response.data.hasOwnProperty("message")) {
          setErrorMessage(err.response.data.message);
        }
        setLoading(false);
        
      });
  };

  return (
      <div className='containers'>
        <Header />
        <div className="Login">
          <div className="LoginHero">
            <Link to="/">
              <img
                src= {'https://res.cloudinary.com/repify/image/upload/v1602121150/RepifyLogo.png'}
                alt="Repify"
                className="LoginLogo"
              />
            </Link>
            <p className="HeroSmallText">
              Welcome, Login to your Repify Account
            </p>
          </div>
          <div className="FormWrapper">
            <form
              className="LoginForm"
              method="POST"
              onSubmit={handleSubmit(onSubmit)}
            >
              <p className="ErrorMessage">{errorMessage}</p>
              <label htmlFor="email" className="LoginLabel">
                Email Address:
                <input
                  className="LoginInputs"
                  type="email"
                  name="email"
                  placeholder="Username"
                  ref={register}
                  required
                />
              </label>
              <label htmlFor="password" className="LoginLabel">
                Your Password:
                <input
                  className="LoginInputs"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                  required
                />
              </label>
              <p className="LoginLabel">
                <Link className="LoginLabelLink" to="#">
                  Forgot Password?
                </Link>
              </p>
              {loading === false?<button className="RegBtn" type="submit">
                Login
              </button>: <LoaderButton/>}
              <p className="ForgetLink">
                Don't have an Account ?
                <Link className="LoginLink" to="/register">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    )
};
export default Login;
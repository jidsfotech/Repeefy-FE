import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Axios from "axios";
import LoaderButton from '../../Components/LoaderButton/LoaderButton'
// import getTokenDetails from "../../lib/jwt";
// import images from "../../images/images";
// import LoaderButton from "../LoaderButton/LoaderButton"

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    // return Axios.post("/user/login", data)
    //   .then(async (res) => {
    //     const data = await res.data;
    //     localStorage.setItem("UserToken", data.token);
    //     // redirects the user to the dashboard
    //     window.location.href = "/dashboard/user/wallet";
    //   })
    //   .catch((err) => {
    //     //This ERROR CHECK IS FAILING
    //    if (err.response.data.hasOwnProperty("message")) {
    //       setErrorMessage(err.response.data.message);
    //     }
    //     setLoading(false);
    //     // window.alert("Oops!!!.. Some error occured please try again, make sure you're connected to internet" );
        
    //     // }
    //     // window.alert("We couldn't connect to Repify. Make sure you're connected to the internet and try again.");
    //   });
  };

  return (
      <>
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
                <Link className="LoginLabelLink" to="/forgetpassword">
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
      </>
    )
};
export default Login;
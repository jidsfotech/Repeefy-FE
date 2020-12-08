import React,{useState} from "react";
import LoaderButton from '../../Components/LoaderButton/LoaderButton';
import {useForm } from 'react-hook-form';
import {Link } from 'react-router-dom';
import "./Register.css";

const Register = (props) => {
  const [password, setPassword] = useState("");
  const [unmatched, setUnmatched] = useState(false);
  const [accountType, setAccountType] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const setAccountTypeHandler = (e) => {
    setAccountType(e.target.value);
  };
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    setErrorMessage('');
    console.log(data.user_type)
    if (data.user_type === "Select Account Type") {
      setLoading(false);
      setErrorMessage("Please select an Account type")
      return ;
    }
    delete data.confirmpassword;

    // return Axios.post("/user/registration", data)
    //   .then(async(res) => {
    //     const data = await res.data;
    //     //data to send to dashboard component
    //     const payload = await getTokenDetails(data["data"].token);
    //     if (data.message === "user created") {
    //       window.alert("Registration successful");
    //       window.location.href = "/";
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false)
    //     if (err.hasOwnProperty("response")) {
    //       if (err.response.hasOwnProperty("data")) {
    //         if (err.response.data.hasOwnProperty("message")) {
    //           setErrorMessage(err.response.data.message);
    //         }
    //       }
    //     }
    //   });
    setTimeout(() => {
      setLoading(false);
      alert('Registration Successful!')
    }, 4000);
  };

  const watcher = (e) => {
    if (e.target.value.length >= password.length) {
      if (e.target.value === password) {
        setUnmatched(false);
      } else {
        setUnmatched(true);
      }
    }
  };

  const { register, handleSubmit } = useForm();
  return (
      <div className="SignUP">
        <div className="LoginHero">
          <Link to="/">
            <img
              src={'https://res.cloudinary.com/repify/image/upload/v1602121150/RepifyLogo.png'}
              alt="Repify"
              className="LoginLogo"
            />
          </Link>
          <p className="HeroSmallText">
            Welcome, Lets get you started with your Repify Account
          </p>
        </div>
        <div className="FormWrapper">
          <form
            className="signupForm"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="FormGroup">
              <label className="LoginLabel" htmlFor="fName">
                First Name
                <input
                  className="LoginInputs"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  ref={register}
                  required
                />
              </label>
              <div className="FloatRight">
                <label className="LoginLabel" htmlFor="lName">
                  Last Name
                  <input
                    className="LoginInputs"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    ref={register}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="FormGroup">
              <label className="LoginLabel" htmlFor="phone_number">
                Phone No.
                <input
                  className="LoginInputs"
                  type="text"
                  name="phone_number"
                  placeholder="Phone Number"
                  ref={register}
                  required
                />
              </label>
              <div className="FloatRight">
                <label className="LoginLabel" htmlFor="email">
                  Email
                  <input
                    className="LoginInputs"
                    type="email"
                    name="email"
                    placeholder="Email"
                    ref={register}
                    required
                  />
                </label>
              </div>
            </div>
            <div className="FormGroup">
              <label className="LoginLabel" htmlFor="username">
                Username
                <input
                  className="LoginInputs"
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="UserName"
                  ref={register}
                  required
                />
              </label>
              <div className="FloatRight">
                <label className="LoginLabel" htmlFor="user_type">
                  Account Type:
                  <select
                    name="user_type"
                    className="LoginSelect"
                    ref={register({ required: true })}
                    value={accountType}
                    onChange={setAccountTypeHandler}
                    required
                  >
                    <option
                      value="Select Account Type"
                      name="Select Account Type..."
                    >
                      Select Account Type...
                    </option>
                    <option value="personal" name="personal">
                      Individual
                    </option>
                    <option value="company" name="company">
                      Organization
                    </option>
                  </select>
                </label>
              </div>
            </div>
            <div className="FormGroup">
              <label className="LoginLabel" htmlFor="password">
                Password
                <input
                  className="LoginInputs"
                  type="password"
                  name="password"
                  placeholder="Password"
                  ref={register}
                  autoComplete="off"
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </label>
              <div className="FloatRight">
                <label className="LoginLabel" htmlFor="confirmpassword">
                  Confirm Password
                  <input
                    className="LoginInputs"
                    type="password"
                    autoComplete="off"
                    name="confirmpassword"
                    placeholder="ConfirmPassword"
                    ref={register}
                    required
                    onChange={watcher}
                  />
                </label>
              </div>
            </div>
            <div className="FormGroup">
              <label className="LoginLabel" htmlFor="location">
                Location
                <input
                  className="LoginInputs"
                  type="text"
                  name="location"
                  placeholder="Lagos, Nigeria"
                  ref={register}
                  required
                />
              </label>
              <div className="FloatRight">
                <label className="LoginLabel" htmlFor="referral">
                  Referral Code
                  <input
                    className="LoginInputs"
                    type="text"
                    name="referral"
                    placeholder="Coming Soon"
                    disabled
                  />
                </label>
              </div>
            </div>
            <p className="ErrorMessage">{errorMessage}</p>
            <p className={!unmatched ? "PasswordNone" : "PasswordShow"}>
              password does not match
            </p>
            {loading === false?<button className="RegBtn" type="submit">
              Sign Up
            </button>: <LoaderButton/>}
            <p className="ForgetLink">
              Got an Account ?
              <Link className="LoginLink" to="/login">
                Log In
              </Link>
            </p>
          </form>
        </div>
      </div>
    )
};

export default Register;

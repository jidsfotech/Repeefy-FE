import React from "react";
import "./Hero.css";
import Header from "../../../Components/Header/Header";
import Button from "../../../Components/Button/Button";
// import { Login, SignUp } from "../../../Components/Login-SignUp/Login-SignUp";


class Hero extends React.Component {
  constructor() {
    super();
    this.state = {
      login: false,
      signup: false,
    };
  };

  handleLogin = () => {
    this.setState({ login: true });
    this.setState({ signup: false });
  };
  close = () => {
    this.setState({ login: false });
    this.setState({ signup: false });
  };

  handleSignup = () => {
    this.setState({ signup: true });
  };

  render = () => {
    return (
      <div className="Home">
        <Header
          handleLogin={this.handleLogin}
          handleSignup={this.handleSignup}
        />
        <div className="Hero">
          <div className="HeroContent">
            <h1 className="HeroHeading"> Automate your payments </h1>
            <p className="heroDes">
              Repify automate sending money to people you usually send money
              to on a regular basis. Lets saves you the stress of manually
              sending them money.
            </p>
              <Button Title=" Get Started " to="/login" />             
            {/* {this.state.login === true ? (
              <Login close={this.close} handleSignup={this.handleSignup} />
            ) : null}
            {this.state.signup === true ? (
              <SignUp close={this.close} handleLogin={this.handleLogin} />
            ) : null} */}
          </div>
          <img className="HeroImage" src='https://res.cloudinary.com/repify/image/upload/v1607350329/Frame_xts9zr.png' alt="Repify Face"/>
        </div>
      </div>
    );
  };
};

export default Hero;

import React from "react";
import "./HowWeWork.css";
import { Link } from "react-router-dom";

const howWeWork = () => {
    return (
        <div className="how-we-work-section">
            <h2> Three Steps To Less Worries </h2>
            <div className="container " >
                <Link to="/about/#howToSetUpAccount" className="btn-flat">
                    <div className="signUp column">
                        <img src='https://res.cloudinary.com/repify/image/upload/v1604754699/verify_ruyeoa.png' alt="Sign up Icon"/>
                        <div className="title"> SIGN UP </div>
                        <p>
                            signup for a personal  or business account to get started...
                        </p>
                    </div>
                </Link>
                <div className="dummy"></div>
                <Link to="/about/#howToAddBeneficiary" className="btn-flat ">
                    <div className="add-beneficiary column">
                        <img src='https://res.cloudinary.com/repify/image/upload/v1604754697/add-button_cqb5tf.png' alt="Add Benefactor Icon"/>
                        <div className="title"> ADD BENEFACTOR </div>
                        <p>
                            select and add beneficiaries you want to transfer money to...
                        </p>
                    </div>
                </Link>
                <div className="dummy"></div>
                <Link to="/about/#howToSchedulePayment" className="btn-flat ">
                    <div className="schedule-payment column">
                        <img src='https://res.cloudinary.com/repify/image/upload/v1604754698/income_fme7qd.png' alt="Schedule Payment Icon"/>
                        <div className="title"> SCHEDULE PAYMENT </div>
                        <p>
                            schedule payment to automate transfer to your beneficiaries...
                        </p>
                    </div>
                </Link>
            </div>

            <h2> Features To Look out For </h2>
            <div className="container " >
                <div className="signUp column edit">
                    <img src='https://res.cloudinary.com/repify/image/upload/v1604754698/refresh_ceu5my.png' alt="Automate Icon"/>
                    <div className="title"> Automate recurring payments and transactions </div>
                </div>
                <div className="dummy"></div>
                <div className="add-beneficiary column edit">
                    <img src='https://res.cloudinary.com/repify/image/upload/v1604754699/subscribe_zgmzdy.png' alt="Subscribe Icon"/>
                    <div className="title"> Subscriptions </div>
                </div>
                <div className="dummy"></div>
                <div className="schedule-payment column edit">
                    <img src='https://res.cloudinary.com/repify/image/upload/v1604754698/mutual_hkuail.png' alt="Group Funding Icon"/>
                    <div className="title"> Group funding </div>
                </div>
            </div>
        </div>
    );
};
export default howWeWork;
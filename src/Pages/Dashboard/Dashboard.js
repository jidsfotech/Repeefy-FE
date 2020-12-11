import React from "react";
import "./Dashboard.css";
import Wallet from "../Wallet/Wallet"

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <div className="TopNav">
        <nav className="DashboardNav">
          <div className="BrandLogo">
            <div
              onClick={() => (window.location.href = "/")}
            >
              <img
                src="https://res.cloudinary.com/repify/image/upload/v1602121150/RepifyLogo.png"
                alt="Repify" />
            </div>
          </div>
          <div className="UserProfile">
            <img
              src="https://res.cloudinary.com/repify/image/upload/v1607536594/notification-white_re8fgz.png"
              alt="Notification"
              className="Notify NavItem"
            />
            <img
              src="https://res.cloudinary.com/repify/image/upload/v1603726604/profile-picture-placeholder.png"
              alt="Profile"
              className="UserImg NavItem"
            />
            <p className="UserName NavItem">Daniel Bemolaski!</p>
          </div>
        </nav>
      </div>
      <Wallet />
    </div>
  )
};

export default Dashboard;

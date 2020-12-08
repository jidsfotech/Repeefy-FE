import React from "react";
import "./Footer.css";


const Footer = () => {
    return(
        <div id="footer">
            <h3 className="subscribe-header">Stay updated and Connected<br /> with Us</h3>
            <div className="newsletter">
                <input type="text" id="mail" placeholder="Enter Email Address"/>
                <input type="button" id="send" value="Subscribe"/>
            </div>
            <div className="copyright">
                <p>Copyright &copy; Repify</p>
            </div>
        </div>
    );
};

export default Footer;
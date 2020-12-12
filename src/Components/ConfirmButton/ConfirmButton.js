import React from "react";
import "./ConfirmButton.css";

const ConfirmButton = (props) => {
  return (
    <div className="ConfirmButton">
      <button className={ props.fill ? "CBtn BtnFill" : "CBtn BtnEmpty" } onClick={props.action}>
        {props.content}
      </button>
    </div>
  );
};

export default ConfirmButton;

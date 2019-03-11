import React from "react";

import spinner from "../static/svg/adludio-dots.svg";
import "../App.css";

export default () => {
  return (
    <div className="spinnerContainer">
      <img src={spinner} className="spinnerImg" alt="logo" />
      <p>LOADING....</p>
    </div>
  )
}

import React from "react";
import { LuArrowLeft } from "react-icons/lu";
import "./Error.scss";
export default function Error() {
  return (
    <div className="error">
      <h1>404</h1>
      <p>Oops...Page you are looking can’t be found</p>
      <div className="return-button">
        <a href="/">
          <span>
            <LuArrowLeft className="arrow-icon" />
            Return to Home
          </span>
        </a>
      </div>
    </div>
  );
}

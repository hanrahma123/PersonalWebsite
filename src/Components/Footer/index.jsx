import React from "react";
import "./style.css";

export default function Footer(props) {
  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div>Thanks</div>
        <div>Work In Progress</div>
      </div>
      <div className="footerRight">
        <div>Email: redacted</div>
        <div>Phone: redacted</div>
      </div>
    </div>
  );
}

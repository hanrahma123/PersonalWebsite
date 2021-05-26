import React from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import "./style.css";

export default function Header(props) {
  const title = "Mark Hanrahan";

  return (
    <div className="headerBanner">
      <div className="headerContainer">
        <div className="leftContainer">
          <div className="left">
            <Title title={title} size="h1"></Title>
          </div>
        </div>
        <div className="rightContainer">
          <div className="right">
            <NavBar
              path={props.path}
              handlePathChange={props.handlePathChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

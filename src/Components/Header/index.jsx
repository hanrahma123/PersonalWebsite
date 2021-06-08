import React, { useRef, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import "./style.css";

export default function Header(props) {
  const title = "Mark Hanrahan";
  const widthRef = useRef(0);
  const [device, setDevice] = useState({ flexGrow: 1 });

  useEffect(() => {
    widthRef.current.offsetWidth > 500
      ? setDevice({ flexGrow: 1 })
      : setDevice({ flexGrow: 0 });
    console.log("changed offsetWidth");
  }, [widthRef.current.offsetWidth]);

  return (
    <div className="headerBanner">
      <div className="headerContainer" ref={widthRef}>
        <div className="leftContainer" style={device}>
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

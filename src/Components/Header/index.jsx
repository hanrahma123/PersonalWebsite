import React, { useRef, useEffect, useState } from "react";
import NavBar from "../NavBar";
import Title from "../Title";
import "./style.css";

export default function Header(props) {
  const title = "Mark Hanrahan";
  const widthRef = useRef(null);
  const [device, setDevice] = useState({});

  const smallDevice = { flexGrow: 0 };
  const largeDevice = { flexGrow: 1 };

  useEffect(
    () => {
      //Achieves centering on smaller devices onload of the webpage
      widthRef.current.offsetWidth > 500
        ? changeDevice(largeDevice)
        : changeDevice(smallDevice);
    },
    [widthRef.current],
    largeDevice,
    smallDevice
  );

  const changeDevice = (device) => setDevice(device);

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

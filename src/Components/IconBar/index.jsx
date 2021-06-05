import React from "react";
import "./style.css";

function Icon(props) {
  return (
    <div className="iconBarItem">
      <img className="icon" src={props.icon.src} alt={props.icon.alt} />
    </div>
  );
}

export default function IconBar(props) {
  //fill with images to make a flex box of images
  return (
    <div className="iconBar">
      {props.icons.map((icon) => (
        <Icon icon={icon} />
      ))}
    </div>
  );
}

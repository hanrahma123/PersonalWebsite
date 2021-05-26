import React from "react";
import "./style.css";

export default function Title(props) {
  const CustomSize = props.size;
  return (
    <React.Fragment>
      <CustomSize className="text">{props.title}</CustomSize>
    </React.Fragment>
  );
}

import React from "react";
import "./style.css";
import Home from "../../Pages/Home";
import Projects from "../../Pages/Projects";
import Blog from "../../Pages/Blog";

export default function View(props) {
  return (
    <div className="viewContainer">
      {props.path === "Home" && <Home />}
      {props.path === "Projects" && <Projects />}
      {props.path === "Blog" && <Blog />}
    </div>
  );
}

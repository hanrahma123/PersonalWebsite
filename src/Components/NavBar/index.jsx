import React from "react";
import "./style.css";
import Home from "../../Icons/home.svg";
import Blog from "../../Icons/blog.svg";
import Project from "../../Icons/project.svg";

function NavBarItem(props) {
  return (
    <div
      className={
        props.name === props.selected ? "navBarItemSelected" : "navBarItem"
      }
      onClick={() => props.handlePathChange(props.name)}
    >
      <img src={props.icon} className="svgIcon" alt="icon" />
      <div className="navBarText">{props.name}</div>
    </div>
  );
}

export default function NavBar(props) {
  const paths = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Projects",
      icon: Project,
    },
    {
      name: "Blog",
      icon: Blog,
    },
  ];

  return (
    <div className="navBar">
      {paths.map((path) => (
        <NavBarItem
          key={path.name}
          name={path.name}
          handlePathChange={props.handlePathChange}
          selected={props.path}
          icon={path.icon}
        />
      ))}
    </div>
  );
}

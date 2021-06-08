import React from "react";
import "./style.css";

import Linkedin from "../../Icons/linkedin.svg";
import Insta from "../../Icons/instagram.svg";
import Github from "../../Icons/github.svg";

export default function Footer(props) {
  const icons = [
    {
      src: Linkedin,
      alt: "Linkedin",
      url: "https://ie.linkedin.com/in/mark-hanrahan777",
    },
    {
      src: Insta,
      alt: "Instagram",
      url: "https://www.instagram.com/not.han_solo/",
    },
    {
      src: Github,
      alt: "Github",
      url: "https://github.com/hanrahma123",
    },
  ];

  return (
    <div className="footerContainer">
      <div className="footerLeft">
        <div>Thanks</div>
        <div>Work In Progress</div>
      </div>
      <div className="footerRight">
        <div>Email: markhanrahan12@gmail.com</div>
        <div className="footerIconFlexBox">
          {icons.map((icon) => (
            <div className="footerIconFlexBoxItem" key={icon.alt}>
              <a href={icon.url}>
                <img className="footerIcon" src={icon.src} alt={icon.alt} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

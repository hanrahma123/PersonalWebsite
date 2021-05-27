import React from "react";
import "./style.css";
import picture from "../../Images/profile.jpg";
import Article from "../../Components/Article";

export default function Home(props) {
  const content = {
    title: "Hey",
    subtitle: "Let me introduce myself",
    body: "I'm a 4th year Computer Engineering student in Trinity College Dublin. I've specialised in distributed computing but enjoy almost every area of computer science; from hardware to web-design.",
  };

  return (
    <div>
      <div className="homeTitle">
        <h1>Home</h1>
      </div>
      <div className="homeContent">
        <div className="homeBox1">
          <div className="homeBox1Left">
            <img className="homePicture" src={picture} alt="profile" />
          </div>
          <div className="homeBox1Right">
            <Article file="Home/home_bio" content={content} />
          </div>
        </div>
      </div>
    </div>
  );
}

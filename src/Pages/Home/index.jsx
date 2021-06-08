import React from "react";
import "./style.css";
import Profile from "../../Images/Profile.jpeg";
import Article from "../../Components/Article";
import IconBar from "../../Components/IconBar";
import C from "../../Images/C_logo.png";
import Java from "../../Images/Java_logo.png";
import Python from "../../Images/Python_logo.png";
import Flask from "../../Images/Flask_logo.png";
import Spring from "../../Images/Spring_logo.png";
import Hadoop from "../../Images/Hadoop_logo.png";
import Kafka from "../../Images/Kafka_logo.png";

const contentFile = require("../../Text/Home/Home.json");

export default function Home(props) {
  const icons = [
    {
      src: C,
      alt: "C Logo",
    },
    {
      src: Java,
      alt: "Java Logo",
    },
    {
      src: Python,
      alt: "Python Logo",
    },
    {
      src: Flask,
      alt: "Flask Logo",
    },
    {
      src: Spring,
      alt: "Spring Logo",
    },
    {
      src: Hadoop,
      alt: "Hadoop Logo",
    },
    {
      src: Kafka,
      alt: "Kafka Logo",
    },
  ];

  return (
    <div>
      <div className="homeHeaderContainer">
        <div className="homeHeader">
          <div className="homeBox1">
            <div className="homeBox1Left">
              {" "}
              <img className="homePicture" src={Profile} alt="profile" />{" "}
            </div>
            <div className="homeBox1Right">
              <div className="homeHeaderText">
                <h1>{contentFile.Intro.Title}</h1>
                <body className="homeInlineText">
                  {contentFile.Intro.Body1}
                </body>
                <body className="homeInlineText">
                  <a href="https://reactjs.org/">{contentFile.Intro.Link}</a>
                </body>
                <body className="homeInlineText">
                  {contentFile.Intro.Body2}
                </body>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="homeContent">
        <div className="homeArticleWrapper">
          <Article content={contentFile.Bio} />
        </div>

        <IconBar className="iconBar" icons={icons} />
        <div className="homeArticleWrapper">
          <Article content={contentFile.Tech} />
        </div>

        <div className="homeArticleWrapper">
          <div className="homeWorkExperience">
            {contentFile.Experience.map((exp) => (
              <Article content={exp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

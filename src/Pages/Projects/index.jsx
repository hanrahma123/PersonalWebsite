import React from "react";
import Article from "../../Components/Article";

const contentFile = require("../../Text/Projects/Project.json");

export default function Home(props) {
  return (
    <div>
      <div className="homeHeaderContainer">
        <div className="homeTitle">
          <h1>Projects</h1>
        </div>
      </div>

      <div className="homeContent">
        {contentFile.Projects.map((item, index) => (
          <div key={index} className="homeArticleWrapper">
            <Article content={item} collapsable={true} />
          </div>
        ))}
      </div>
    </div>
  );
}

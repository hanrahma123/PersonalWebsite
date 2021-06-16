import React from "react";
import Article from "../../Components/Article";

export default function Home(props) {
  return (
    <div>
      <div className="homeHeaderContainer">
        <div className="homeTitle">
          <h1>Blog</h1>
        </div>
      </div>
      <div className="homeContent">
        <div className="homeArticleWrapper">
          <Article content={{ Title: "Check Back Soon" }} />
        </div>
      </div>
    </div>
  );
}

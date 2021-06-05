import React from "react";
import Article from "../../Components/Article";

export default function Home(props) {
  const articles = [
    {
      title: "Title1",
      subTitle: "Subtitle1",
      text: "Lorem Ipsum",
    },
    {
      title: "Title2",
      subTitle: "Subtitle2",
      text: "Lorem Ipsum",
    },
    {
      title: "Title3",
      subTitle: "Subtitle3",
      text: "Lorem Ipsum",
    },
    {
      title: "Title4",
      subTitle: "Subtitle4",
      text: "Lorem Ipsum",
    },
  ];

  return (
    <div>
      <div className="homeTitle">
        <h1>Projects</h1>
      </div>
      <div className="homeContent">
        {articles.map((item) => (
          <div className="homeArticleWrapper">
            <Article key={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

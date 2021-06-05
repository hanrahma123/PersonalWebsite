import React, { useState, useEffect } from "react";
import "./style.css";

export default function Article(props) {
  /*
    props: Title, Sub-title (optional), text, images
  */
  const [title, setTitle] = useState("Title");
  const [subtitle, setSubtitle] = useState("subtitle");
  const [body, setBody] = useState("body");

  useEffect(() => {
    if (props.content) {
      setTitle(props.content.Title);
      setSubtitle(props.content.Subtitle);
      setBody(props.content.Body);
    }
  }, [props.content]);

  return (
    <div className="article">
      <h1 className="title">{title}</h1>
      <h4 className="subTitle">{subtitle}</h4>
      <p className="content">{body}</p>
    </div>
  );
}

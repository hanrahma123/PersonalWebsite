import React, { useState, useEffect } from "react";
import "./style.css";
// import {title} from "../../Text/default.js"

export default function Article(props) {
  /*
    props: Title, Sub-title (optional), text, images
  */
  const [title, setTitle] = useState("Title");
  const [subtitle, setSubtitle] = useState("subtitle");
  const [body, setBody] = useState("body");

  useEffect(() => {
    if (props.content) {
      setTitle(props.content.title);
      setSubtitle(props.content.subtitle);
      setBody(props.content.body);
    }
  }, [props.content]);

  // let filePath = '../../Text/';
  // console.log(filePath + "default.js")
  // if(props.file){
  //   console.log("given filename");

  // }
  // else{
  //   import(filePath + "default.js").then( (file)=>{
  //     pullValues(file.title, file.subtitle, file.body)
  //   });
  // }

  return (
    <div className="article">
      <h1 className="title">{title}</h1>
      <h3 className="subTitle">{subtitle}</h3>
      <p className="content">{body}</p>
    </div>
  );
}

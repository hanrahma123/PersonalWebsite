import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./style.css";

import { ReactComponent as Chevron } from "../../Icons/chevron.svg";

export default function Article(props) {
  /*
    props: Title, Sub-title (optional), text, images
  */
  const [title, setTitle] = useState("Title");
  const [subtitle, setSubtitle] = useState("subtitle");
  const [body, setBody] = useState("body");
  const [collapsed, setCollapsed] = useState(false);
  const [articleHeight, setArticleHeight] = useState(50);

  const articleRef = useRef(0);

  useEffect(() => {
    if (props.content) {
      setTitle(props.content.Title);
      setSubtitle(props.content.Subtitle);
      setBody(props.content.Body);
    }
  }, [props.content]);

  //single use effect to initially calculate height for transition
  useEffect(() => {
    calcHeight(articleRef.current);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setArticleHeight(height);
    console.log(height);
  }

  return (
    <div>
      {props.collapsable ? (
        <div
          className="article"
          style={{ height: articleHeight }}
          ref={articleRef}
        >
          <CSSTransition
            in={collapsed === false}
            onEnter={calcHeight}
            mountOnEnter
            onExit={calcHeight}
            timeout={500}
          >
            <div className="dropdown">
              <div
                className="flexBox1"
                onClick={() => setCollapsed(!collapsed)}
              >
                <h1 className="title">{title}</h1>
                <div className="contentButtonContainer">
                  <div className="contentButton">
                    <Chevron
                      className={
                        collapsed ? "contentButtonUp" : "contentButtonDown"
                      }
                      src={Chevron}
                    ></Chevron>
                  </div>
                </div>
              </div>

              {/* Drop down */}
              {collapsed && (
                <div>
                  <h4 className="subTitle">{subtitle}</h4>
                  <p className="content">{body}</p>
                </div>
              )}
            </div>
          </CSSTransition>
        </div>
      ) : (
        <div className="article">
          <div className="flexBox1">
            <h1 className="title">{title}</h1>
          </div>
          <h4 className="subTitle">{subtitle}</h4>
          <p className="content">{body}</p>
        </div>
      )}
    </div>
  );
}

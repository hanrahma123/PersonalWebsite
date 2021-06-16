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
  const [articleHeight, setArticleHeight] = useState(null);

  const articleRef = useRef(0);

  useEffect(() => {
    if (props.content) {
      setTitle(props.content.Title);
      setSubtitle(props.content.Subtitle);
      setBody(props.content.Body);
    }
  }, [props.content]);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setArticleHeight(height);
  }

  return (
    <div>
      {props.collapsable ? (
        <div
          className="article"
          style={{ height: articleHeight, transition: "500ms" }}
          ref={articleRef}
        >
          <CSSTransition
            in={!collapsed}
            onEnter={calcHeight}
            onEntered={calcHeight}
            onExit={calcHeight}
            timeout={1000}
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
                  <div className="linkBox">
                    <a href={props.content.Link}>{props.content.Link}</a>
                  </div>
                </div>
              )}
            </div>
          </CSSTransition>
        </div>
      ) : (
        <div className="article" ref={articleRef}>
          <div className="flexBox1">
            {title && <h1 className="title">{title}</h1>}
          </div>
          {subtitle && <h4 className="subTitle">{subtitle}</h4>}
          {body && <p className="content">{body}</p>}
        </div>
      )}
    </div>
  );
}

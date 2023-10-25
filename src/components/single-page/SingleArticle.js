import React from "react";
import whiteLayer from "../../images/white-layer.png";
import styleDisable from "../../styles/modules/disable.module.scss";
import "../../styles/single-page/singleArticle.scss";

function Cover({ imageUrl, title, date }) {
  return (
    <div
      className="single-article-cover"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <img
        className={`white-layer ${styleDisable.disableDrag} ${styleDisable.disableSelect}`}
        src={whiteLayer}
      />
      <div>
        <p>{date}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

function Content({ content }) {
  const articleContent = () => {
    return content.map((element, index) => {
      if (typeof element.type == undefined) return "";

      switch (element.type) {
        case "text":
          return <p key={index}>{element.content}</p>;
        case "image":
          return <img key={index} src={element.url} />;
        case "subtitle":
          return <h3 key={index}>{element.content}</h3>;
        case "source":
          return (
            <div key={index} className="source-container">
              Source from:
              <a href={element.url} target="_blank" rel="noreferrer">
                {element.content}
              </a>
            </div>
          );
        default:
          return "";
      }
    });
  };
  return <div className="single-article-content">{articleContent()}</div>;
}

function AuthorInfo({ author }) {
  return (
    <div className="single-article-author">
      <h2>About {author.name}</h2>
      <div>
        <img src={author.imageUrl} />
        <p>{author.about}</p>
      </div>
    </div>
  );
}

export { Cover, Content, AuthorInfo };

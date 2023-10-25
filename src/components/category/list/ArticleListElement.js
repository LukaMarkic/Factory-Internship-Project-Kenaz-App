import React from "react";
import calendarIcon from "../../../images/calendar-icon.png";
import authorIcon from "../../../images/author-icon.png";
import commentIcon from "../../../images/comment-icon.svg";
import { getElementsWithKeyValue } from "../../../help/arrayHelp";
import useCategoryContext from "../../../hooks/useCategoryContext";

function ArticleListElement({ article, author }) {
  const { openArticle } = useCategoryContext();
  const getFirstArticelContent = () => {
    const textContents = getElementsWithKeyValue(
      article.content,
      "type",
      "text"
    );
    if (textContents.length !== 0) return textContents[0].content;
  };

  return (
    <div className="article-list-elememnt">
      <h3>{article.title}</h3>
      <div className="info-banner">
        <div>
          <img src={calendarIcon} alt="calendar-icon" />
          <p>{article.date}</p>
        </div>
        <div>
          <img src={authorIcon} alt="author-icon" />
          <p>Author: {author.name}</p>
        </div>
        <div>
          <img
            src={commentIcon}
            alt="comment-icon"
            style={{ filter: "invert(35%)" }}
          />
          <p>{`${article.numberOfComments} ${
            article.numberOfComments !== 1 ? "Comments" : "Comment"
          }`}</p>
        </div>
      </div>
      <div className="content-banner">
        <img src={article.imageUrl} />
        <p>{getFirstArticelContent()}</p>
      </div>
      <button onClick={() => openArticle(article)}>Read article</button>
      <div className="share-box"></div>
    </div>
  );
}

export default ArticleListElement;

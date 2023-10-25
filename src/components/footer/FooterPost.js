import React from "react";
import commentIcon from "../../images/comment-icon.svg";
import "../../styles/post.scss";
import "../../styles/footer/footerPost.scss";
import useCategoryContext from "../../hooks/useCategoryContext";

function FooterPost({ post }) {
  const { openArticle } = useCategoryContext();
  return (
    <div className="post footer-post" onClick={() => openArticle(post)}>
      <div className="post-info">
        <p>{post.date}</p>
        <h3>{post.title}</h3>
      </div>
      <img src={post.imageUrl} />
      <div className="comment-status-container">
        <img src={commentIcon} />
        <p>{post.numberOfComments}</p>
      </div>
    </div>
  );
}

function FooterPostContainer({ title, postsData }) {
  return (
    <div className="footer-posts-container">
      <h2>{title}</h2>
      {postsData.map((postData, index) => (
        <FooterPost key={index} post={postData} />
      ))}
    </div>
  );
}

export { FooterPostContainer, FooterPost };

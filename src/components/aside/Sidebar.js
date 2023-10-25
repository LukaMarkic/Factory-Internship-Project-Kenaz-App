import React, { useEffect, useState } from "react";
import "../../styles/shared-components/sidebar.scss";
import {getPopularPosts, getPostsWithMostComments, getTopRatedPost} from "../../help/postDataHelp";
import useCategoryContext from "../../hooks/useCategoryContext";
import commentIcon from "../../images/comment-icon.svg";
import "../../styles/post.scss";

function Sidebar() {
  const [postsData, setPostsData] = useState(null);
  const { categoryActiveIndex, categories } = useCategoryContext();
  const [posts, setPosts] = useState([]);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);

  const postGroup = [
    {
      name: "Popular",
      function: getPopularPosts,
    },
    {
      name: "Top Rated",
      function: getTopRatedPost,
    },
    {
      name: "Comments",
      function: getPostsWithMostComments,
    },
  ];

  useEffect(() => {
    categoryActiveIndex !== null
      ? setPostsData(
          require("../../" + categories[categoryActiveIndex].filePath)
        )
      : setPostsData(require("../../" + categories[0].filePath));
  }, [categoryActiveIndex]);

  useEffect(() => {
    postsData !== null && setPosts(postGroup[0].function(postsData, 5));
  }, [postsData]);

  return (
    <div className="sidebar">
      <div className="sidebar-top-menu">
        {postGroup.map((group, index) => (
          <button
            key={index}
            className={index === selectedGroupIndex ? "active" : ""}
            onClick={() => {
              setSelectedGroupIndex(index);
              setPosts(group.function(postsData, 5));
            }}
          >
            {group.name}
          </button>
        ))}
      </div>
      <div className="sidebar-posts">
        {postsData !== null
          ? posts.map((post, index) => <SidebarPost key={index} post={post} />)
          : ""}
      </div>
    </div>
  );
}

function SidebarPost({ post }) {
  const { openArticle } = useCategoryContext();
  return (
    <div className="post sidebar-post" onClick={() => openArticle(post)}>
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

export { Sidebar, SidebarPost };

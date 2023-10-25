import React, { useEffect, useRef, useState } from "react";
import "../../styles/footer/footer.scss";
import tagsData from "../../data/widgetTags";
import { WidgetTagContiner } from "./WidgetTag";
import { FooterPostContainer } from "./FooterPost";
import useCategoryContext from "../../hooks/useCategoryContext";
import { TwitterFeed } from "./TwitterFeed";
import { getFeturedPosts } from "../../help/postDataHelp";
import { getRandomElementsFromArray } from "../../help/arrayHelp";
import Newsletter from "./Newsletter";
import InfoFooter from "./InfoFooter";

function Footer() {
  const { categoryActiveIndex, categories } = useCategoryContext();
  const [postsData, setPostsData] = useState(null);
  const [randomPosts, setRandomPosts] = useState(null);
  const [featuredPosts, setFeturedPosts] = useState(null);

  useEffect(() => {
    categoryActiveIndex !== null
      ? setPostsData(
          require("../../" + categories[categoryActiveIndex].filePath)
        )
      : setPostsData(require("../../" + categories[0].filePath));
  }, [categoryActiveIndex]);

  useEffect(() => {
    if (postsData !== null) {
      setRandomPosts(getRandomElementsFromArray(postsData, 3));
      setFeturedPosts(getFeturedPosts(postsData, 3));
    }
  }, [postsData]);

  return (
    <div className="footer-container">
      <div className="footer-top-content">
        <div>
          <InfoFooter />
          <Newsletter />
          <WidgetTagContiner tags={tagsData} />
        </div>
        <div>
          <FooterPostContainer
            title="Featured"
            postsData={featuredPosts ? featuredPosts : []}
          />
          <FooterPostContainer
            title="Random Posts"
            postsData={randomPosts ? randomPosts : []}
          />
          <TwitterFeed />
        </div>
      </div>
      <hr />
      <div className="footer-bottom-content">
        <p>© 2013 - Kenaz Template - Proudly made at Plava tvornica Croatia</p>
        <p>Typography - Templates - Contact Form - 404 Page</p>
      </div>
    </div>
  );
}

export default Footer;

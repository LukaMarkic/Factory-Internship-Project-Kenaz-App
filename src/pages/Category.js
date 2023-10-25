import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/page.scss";
import useCategoryContext from "../hooks/useCategoryContext";
import Banner from "../components/shared/Banner";
import { CoverArticleCarousel } from "../components/cover-article/CoverArticle";
import ContentWrapper from "../components/shared/ContentWrapper";
import { getElementsWithKeyValue } from "../help/arrayHelp";
import CategoryArticlesList from "../components/category/list/CategoryArticlesList";

function Category() {
  const location = useLocation();
  const { index } = location.state;
  const { setCategoryActiveIndex, categories } = useCategoryContext();
  const [articlesData, setArticleData] = useState(null);
  const [coverArticles, setCoverArticles] = useState([]);

  useEffect(() => {
    setCategoryActiveIndex(index);
  }, []);

  useEffect(() => {
    setArticleData(require("../" + categories[index].filePath));
  }, [index]);

  useEffect(() => {
    articlesData !== null &&
      setCoverArticles(getElementsWithKeyValue(articlesData, "featured", true));
  }, [articlesData]);

  return (
    <div className="page-container">
      <Banner height="120px" margin={"16px 0px 18px"}></Banner>
      {articlesData !== null && coverArticles.length !== 0 ? (
        <CoverArticleCarousel
          articlesData={coverArticles}
          key={categories[index].id}
        />
      ) : (
        ""
      )}
      <ContentWrapper>
        {articlesData !== null ? (
          <CategoryArticlesList
            categoryName={categories[index].name}
            articles={articlesData}
          />
        ) : (
          ""
        )}
        <Banner height="120px" margin={"0px 0px 18px"}></Banner>
      </ContentWrapper>
    </div>
  );
}

export default Category;

import React, { useEffect, useRef, useState } from "react";
import authorsData from "../../../data/authorData.json";
import ArticleListElement from "./ArticleListElement";
import { getElementsWithKeyValue } from "../../../help/arrayHelp";
import "../../../styles/category/categoryArticleList.scss";

function CategoryArticlesList({
  categoryName,
  articles,
  numberOfArticlesPerPage = 6,
}) {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const [currentPageArticles, setCurrentPageArticles] = useState(null);
  const categoryArticlesListRef = useRef(null);
  const [offset, setOffset] = useState(0);

  const getAuthorById = (authorId) => {
    return getElementsWithKeyValue(authorsData, "id", authorId)[0];
  };

  const getNumberOfListedPages = () => {
    if (articles.length === 0) return 0;
    return parseInt((articles.length - 1) / numberOfArticlesPerPage) + 1;
  };

  const changeListedPage = (index) => {
    if (
      getNumberOfListedPages() > 11 &&
      index % 10 === 0 &&
      index > 0 &&
      index + 1 - offset >= 10
    )
      setOffset((prev) => prev + 10);
    if (
      getNumberOfListedPages() > 11 &&
      (index + 1) % 10 === 0 &&
      index - offset < 0
    )
      setOffset((prev) => prev - 10);
    const startIndex = index * numberOfArticlesPerPage;
    const endIndex = (index + 1) * numberOfArticlesPerPage;
    setActivePageIndex(index);
    setCurrentPageArticles(articles.slice(startIndex, endIndex));
    categoryArticlesListRef !== null &&
      window.scrollTo(0, categoryArticlesListRef.current.offsetTop);
  };

  const goToLastPage = () => {
    changeListedPage(getNumberOfListedPages() - 1);
    setOffset(getNumberOfListedPages() - (getNumberOfListedPages() % 10));
  };

  const goToFirstPage = () => {
    changeListedPage(0);
    setOffset(0);
  };

  const pagenationComponent = () => {
    const length = getNumberOfListedPages();
    let tempLength;
    if (length <= 11) {
      return Array.from({ length: length }, (_, index) => (
        <button
          className={activePageIndex === index ? "active" : ""}
          key={index}
          onClick={() => changeListedPage(index)}
        >
          {index + 1}
        </button>
      ));
    } else {
      tempLength = (length - offset) / 11 > 1 ? 11 : length % 10;
      return (
        <>
          {offset > 0 ? (
            <>
              <button onClick={() => goToFirstPage()}>{1}</button>
              ...
              <button
                className={activePageIndex === offset - 1 ? "active" : ""}
                onClick={() => changeListedPage(offset - 1)}
              >
                {offset}
              </button>
            </>
          ) : (
            ""
          )}
          {Array.from({ length: tempLength }, (_, index) => (
            <button
              className={activePageIndex === offset + index ? "active" : ""}
              key={offset + index}
              onClick={() => changeListedPage(offset + index)}
            >
              {offset + index + 1}
            </button>
          ))}
          {tempLength === 11 ? (
            <>
              ...
              <button onClick={goToLastPage}>{length}</button>
            </>
          ) : (
            ""
          )}
        </>
      );
    }
  };

  useEffect(() => {
    goToFirstPage();
    window.scrollTo(0, 0);
  }, [articles]);

  return (
    <div className="category-articles-list" ref={categoryArticlesListRef}>
      <h2>{categoryName}</h2>
      <div>
        <div className="listed-articles-continer">
          {currentPageArticles !== null
            ? currentPageArticles.map((article, index) => (
                <ArticleListElement
                  key={index}
                  article={article}
                  author={getAuthorById(article.authorId)}
                />
              ))
            : ""}
        </div>
        <div className="select-listed-page-continer">
          {pagenationComponent()}
        </div>
      </div>
    </div>
  );
}

export default CategoryArticlesList;

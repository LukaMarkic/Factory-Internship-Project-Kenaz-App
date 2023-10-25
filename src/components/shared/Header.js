import React from "react";
import "../../styles/shared-components/header.scss";
import kenazLogo from "../../images/logos/kenaz-logo.svg";
import searchIcon from "../../images/search-icon.svg";
import { Link } from "react-router-dom";
import useCategoryContext from "../../hooks/useCategoryContext";

function Header() {
  const {
    categoryActiveIndex,
    setCategoryActiveIndex,
    categories,
    resetCategoryIndex,
  } = useCategoryContext();

  return (
    <div className="header-container">
      <div>
        <div className="header-top-stripe">
          <div to="/" className="header-logo-container">
            <img
              src={kenazLogo}
              alt="kenaz-logo"
              onClick={resetCategoryIndex}
            />
            <h1 onClick={resetCategoryIndex}>Kenaz</h1>
          </div>
          <div>
            <nav>
              <a href="/">Media</a>
              <a href="/">Marketing</a>
              <a href="/">Contact</a>
            </nav>
            <img src={searchIcon} alt="search" />
          </div>
        </div>
      </div>
      <div>
        <nav>
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/Category"
              state={{ index: index }}
              style={{
                background: categoryActiveIndex === index && category.color,
              }}
              onClick={() => setCategoryActiveIndex(index)}
            >
              {category.name.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;

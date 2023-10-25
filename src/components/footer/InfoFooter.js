import React from "react";
import kenazBlueLogo from "../../images/logos/kenaz-blue-logo.svg";
import "../../styles/footer/infoFooter.scss";
import useCategoryContext from "../../hooks/useCategoryContext";

function InfoFooter() {
  const { resetCategoryIndex } = useCategoryContext();
  return (
    <div className="info-footer">
      <div to="/" className="footer-logo-container">
        <img
          src={kenazBlueLogo}
          alt="kenaz-blue-logo"
          onClick={resetCategoryIndex}
        />
        <h1 onClick={resetCategoryIndex}>Kenaz</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo
        ante.
      </p>
      <div className="footer-social-media-icons">
        <img
          src={require("../../images/social-icons/rss-icon.svg").default}
          alt="rss-icon"
        />
        <img
          src={require("../../images/social-icons/facebook-icon.svg").default}
          alt="facebook-icon"
        />
        <img
          src={require("../../images/social-icons/twitter-icon.svg").default}
          alt="twitter-icon"
        />
        <img
          src={require("../../images/social-icons/dribble-icon.svg").default}
          alt="dribble-icon"
        />
        <img
          src={require("../../images/social-icons/linkedin-logo.png")}
          alt="linkedin-icon"
        />
        <img
          src={require("../../images/social-icons/youtube-icon.svg").default}
          alt="youtube-icon"
        />
        <img
          src={require("../../images/social-icons/skype-icon.svg").default}
          alt="skype-icon"
        />
      </div>
    </div>
  );
}

export default InfoFooter;

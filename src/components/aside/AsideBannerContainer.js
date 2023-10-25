import React from "react";
import Banner from "../shared/Banner";

function AsideBannerContainer({ margin }) {
  const style = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#DDD",
    margin,
  };
  return (
    <div style={style}>
      <Banner width="125px" height="125px"></Banner>
      <Banner width="125px" height="125px"></Banner>
    </div>
  );
}

export default AsideBannerContainer;

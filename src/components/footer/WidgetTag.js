import React, { useState } from "react";
import "../../styles/footer/widgetTag.scss";
import styleDisable from "../../styles/modules/disable.module.scss";

function WidgetTag({ name }) {
  const [tagSelected, setTagSelected] = useState(false);
  const handleClick = () => {
    setTagSelected((prev) => !prev);
  };
  return (
    <div
      className={`${styleDisable.disableSelect} widget-tag-container ${
        tagSelected ? "selected" : ""
      }`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

function WidgetTagContiner({ tags = [] }) {
  return (
    <div className="widget-tag-contianer">
      <h1>Tags Widget</h1>
      <div>
        {tags.map((tag, index) => (
          <WidgetTag key={index} name={tag.name} />
        ))}
      </div>
    </div>
  );
}

export { WidgetTagContiner, WidgetTag };

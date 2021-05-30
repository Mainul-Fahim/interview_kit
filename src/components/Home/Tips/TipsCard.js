import React from "react";
import './tips.css';
const TipsCard = ({ data }) => {
  return (
    <div className="tipsCard">
      <div className="tipsCardContent">
        <span className="tag" style={{ background: data.category.color }}>
          {data.category.tag}
        </span>
        <time>{data.title}</time>
        <p>{data.text}</p>
        <a href={data.link.url} target="_blank" rel="noreferrer">
          {data.link.text}
        </a>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TipsCard;

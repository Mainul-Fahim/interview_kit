import React from "react";
import tipsData from "../../../fakeData/tipsData";
import TipsCard from "./TipsCard";

const Tips = () => {
  return (
    <div className="container-fluid my-5" id="tips">
      <h2 className="section_title text-center">
        Tips and Tricks
      </h2>
      <div className="tipsContainer">
        {tipsData.map((data) => (
          <TipsCard data={data} key={data.id} />
        ))}
      </div>
    </div>
  );
};

export default Tips;

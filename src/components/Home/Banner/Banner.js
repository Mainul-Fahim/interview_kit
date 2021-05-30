import React from "react";
import interview from "../../../Images/Interview.gif";
import "./banner.css";
const Banner = () => {
  return (
    <main id="banner">
      <div className="container-fluid hero">
        <div className="row">
          <div className="col-md-6 hero-content">
            <h1 style={{ color: "#232323", fontSize: "50px" }}>
              {" "}
              <b>
                Join the world's <br /> biggest Interview <br />
                related Q&A network!{" "}
              </b>
            </h1>
            <p className="text-secondary">
              We are providing interview related questions and answer for make
              your life easier. The goal of an interview is to determine whether the candidate will be outstanding in the job, and that means evaluating the skills and attitude required for that job. Does she need to be an empathetic leader? Ask about that. Does she need to take your company public? Ask about that.
            </p>
            <button
              style={{ height: "60px", width: "200px" }}
              className="btn btn-success rounded-pill"
            >
              <b>Explore Questions</b>
            </button>
          </div>
          <div className="col-md-6">
            <div className="hero-Image">
              <img src={interview} alt="hero_image" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Banner;

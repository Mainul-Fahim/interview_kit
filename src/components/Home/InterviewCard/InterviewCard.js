import React from "react";
import InterviewDetail from "../InterviewDetail/InterviewDetail";
import Html from "../../../Images/html.png";
import javascript from "../../../Images/javascript.jpg";
import "../Home/Home.css";
import react from "../../../Images/react4.jpg";

const interviewData = [
  {
    id: 1,
    name: "HTML/CSS Interview Questions",
    image: Html,
    link: "https://medium.com/@akhtar016/top-html-css-interview-questions-with-answers-318e08e635d8",
  },
  {
    id: 2,

    name: "Javascript Interview Questions",
    image: javascript,
    link: "https://github.com/sudheerj/javascript-interview-questions",
  },
  {
    id: 3,

    name: "React Interview Questions",
    image:
      "https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png",
    link: "https://github.com/sudheerj/reactjs-interview-questions8",
  },
  {
    id: 4,

    name: "React Native Interview Questions",
    image:
      "https://blog.crowdbotics.com/content/images/2020/09/React-Native-Featured-Image-1.png",
    link: "https://www.interviewbit.com/react-native-interview-questions/",
  },
  {
    id: 5,

    name: "Data Structures and Algorithms",
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ARYuNQWH--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/w4qxi1gsnhuey77654qj.png",
    link: "https://hackernoon.com/50-data-structure-and-algorithms-interview-questions-for-programmers-b4b1ac61f5b0",
  },
  {
    id: 6,

    name: "English Preparation",
    image: "https://www.cambridge.org/us/files/1714/1759/6287/prepare-1_03.jpg",
    link: "https://www.cambridgeenglish.org/learning-english/exam-preparation/",
  },
];

const InterviewCard = () => {
  return (
    <section id="questions">
      <div className="text-center mt-4">
        {/* <h5>Our Services</h5> */}
        <h2 className="section_title">Interview Questions</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row mt-3 pt-5">
          {interviewData.map((detail) => (
            <InterviewDetail detail={detail} key={detail.id}></InterviewDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterviewCard;

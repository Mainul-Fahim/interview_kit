import React from "react";
// import OurTeam from '../OurTeam/OurTeam';
import OurTeams from "../OurTeam/OurTeams";
import Tips from "../Tips/Tips";
import "../Tips/tips.css";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import InterviewCard from "../InterviewCard/InterviewCard";
import Video from "../Video/Video";
import Footer from "../Footer/Footer";


const Home = () => {
 
  return (
    <>
     <Header />
      <Banner />
      <InterviewCard />
      <Video />
      <Tips />
      <OurTeams />
      <Footer/>
    </>
  );
};

export default Home;

import React from "react";
 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./team.css";
import Tilt from "react-parallax-tilt";
 

const OurTeam = ({ data }) => {
  return (
    <Tilt scale={0.9} transitionSpeed={3500}>
   <div className="team">
     
      <div className="img">
        <img src={data.img} alt="profile_image" className="profile" />
      </div>

      <h3 className="title">{data.name}</h3>
      <h4 className="post">
        {" "}
        <span className="position">{data.post}</span> Interview_Kit
      </h4>
      <p className="description">{data.description}</p>
      <div className="contact_link">
        <a href={data.url.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="linkedin_icon" />
        </a>
        <a href={data.url.github} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} className="git_icon" />
        </a>
        <a href={data.url.website} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGlobe} className="web_icon" />
        </a>
      </div>
    
   </div>
   </Tilt>
  );
};

export default OurTeam;

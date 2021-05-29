 
import React from "react";
import OurTeam from "./OurTeam";
import "./team.css";

const OurTeams = () => {
  const teams = [
    {
      id: 1,
      name: "Mainul Fahim",
      img: "https://i.ibb.co/M9cJctX/mainul-vai.jpg",
      post: "CEO,",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, animi.`,
      url: {
        linkedin: "https://www.linkedin.com/in/mainul-islam-fahim-985bb11ba/",
        github: "https://github.com/Mainul-Fahim",
        website: "https://mainul-portfolio.web.app/",
      },
      interval: 2000,
    },
    {
      id: 2,
      name: "Mahe Sajib",
      post: "Manager,",
      img: "https://i.ibb.co/XzKFHCw/mahe-alam-vai.jpg",
      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, animi.`,
      url: {
        linkedin: "https://www.linkedin.com/in/mahe-alam-/",
        github: "https://github.com/MaheSajib",
        website: "https://mahe-alam.web.app/",
      },
      interval: 6000,
    },
    {
      id: 3,
      name: "Md Moniruzzaman Sojol",
      img: "https://i.ibb.co/JKKKsgQ/1619810675986.jpg",
      post: "Developer,",

      description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, saepe? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, animi.`,
      url: {
        linkedin: "https://www.linkedin.com/in/moniruzzaman-eee/",
        github: "https://github.com/sojol4242",
        website: "https://md-moniruzzaman.netlify.app/",
      },
      interval: 4000,
    },
  ];
  console.log(teams);
  return (
    <div className="my-5 w-100" id="teams">
      <h2 className="text-center section_title">Our Teams</h2>
      <div className="teams">
        {teams.map((team) => (
          <OurTeam data={team} key={team.id} />
        ))}
      </div>
    </div>
  );
};

export default OurTeams;

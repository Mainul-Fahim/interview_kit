import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import InterviewCard from '../InterviewCard/InterviewCard';

const Home = () => {
    return (
        <div>
            <InterviewCard></InterviewCard>
        </div>
=======
// import OurTeam from '../OurTeam/OurTeam';
import OurTeams from '../OurTeam/OurTeams';
=======
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InterviewCard from '../InterviewCard/InterviewCard';
import Video from '../Video/Video';
>>>>>>> ffb8146d539e08325eb00bc769e7d7af32bc451d
import Tips from '../Tips/Tips';
import OurTeams from '../OurTeam/OurTeams';

const Home = () => {
    return (
<<<<<<< HEAD
        <>
           <Tips/>
           <OurTeams/>
        </>
>>>>>>> 3c108e49b19f1899ebf58522535c1984ffb26ed0
=======
        <div>
            <Header></Header>
            <Banner></Banner>
            <Video></Video>
            <InterviewCard></InterviewCard>
            <Tips></Tips>
            <OurTeams></OurTeams>
        </div>
>>>>>>> ffb8146d539e08325eb00bc769e7d7af32bc451d
    );
};

export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InterviewCard from '../InterviewCard/InterviewCard';
import Video from '../Video/Video';
import Tips from '../Tips/Tips';
import OurTeams from '../OurTeam/OurTeams';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Video></Video>
            <InterviewCard></InterviewCard>
            <Tips></Tips>
            <OurTeams></OurTeams>
        </div>
    );
};

export default Home;
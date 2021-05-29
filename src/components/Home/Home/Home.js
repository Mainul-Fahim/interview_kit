import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InterviewCard from '../InterviewCard/InterviewCard';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Video></Video>
            <InterviewCard></InterviewCard>
        </div>
    );
};

export default Home;
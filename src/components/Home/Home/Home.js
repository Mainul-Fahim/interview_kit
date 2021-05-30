import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Tips from '../Tips/Tips';
import InterviewCard from '../InterviewCard/InterviewCard';
import Video from '../Video/Video';
import HtmlCard from '../HtmlCard/HtmlCard';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <InterviewCard></InterviewCard>
            <Video></Video>
            <Tips></Tips>
            <HtmlCard></HtmlCard>
        </div>
    );
};

export default Home;
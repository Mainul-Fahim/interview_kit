import React from 'react';
import InterviewCard from '../InterviewCard/InterviewCard';
import OurTeams from '../OurTeam/OurTeams';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import InterviewCard from '../InterviewCard/InterviewCard';
import Video from '../Video/Video';

import Tips from '../Tips/Tips';

import HtmlCard from '../HtmlCard/HtmlCard';

import OurTeams from '../OurTeam/OurTeams';
import Tips from '../Tips/Tips';
import '../Tips/tips.css'
import JavaScriptCard from '../JavaScriptCard/JavaScriptCard';
import ReactCard from '../ReactCard/ReactCard';



const Home = () => {
    return (

        <div>
            <Header></Header>
            <Banner></Banner>
            <InterviewCard></InterviewCard>
            <Video></Video>
            <Tips/>
            <OurTeams/>
            <HtmlCard></HtmlCard>
            <JavaScriptCard></JavaScriptCard>
            <ReactCard></ReactCard>
        </div>


    );
    }
export default Home;
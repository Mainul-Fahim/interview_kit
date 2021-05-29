import React from 'react';
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
import Tips from '../Tips/Tips';
import '../Tips/tips.css'

const Home = () => {
    return (
        <>
           <Tips/>
           <OurTeams/>
        </>
>>>>>>> 3c108e49b19f1899ebf58522535c1984ffb26ed0
    );
};

export default Home;
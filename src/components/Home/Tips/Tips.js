import React from 'react';
import tipsData from '../../../fakeData/tipsData';
import TipsCard from './TipsCard';
import  './tips.css';

const Tips = () => {
    return (
        <>
        <h3 className="tipsTitle">You are new to Development? Here some Tips for you</h3>
       <div className="tipsContainer">
        
         {tipsData.map((data) => (
           <TipsCard data={data} key={data.id} />
         ))}
       </div>
       </>
    );
};

export default Tips;
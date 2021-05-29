import React from 'react';
import InterviewDetail from '../InterviewDetail/InterviewDetail';
import Html from '../../../images/html.png';
import javascript from '../../../images/javascript.jpg';
import react from '../../../images/react4.jpg';

const interviewData = [
    {
        name: 'HTML/CSS Interview Questions',
        image: Html
    },
    {
        name: 'Javascript Interview Questions',
        image: javascript
    },
    {
        name: 'React Interview Questions',
        image: react
    }
]

const InterviewCard = () => {
    return (
        <section>
            <div className="text-center mt-5">
                {/* <h5>Our Services</h5> */}
                <h2>Interview Questions</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        interviewData.map(detail => <InterviewDetail detail={detail}></InterviewDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default InterviewCard;
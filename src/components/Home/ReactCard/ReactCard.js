import React from 'react';
import React1 from '../../../Images/reactques1.jpg';
import React2 from '../../../Images/ReactQues2.jpg';
import React3 from '../../../Images/react3.jpg';
import React4 from '../../../Images/React4.png';
import React5 from '../../../Images/react5.png';
import ReactDetail from '../ReactDetail/ReactDetail';

const ReactCardData = [
    {
        name: '21 Essential React.js Interview Questions',
        image: React1,
        link: 'https://www.toptal.com/react/interview-questions'
    },
    {
        name: '35+ Basic & Advanced ReactJS Interview Questions',
        image: React2,
        link: 'https://tms-outsource.com/blog/posts/react-interview-questions/'
    },
    {
        name: 'Top 50 React Interview Questions',
        image: React3,
        link: 'https://www.edureka.co/blog/interview-questions/react-interview-questions/'
    },
    {
        name: 'React Interview Questions & Answers By Sudheerj',
        image: React4,
        link: 'https://github.com/sudheerj/reactjs-interview-questions'
    },
    {
        name: 'Frequently asked: React JS Interview Questions and Answers',
        image: React5,
        link: 'https://vigowebs.medium.com/frequently-asked-react-js-interview-questions-and-answers-36f3dd99f486'
    }
]

const ReactCard = () => {
    return (
        <section id="ReactCard" className="container">
            <div className="row text-center mt-5">
                <h2>React Interview Questions</h2>
                <div className="d-flex flex-wrap mt-5 pt-5">
                    {
                        ReactCardData.map(detail => <ReactDetail detail={detail}></ReactDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ReactCard;
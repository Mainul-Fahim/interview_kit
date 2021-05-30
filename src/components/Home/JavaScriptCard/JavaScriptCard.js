import React from 'react';
import javaCode from '../../../Images/javaCode.png';
import gitJava from '../../../Images/gitJava.jpg';
import Java70 from '../../../Images/70Java.png';
import Java100 from '../../../Images/java100.png';
import JavaCardDetail from '../JavaCardDetail/JavaCardDetail';


const javaScriptCardData = [
    {
        name: 'JavaScript Coding Interview Question',
        image: javaCode,
        link: 'https://www.toptal.com/javascript/interview-questions'
    },
    {
        name: 'GitHub JavaScript Interview Questions',
        image: gitJava,
        link: 'https://github.com/sudheerj/javascript-interview-questions'
    },
    {
        name: 'Top 70 JavaScript Interview Questions',
        image: Java70,
        link: 'https://www.fullstack.cafe/blog/javascript-interview-questions-and-answers'
    },
    {
        name: 'Top 100 JavaScript Interview Questions',
        image: Java100,
        link: 'https://www.guru99.com/javascript-interview-questions-answers.html'
    }
]


const JavaScriptCard = () => {
    return (
        <section id="htmlCard" className="container">
            <div  className="row text-center mt-5">
                <h2>JavaScript Interview Questions</h2>
                <div className="d-flex flex-wrap mt-5 pt-5">
                    {
                        javaScriptCardData.map(detail => <JavaCardDetail detail={detail}></JavaCardDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default JavaScriptCard;
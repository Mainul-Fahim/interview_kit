import React from 'react';
import Html10 from '../../../Images/10Html.png'
import CSS from '../../../Images/css.jpg'
import CSS3 from '../../../Images/css3.png'
import HTML from '../../../Images/html.png'
import HTML5 from '../../../Images/html5.jpg'
import HtmlDetail from '../HtmlDetail/HtmlDetail';


const htmlCardData = [
    {
        name: '10 Important Html Interview Questions',
        image: Html10,
        link: 'https://www.careermatch.com/job-prep/interviews/top-10-html-interview-questions-and-answers/'
    },
    {
        name: 'CSS Interview Questions',
        image: CSS,
        link: 'https://www.interviewbit.com/css-interview-questions/'
    },
    {
        name: 'HTML Interview Questions',
        image: HTML,
        link: 'https://career.guru99.com/top-50-html-interview-questions/'
    },
    {
        name: 'HTML5 Interview Questions',
        image: HTML5,
        link: 'https://www.softwaretestinghelp.com/html5-interview-questions/'
    },
    {
        name: 'CSS3 Interview Questions',
        image: CSS3,
        link: 'https://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/'
    }
]

const HtmlCard = () => {
    return (
        <section id="htmlCard" className="container">
            <div  className="row text-center mt-5">
                <h2>HTML CSS Interview Questions</h2>
                <div className="d-flex flex-wrap mt-5 pt-5">
                    {
                        htmlCardData.map(detail => <HtmlDetail detail={detail}></HtmlDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HtmlCard;
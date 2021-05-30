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
        image: Html10
    },
    {
        name: 'CSS Interview Questions',
        image: CSS
    },
    {
        name: 'HTML Interview Questions',
        image: HTML
    },
    {
        name: 'HTML5 Interview Questions',
        image: HTML5
    },
    {
        name: 'CSS3 Interview Questions',
        image: CSS3
    }
]

const HtmlCard = () => {
    return (
        <section>
            <div className="text-center mt-5">
                <h2>HTML CSS Interview Questions</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        htmlCardData.map(detail => <HtmlDetail detail={detail}></HtmlDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HtmlCard;
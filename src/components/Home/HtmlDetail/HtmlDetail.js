import React from 'react';

const HtmlDetail = ({detail}) => {
    return (
        <div>
            <div className="col-md-4 text-center mb-3">
           <div class="card" styles="width: 18rem;">
            <img src={detail.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{detail.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Let's Go</a>
            </div>
        </div>
        </div>
        </div>
    );
};

export default HtmlDetail;
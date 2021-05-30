import React from 'react';

const ReactDetail = ({ detail }) => {
    return (
        <div class="card m-3" style={{width: "18rem"}}>
            <img src={detail.image} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{detail.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a target="_blank" href={detail.link} class="btn btn-primary">Learn More</a>
                </div>
        </div>
    );
};

export default ReactDetail;
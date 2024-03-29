import React from 'react';
import interview from '../../../Images/Interview.gif';

const Banner = () => {
    return (
        <main style={{height: '600px' , width: '100%'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#232323', fontSize: '50px'}}> <b>Join the world's <br/> biggest Interview <br/>related Q&A network! </b></h1>
                <p className="text-secondary">We are providing interview related questions and answer for make your life easier.</p>
                <button style={{ height: '60px', width: '200px' }}  className="btn btn-success rounded-pill"><b>Explore Questions</b></button>
            </div>
            <div className="col-md-6 ms-auto">
                <img src={interview} alt="" className="img-fluid w-75 "/>
            </div>
        </main>
    );
};

export default Banner;
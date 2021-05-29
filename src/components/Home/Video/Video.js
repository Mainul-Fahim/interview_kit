import React from 'react';
import jhankaar from '../../../Images/Jhankar.jpg'

const Video = () => {
    return (
        <div className="text-center container ">
            <h1 className="text-center"><b>VIDEO</b></h1>
            <main  className="row d-flex justify-content-center my-5">
                <div className="col-md-6 ">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/5KIWo4ZamAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 ml-auto">
                    <a target="_blank" href="https://www.linkedin.com/in/jhankar/"><img src={jhankaar} alt="" /></a>
                </div>
            </main>
        </div>
    );
};

export default Video;
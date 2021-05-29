import React from 'react';
import jhankaar from '../../../Images/Jhankar.jpg'

const Video = () => {
    return (
        <div>
            <h1 className="text-center"><b>VIDEO</b></h1>
            <main style={{ height: '600px', width: '100%' }} className="row d-flex align-items-center">
                <div className="col-md-6 ml-auto">
                    <iframe width="500" height="315" src="https://www.youtube.com/embed/5KIWo4ZamAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="col-md-6 ml-auto">
                    <a href="https://www.linkedin.com/in/jhankar/"><img src={jhankaar} alt="" /></a>
                </div>
            </main>
        </div>
    );
};

export default Video;
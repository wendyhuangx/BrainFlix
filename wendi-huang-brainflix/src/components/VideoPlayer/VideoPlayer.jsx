import React from 'react';
import './VideoPlayer.scss';

/*import "../../App.jsx";*/

function VideoPlayer({ video }) {
    
    return (
        <section className="video-player">
            <video className="video-player__video" controls poster={video.image}>
            <source src={video.video} type="video/mp4" />
            </video>
            
        </section>
    );
}

export default VideoPlayer;
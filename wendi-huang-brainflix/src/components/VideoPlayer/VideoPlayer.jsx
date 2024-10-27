import React from 'react';
import './VideoPlayer.scss';
/*import "../../App.jsx";*/

function VideoPlayer({ video }) {
    return (
        <section className="video-player">
            <video className="video-player__video" controls poster={video.poster}>
            <source src={video.video} type="video/mp4" />
            </video>
            <h1 className="video-player__title">{video.title}</h1>
            <p className="video-player__channel">By {video.channel}</p>
            <p className="video-player__details">{video.date} | {video.views} views | {video.likes} likes</p>
            <p className="video-player__description">{video.description}</p>
        </section>
    );
}

export default VideoPlayer;
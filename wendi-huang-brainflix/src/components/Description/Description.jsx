import React from 'react';
import './Description.scss';
import likeIcon from '../../assets/Icons/likes.svg';
import viewIcon from '../../assets/Icons/views.svg';


function Description({ video }) {
    let formattedDate= new Date(video.timestamp).toLocaleDateString();
    return (
        <section className="video-player">
            <div className='video-player__title-container'>
                <h1 className="video-player__title">{video.title}</h1>
                <hr className='video-player__divider'/>
            </div>
            <div className='video-player__details-container'>
                <div className='video-player__left-details'>
                    <p className="video-player__channel"><b>By {video.channel}</b></p>
                    <p className="video-player__details">{formattedDate}</p>
                </div>
                <div className='video-player__right-details'>
                    <p className="video-player__details"><img src={viewIcon} alt='views icon' className='video-player__viewIcon'/> {video.views} views</p>
                    <p className="video-player__details"><img src={likeIcon} alt='like icon' className='video-player__likeIcon'/> {video.likes} likes</p>
                </div>
            </div>
            <hr className='video-player__divider2'/>
            <p className="video-player__description">{video.description}</p>
        </section>
    );
}

export default Description;
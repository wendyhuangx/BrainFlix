// src/components/VideoList/VideoList.jsx
import React from 'react';
import './VideoList.scss';
import { Link } from 'react-router-dom';

function VideoList({ videos, onVideoSelect }) {
    return (
        <div className="video-list">
            <h3 className='video-list__heading'>NEXT VIDEOS</h3>
            {videos.map((video) => (
                <Link
                    key={video.id} to={`/videos/${video.id}`}
                    className="video-list__item"
                    onClick={() => onVideoSelect(video.id)}
                >
                    <img src={video.image} alt={video.title} className="video-list__thumbnail" />
                    <div className="video-list__info">
                        <h4 className="video-list__title">{video.title}</h4>
                        <p className="video-list__channel">{video.channel}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default VideoList;

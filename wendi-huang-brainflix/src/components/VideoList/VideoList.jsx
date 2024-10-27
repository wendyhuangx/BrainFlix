// src/components/VideoList/VideoList.jsx
import React from 'react';
import './VideoList.scss';

function VideoList({ videos, onVideoSelect }) {
    return (
        <div className="video-list">
            {videos.map((video) => (
                <div
                    key={video.id}
                    className="video-list__item"
                    onClick={() => onVideoSelect(video.id)}
                >
                    <img src={video.image} alt={video.title} className="video-list__thumbnail" />
                    <div className="video-list__info">
                        <h4 className="video-list__title">{video.title}</h4>
                        <p className="video-list__channel">{video.channel}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default VideoList;

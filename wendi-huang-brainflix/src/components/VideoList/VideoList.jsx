import React from 'react';
import './VideoList.scss';

function VideoList({ videos, currentVideoId, onVideoSelect }) {
  return (
    <aside className="video-list">
      <h2 className="video-list__title">Next Videos</h2>
      {videos
        .filter(video => video.id !== currentVideoId)
        .map(video => (
          <div key={video.id} className="video-list__item" onClick={() => onVideoSelect(video.id)}>
            <img src={video.thumbnail} alt={video.title} className="video-list__thumbnail" />
            <div className="video-list__info">
              <p className="video-list__name">{video.title}</p>
              <p className="video-list__channel">{video.channel}</p>
            </div>
          </div>
      ))}
    </aside>
  );
}

export default VideoList;
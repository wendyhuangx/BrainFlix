import { useState } from 'react';
import './App.scss';
import videoData from './assets/Data/video-details.json';
import Header from './components/Header/Header';
import VideoList from './components/VideoList/VideoList';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Comments from './components/Comments/Comments';

function App() { /* This line defines a function called App, which is the main component of the application. Components are like building blocks for your app.*/
  const [currentVideo, setCurrentVideo] = useState(videoData[0] || {});
  console.log("Current Video:", currentVideo); 

  const handleVideoSelect = (videoId) => {
    const selectedVideo = videoData.find(video => video.id ===  videoId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <div className='app'>
      <Header />
      <div className='app__main'>
        <VideoPlayer video={currentVideo} />
        <Comments comments={currentVideo.comments || []} />
        <VideoList  videos={videoData.filter(video => video.id !== currentVideo.id)}
                onVideoSelect={handleVideoSelect} />
      </div>

    </div>
  )
}

export default App;

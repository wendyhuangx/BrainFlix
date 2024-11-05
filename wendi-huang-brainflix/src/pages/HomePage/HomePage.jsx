import { useEffect, useState } from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import VideoList from '../../components/VideoList/VideoList';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import Comments from '../../components/Comments/Comments';
import Description from '../../components/Description/Description';
import { useParams, useNavigate } from 'react-router-dom';
import {fetchVideos, fetchVideosById} from '../../api.js';

function HomePage() { /* This line defines a function called App, which is the main component of the application. Components are like building blocks for your app.*/

  const {videoId}= useParams();
  const navigate = useNavigate();
  const [videos, setVideos] =useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos().then((response) => {
      setVideos(response.data);
      if(!videoId){
        setCurrentVideo(response.data[0]);
        navigate(`/videos/${response.data[0].id}`);
      }
    })
    .catch((error) => {
        console.error("Error fetching videos: ", error);
    });
  }, [videoId, navigate]);

  useEffect(() => {
    if(videoId) {
      fetchVideosById(videoId).then((response) => {
        setCurrentVideo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching video by ID: ", error);
        setLoading(false);
      });
    } else {
        setLoading(false);
    }
  }, [videoId]);


  const handleVideoSelect = (videoId) => {
    navigate (`/videos/${videoId}`);
  };

  if(loading || !currentVideo) {
    return <p>Loading video...</p>
  }

  return (
  
    <div className='app'>
      <Header />
      <div className='app__container'>
        <div className='app__video'>
          <VideoPlayer video={currentVideo} />
        </div>

        <div className='app__content-section'>
          <div className='app__video-description'>
            <Description video={currentVideo} />
            <Comments comments={currentVideo.comments || []} />
          </div>
          <hr></hr>
        
        <div className='app__main-right'>
          <VideoList  videos={videos.filter(video => video.id !== currentVideo.id)}
                onVideoSelect={handleVideoSelect} />
        </div>
        </div>
      </div>

    </div>
  )
}

export default HomePage;

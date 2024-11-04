import axios from 'axios';

const API_URL = 'https://unit-3-project-api-0a5620414506.herokuapp.com';
const API_KEY = '8184bf6b-3ab9-43ad-a8c3-01561db25a8a';

export const fetchVideos = () => {
    return axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
};

export const fetchVideosById = (videoId) => {
    return axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`);
}
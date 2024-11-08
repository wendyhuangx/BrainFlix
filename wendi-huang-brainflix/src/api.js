import axios from 'axios';

const API_URL = 'http://localhost:5000';
const API_KEY = '8184bf6b-3ab9-43ad-a8c3-01561db25a8a';

export const fetchVideos = () => {
    return axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
};

export const fetchVideosById = (videoId) => {
    return axios.get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`);
}
export const postVideos = (newVideo) => {
    return axios.post(`${API_URL}/videos`, newVideo);
}
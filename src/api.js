import axios from 'axios';

const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDHBVCx4nYZ6jDcLDgIH-WXzFkVAXFgEic',
    },
});

export default request;

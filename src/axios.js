import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:5000" //change to heroku app url when building
});

export default instance;
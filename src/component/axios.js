import axios from 'axios';
const instance = axios.create({
    baseURL: "http://3.104.104.28:3001"
});

export default instance();

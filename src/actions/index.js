import axios from 'axios';

/////////////// TWITTER ////////////////////////
export const FETCH_TWITTER = 'FETCH_TWITTER';
export const fetchTwitter = () => {
    const request = axios.get('/twitter');
    return {
        type: FETCH_TWITTER,
        payload: request
    };
}
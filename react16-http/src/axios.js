import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorisation'] = 'AUTH_TOKON_FROM_INST';

export default instance;

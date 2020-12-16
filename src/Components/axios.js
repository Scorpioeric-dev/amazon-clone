import axios from 'axios'


//firebase api generated from cloud functions

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-e2c91/us-central1/api' //The API  -Cloud function- URL
})

export default instance;
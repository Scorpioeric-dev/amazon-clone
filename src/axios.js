import axios from 'axios'


//firebase api generated from cloud functions

const instance = axios.create({
    //Requires the firebase database in order to process payment -- Get Blaze 
    baseURL: 'http://localhost:5001/clone-e2c91/us-central1/api' //The API  -Cloud function- URL
})

export default instance;
//for instance 

import axios from 'axios';

const instance = axios.create({

baseURL: "http://localhost/",




});

instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.interceptors.request.use(request=>{
   // console.log("RequestGlobal",request) 
    //Edit request Config
     return request;

}, error=>{
    console.log("Errro",error)
     return Promise.reject(error);

});

export default instance;
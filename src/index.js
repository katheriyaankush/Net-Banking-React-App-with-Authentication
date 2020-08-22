import React from 'react';
import {createStore, applyMiddleware , compose} from 'redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';
import reducer from './store/reducer/reducer';



//Axios.defaults.baseURL= "http://192.168.40.43:8786/enableDisable.php"; //for gobal url

//Axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; //headers
//Axios.defaults.headers.common['Access-Control-Allow-Origin']='http://localhost:3000/my-app/module/';
//Axios.defaults.headers.common['crossorigin']=true;
//Axios.defaults.headers.get['Access-Control-Allow-Methods']='GET';



Axios.interceptors.request.use(request=>{
    //console.log("RequestGlobal",request) 
    //Edit request Config
     return request;

}, error=>{
    console.log("Errro",error)
     return Promise.reject(error);

}); //this method use only for error regarding internet

Axios.interceptors.response.use(response=>{
  //  console.log("responseGlobal",response) 
    //Edit request Config
     return response;

}, error=>{
    console.log("Errro",error)
     return Promise.reject(error);

});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));


ReactDOM.render( <Provider store={store} ><   App /></Provider>, document.getElementById( 'root' ) );
registerServiceWorker();


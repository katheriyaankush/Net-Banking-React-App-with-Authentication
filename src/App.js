import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';


import Module from './containers/Module/Module';

import * as actions from './store/action/index';

class App extends Component {

componentDidMount(){
 
  this.props.onAutoLogin();



}


  render() {
    return (
      <BrowserRouter basename='/my-app'>
      <div  className="App">
        <Module />
      </div>

      </BrowserRouter>
    );
  }
}

const mapsDispatchToProps= dispatch=>{

  return{
  onAutoLogin: ()=>dispatch(actions.authCheckState())

  }
}

export default connect(null,mapsDispatchToProps) (App);

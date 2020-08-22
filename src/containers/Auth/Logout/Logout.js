import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import * as actions from '../../../store/action/index';

class Logout extends Component{

    componentDidMount(){

this.props.logoutApp();

    }

render(){


return(

<Redirect to='/' />

);


}


}

const mapDispatchToProps=dispatch=>{

return{

  logoutApp: ()=>dispatch( actions.logoutHandler() )


};

};

export default connect(null,mapDispatchToProps)(Logout);
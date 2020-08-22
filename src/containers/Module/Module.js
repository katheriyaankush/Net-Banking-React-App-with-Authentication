import React, { Component } from 'react';
import {connect} from 'react-redux';


import classes from './Module.css';
import MoneyTransfer from '../MoneyTransfer/MoneyTransfer';
import {  Route, NavLink ,Switch} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Aux from '../../hoc/Axiliury/Axilury';
import Auth from '../../containers/Auth/Auth';
import Logout from '../../containers/Auth/Logout/Logout';
import AccountSummary from '../AccountSummary/AccountSummary';
import Products from '../Products/Products';





class Module extends Component {
    state = {

        auth: true,
       
       
    };
   


    render () {

    
         
       





        return (
            <Aux>
                
            <div  >
                <header>
                <nav className={classes.Module}>
                 
                    {  this.props.authToken ?   <ul>
                        <li> <NavLink to="/home" 
                                exact
                                   activeStyle={{ 
                                    color: 'black',
                                    }}
                                >Home </NavLink>  </li>
                         <li> <NavLink to="/MoneyTransfer" 
                                exact
                                   activeStyle={{ 
                                    color: 'black',
                                    }}
                                >Money Transfer </NavLink>  </li>
                    <li> <NavLink to="/Products" 
                                exact
                                   activeStyle={{ 
                                    color: 'black',
                                    }}
                                >Products </NavLink>  </li>
                                <li> <NavLink
                                activeStyle={{ 
                                   color: 'black',
                                   }}
                               to={{
                                   pathname:"/logout",
                                           
                               }}>Logout</NavLink> </li>  <Logo/> </ul> : null }
                              
                   
                </nav>


                
                </header>
           
             
          
             <Switch>
        
             <Route  path="/MoneyTransfer/"  component={MoneyTransfer}    />
             <Route   path="/logout/" component={Logout}     />
             <Route   path="/home"  component={AccountSummary}   />
             <Route   path="/Products"  component={Products}   />
             <Route   path="/"  component={Auth} /> 
             
 

             </Switch>
           
     
            </div>


       




            </Aux>
        );
    }
}



const mapStateToProps=state=>{


    return{

        authToken: state.authToken,
        name:state.name
    }
}


export default  connect(mapStateToProps ) (Module);
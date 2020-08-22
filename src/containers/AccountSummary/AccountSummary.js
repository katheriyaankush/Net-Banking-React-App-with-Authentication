import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Redirect} from 'react-router-dom';

import classes from './AccountSummary.css';
import Aux from '../../hoc/Axiliury/Axilury';
import * as actions from '../../store/action/actionTypes';
import BankImg from '../../Assets/banks.jpg';
import Input from '../../components/UI/Input/Input';





class AccountSummary extends Component {
    state = {
  auth: true,
  showMore:false      
    };
   
    componentDidMount(){

this.props.account() 

}

    onShowmoreHandler =()=>{
this.setState({showMore: !this.state.showMore});
console.log(this.state.showMore);
    }


    render () {

    
        let balanceDiv = null;

        if(!this.props.authToken){

          balanceDiv= <Redirect to = "/" />;
    
    
          }
          else{

        const accountData = this.props.accountDetails.map((data)=>{return(

   
          <div key ={data.labelName} className={classes.row}>
          <div className={classes.col75}>
          <Input  labelName ={data.labelName}   type='label'  />
          </div>
 <div className={classes.col75}>
 <Input  labelName = {data.value} type='label'  />
   </div>
  </div>


        )}); 

        if(!this.state.showMore){

          balanceDiv=    <div className = {classes.Balance}>
  <p>Have</p>
   <h1>{this.props.totalBalance} INR</h1>
   <h2 style = {{color:"blue"}}>Saving Account</h2>
   <h3> Available Balance</h3>

   <p onClick={this.onShowmoreHandler} style={{textAlign:"right", color:"blue"}}>Show Acount Details</p>
               
   </div>
        }

        else{
          balanceDiv=    <div className = {classes.Balance}>
      <h4>Saving Account</h4>          
         <div className={classes.row1}>    <p style={{marginTop:"2px"}}>1234567890</p> </div>
         <hr></hr>
         <h4 style = {{color:"grey"}} > Available Balance</h4>
         <div className={classes.row1}>   <h1   style = {{color:"blue"}}> {this.props.totalBalance} INR</h1></div>
         <hr></hr>
     
          {accountData}

           <p onClick={this.onShowmoreHandler} style={{textAlign:"right", color:"blue"}}>Hide Acount Details</p>
                       
           </div>

        }

      }



        return (
            <Aux>
                <div className={classes.SideDiv} > <img className={classes.Offers} src={BankImg} alt="Offers" /></div>
           <div>

           {balanceDiv}

            </div>


            </Aux>
        );
    }
}



const mapStateToProps=state=>{


    return{

        authToken: state.authToken,
        totalBalance:state.totalBalance,
        accountDetails:state.accountDetails
    }
}

const mapDispatchToProps=dispatch=>{

  return{

      account: ()=> dispatch({type:actions.ACCOUNT}),

  }
}

export default  connect(mapStateToProps ,mapDispatchToProps) (AccountSummary);
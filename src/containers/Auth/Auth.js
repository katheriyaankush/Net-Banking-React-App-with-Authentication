import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect} from 'react-router-dom';
import LogoImage from '../../Assets/loginG.gif';


import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.css';
import * as actions from '../../store/action/index';
import signUpImage from '../../Assets/sign1.gif';
import errImage from '../../Assets/error.png';
import bank from '../../Assets/bank.png';
import Aux  from '../../hoc/Axiliury/Axilury'

class Auth extends Component{

state={ 
    authForm:{
        name: { elementType: 'textbox',
        elementData:{  type:'text',
           placeholder:'Your Name' 
        },
value:'',
validity: {
     
        required:true
         },
enableValid:false,
touched:false

},
    email: { elementType: 'textbox',
                 elementData:{  type:'email',
                    placeholder:'Net Banking Id' 
                 },
         value:'',
         validity: {
              
                 required:true
                  },
         enableValid:false,
         touched:false
  
},

password: { elementType: 'textbox',
                 elementData:{  
                     type:'password',
                    placeholder:'Password' 
                 },
         value:'',
         validity: {
               minLength:6,
                 required:true
                },
         enableValid:false,
         touched:false
  
},

password2: { elementType: 'textbox',
                 elementData:{  
                     type:'password',
                    placeholder:'Confirm Password' 
                 },
         value:'',
         validity: {
               minLength:6,
                 required:true
                },
         enableValid:false,
         touched:false
  
}
    },
  
    submitValidation:false,
    isSignUp:true,
    error:null
};

validityHandler=(textBoxValue , rule)=>{

     let isValid = true;
     if(rule.required){
        isValid = textBoxValue.trim() !== '' && isValid;

     }

     if(rule.minLength)
      {
          isValid = textBoxValue.length >= rule.minLength && isValid;
      }
     
return isValid;
     


      }
   


      changedHandler=(event,id)=>{

//console.log(event.target.value,id);

const authFormState = { ...this.state.authForm };

const authChangeState = {...authFormState[id]};

authChangeState.value = event.target.value;
authChangeState.enableValid =  this.validityHandler(authChangeState.value, authChangeState.validity);
authChangeState.touched=true; 


authFormState[id] = authChangeState;


let submitVal = true;
for (let elemetName in authFormState  ){
       submitVal = (authFormState[elemetName].enableValid && submitVal) ;


}      


this.setState({authForm:authFormState ,submitValidation: submitVal } );

                          
                       



      }


submitHandler=(event)=>{
    event.preventDefault(); 

   // console.log(this.state.authForm.password.value,'===',this.state.authForm.password2.value)


    if (this.state.authForm.password.value === this.state.authForm.password2.value  ){

  this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignUp, this.state.authForm.name.value ) 
   this.setState({error: null});
     }
    else if(this.state.isSignUp){

        this.props.onAuth(this.state.authForm.email.value, this.state.authForm.password.value, this.state.isSignUp,this.state.authForm.name.value  ) 
        this.setState({error: null});

    }
    else{


        this.setState({error: 'Password not match'});
    }
}

isSignUpHandler=()=>{

    this.setState({isSignUp: !this.state.isSignUp});
}

//-------------Render--------------------------//




render(){

    const elementArray = [];

    for (let key in this.state.authForm){
   
        elementArray.push({ elementName:key , configData: this.state.authForm[key]  }  );

    }
  
    if(this.state.isSignUp){
        elementArray.shift()
     elementArray.pop();
    }
    




    let errorMsg = null;
    if(this.props.notMactchErr )
    {

        errorMsg= <p style={{color:"red"}} >{this.props.notMactchErr}</p>;
    }

    if(this.state.error )
    {

        errorMsg= <p style={{color:"red"}} >{this.state.error}</p>;
    }
     
let redirectForm = null;
    if(this.props.authToken){
        
        redirectForm = <Redirect to = '/home' /> 

    }


let formData=null;
    if(this.props.showSpinner){
        formData =  <Spinner/>;
        }
        else{


   formData = elementArray.map(formRes=>{return(
    <div key ={formRes.elementName} className={classes.Control}>

     <Input 
     key ={formRes.elementName}
     type={formRes.configData.elementType} 
     elementData={formRes.configData.elementData}
     name={formRes.elementName}
     value={formRes.configData.value}
     enableValue= {!formRes.configData.enableValid}
     shouldValidation = {formRes.configData.validity}
     touchedValidation = {formRes.configData.touched}
     submitValidationVal ={formRes.submitValidation} 
     changed={(event)=>this.changedHandler(event, formRes.elementName )}

     />
</div>
    )}  );
    
   }

  
let formAuth = null

if(this.props.error){

    formAuth = <div style={{textAlign:"center"}}  ><h2>Network Issue... App Crash</h2>;
    <img  src= {errImage} alt="error"/></div> 
}

else{
    if(!this.state.isSignUp){
    formAuth =  <div className={classes.AuthDataSingUp}>   {redirectForm}
    
    <img className={classes.Logo}  src= {signUpImage} alt="logo"/>

        <form onSubmit={this.submitHandler}>
        {errorMsg} <p style={{color:'green'}}>{this.props.message}</p>
       {formData}
 
      <Button btnType='Success'  styleBtn='login'  > SignUp </Button>
      </form> 
     <Button clicked= {this.isSignUpHandler}  btnType='signUp'  styleBtn='signUp'     >Switch to Sign in</Button>
    
    </div>;
    }
    else{
      
            formAuth =  <div className={classes.AuthDataSingUp}>   {redirectForm}
            <img className={classes.Logo} src= {LogoImage} alt="logo"/>
    
                <form onSubmit={this.submitHandler}>
                {errorMsg}
               {formData}
               <Button btnType='Success'  styleBtn='login'  > SignIn </Button>
              </form> 
             <Button clicked= {this.isSignUpHandler}  btnType='signUp'  styleBtn='signUp'>Don't have an account? Sign up</Button>
            
            </div>;


    } 
   
}


return(
<Aux>
    <div className={classes.SideDiv}>


    <img className={classes.Logo} src= {bank} alt="logo"/>
      
    </div>
    <div className={classes.RightDiv}>    <h2>Welcome to Danske Net Banking Portal</h2>
</div>



<div  >

{formAuth}

</div>
</Aux>
);




}




}

const mapStateToState= state=>{
return{

    authToken: state.authToken,
    error: state.error,
    message:state.message,
    notMactchErr:state.notMactchErr

}


}

const mapDispatchToProps = dispatch=>{

return{

    onAuth: (email , password, method,name)=>dispatch(actions.authInit(email , password, method,name))
}

}


export default connect(mapStateToState , mapDispatchToProps) (Auth);
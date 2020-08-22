import React from 'react';
import classes from  './Button.css';


const button =(props)=>{



    let ButtonEle= null;
 if(props.styleBtn === 'signUp' ){

      ButtonEle =   <button className={classes.SignUp} onClick = {props.clicked} >  {props.children}</button>;
      }
 

    else if(props.styleBtn==='login'){

      ButtonEle=   <button onClick = {props.clicked} 
        disabled={props.disableValue}
className = {[classes.Button1, classes[props.btnType]].join(' ')}   > {props.children}</button>
    }
    else{
       
        ButtonEle =  <button  disabled={props.disableValue} className={classes.Button} onClick = {props.clicked} > {props.btnName}</button>;
    }



    return(


  ButtonEle

    );
}

export default button;
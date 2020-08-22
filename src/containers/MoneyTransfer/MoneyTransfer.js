import React , {useState} from 'react';
import {connect} from 'react-redux';



import classes from  './MoneyTransfer.css';
import {Redirect} from 'react-router-dom';
import Aux from '../../hoc/Axiliury/Axilury';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Table from '../../components/UI/Table/Table';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/action/actionTypes';
import errImage from '../../Assets/error.png';








const moneyTransfer =(props)=>{

 const [transcationData, setTranscationData]= useState({
        transcationForm:{
            Type:{ elementType: 'select',
            elementData:{ option:[ {value:'IMPS' ,displayValue:'IMPS'},
                                   {value:'NEFT' ,displayValue:'NEFT'}
                                   ]
             }, 
            value:'IMPS',
            validity:{},
            enableValid:true
            },
            Account: { elementType: 'input',
                      elementData:{  type:'text',
                      placeholder:'To Account' 
                    },
                      value:'',
                      validity:{
                          required:true
                      },
                      enableValid:false,
                      touched:false
                      
            
            },
             Amount: { elementType: 'input',
             elementData:{  type:'text',
             placeholder:'Amount' 
           },
             value:'',
             validity:{
                required:true
            },
            enableValid:false,
            touched:false
    
        },
             Remark:{ elementType: 'input',
             elementData:{  type:'text',
             placeholder:'Remark' 
           },
             value:'',
             validity:{
                required:true
            },
            enableValid:false,
            touched:false
    
        }
           
            
           
   
    },
        selectIdVal: null,
        submitValidation:false,
        error: false,
        allData:[],
        valueData:false,
        showTransaction:false,
       


    });






    const submitHandler=(event)=>{
  

        let date = new Date();

        const formatedDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} ${date.getHours()}:${ ("0" + date.getMinutes()).slice(-2)}:${ ("0" + date.getSeconds()).slice(-2)}`;

         const trasactionData = {};

         for (let fromElementIdName in transcationData.transcationForm){

            trasactionData[fromElementIdName] = transcationData.transcationForm[fromElementIdName].value;
 
         }
         let id = new Date().getTime();
        const allData = {

                amount: trasactionData.Amount,
                transactionId:id,
                type: "debit",
                Account:trasactionData.Account,
                date: formatedDate
 
        };
        event.preventDefault();


        props.submitData(allData);

}



const validityHandler=(textBoxValue , rule)=>{

     let isValid = true;
     if(rule.required){
        isValid = textBoxValue.trim() !== '' && isValid;

     }


return isValid;
     


      }
   


     const  changedHandler=(event,id)=>{


       const stateForm = {...transcationData.transcationForm};

       const stateElement = {...stateForm[id]}
       
     stateElement.value = event.target.value ;
   stateElement.enableValid =  validityHandler(stateElement.value, stateElement.validity);
   stateElement.touched=true; 
   stateForm[id] = stateElement;

    let submitVal = true;
     for (let elemetName in stateForm  ){
            submitVal = (stateForm[elemetName].enableValid && submitVal) ;


     }       
     setTranscationData( {  ... transcationData, transcationForm: stateForm , submitValidation: submitVal });


      }









     const  seeTransactionHandler =()=>{

        setTranscationData( {...transcationData, showTransaction: !transcationData.showTransaction});


      }

    


    const elementArray = [];

     for (let key in transcationData.transcationForm){

       
         elementArray.push({ elementName:key , configData: transcationData.transcationForm[key]  }  );

     }


   

   
let elemetData=null;
    if(props.loading){

        elemetData= <div><Spinner/></div>
    }

    else{
  
        if(props.error){

            elemetData = <div style={{textAlign:"center"}}  ><h2>Network Issue... App Crash</h2>;
            <img  src= {errImage} alt="error"/></div> 
        }
        else{

        if(!props.authToken ){
           
            elemetData =  <Redirect to = "/" />;
        }
        else{
          
 elemetData=        
 
 <div className = {classes.Div}>
     <section className={classes.Section}>



<form onSubmit={submitHandler}>
     <div style={{textAlign:'center',  color: "#2c478f"}} ><h2>Money Transfer</h2> 
     
      </div> 
      <h3>{props.transfered ? "Amount Sucessfully Transfered" : null  }</h3>

     {elementArray.map(formRes =>{ 
         return(

            <div key ={formRes.elementName} className={classes.Control}>

<Input 
      
      type={formRes.configData.elementType} 
      elementData={formRes.configData.elementData}
      name={formRes.elementName}
      value={formRes.configData.value}
      enableValue= {!formRes.configData.enableValid}
      shouldValidation = {formRes.configData.validity}
      touchedValidation = {formRes.configData.touched}
      submitValidationVal ={formRes.submitValidation} 
      changed={(event)=>changedHandler(event, formRes.elementName )}

      />
            </div>
        ) })}

<div className={classes.Actions}>
<Button disableValue = {!transcationData.submitValidation}  styleBtn = 'Button' btnName = 'Transfer Money'/>
</div>
   </form>
     <p style={{color:"blue"}} onClick={seeTransactionHandler} > {!transcationData.showTransaction ?  "Show" : "Hide"} last 10 Transactions</p>
</section>
   <Table  allData = {props.Transaction}  showAndHideTransaction = {transcationData.showTransaction} />
   </div>



;
        }

    }

    }

    return(
     <Aux style={{backgroundColor: "white"}} >


{elemetData}



     </Aux>  



    );
}




const mapStateToProps=state=>{

    return{
        Transaction: state.Transaction,
        authToken: state.authToken,
        transfered:state.transfered,
        error: state.error
    
    }
}


const mapDispatchToProps=dispatch=>{

    return{

        submitData: (data)=> dispatch({type:actions.SUBMIT_DATA, data:data}),

    }


}


export default connect(mapStateToProps,mapDispatchToProps) (moneyTransfer);
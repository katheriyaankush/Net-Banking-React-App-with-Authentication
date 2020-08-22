import React from 'react';
import classes from './Table.css';
import creditImg from '../../../Assets/credit.png'
import debitImg from '../../../Assets/debit.png'



const table =(props)=>{
  
let TransactionDiv = null;

if(props.showAndHideTransaction){
    

        TransactionDiv =  <div className={classes.center}>

        <table  >
        <tbody>
        <tr>
        <th>Sr.No. </th>
        <th>Date</th>
        <th>Amount</th>
        <th> Source </th>
        <th>Type </th>
        </tr>
        {  props.allData.map((data,index)=>{  return (
                
        <tr key = {data.transactionId}>
        <td>{index+1}</td>
        <td>{data.date}</td>
    <td>{data.amount} INR</td>
        <td>{data.Account}</td>
     <td> { data.type === "credit" ? <img className={classes.Type} src={creditImg} alt="Credit" /> :  <img className={classes.Type} src={debitImg} alt="Debit" />} </td>
      
      
   

      </tr>
  

    )})}
    
</tbody>
</table>

</div>
    }


return(

<div>

{TransactionDiv}

</div>

);
     }



export default table ;
import React from 'react';
import classes from './Input.css';



const input =(props)=>{
    
    let inputElement = null;

switch (props.type) {
    case ('label'):
        inputElement= 
        <label className = {classes.Label}>{props.labelName}</label>;
        break;
        case ('textbox'):
            inputElement= <input className={classes.InputText} onChange={props.changed}  {...props.elementData} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement =  <textarea className={classes.InputElement} onChange={props.changed}  {...props.elementData} value={props.value}/>;
             break; 
    
             case ('select'):

inputElement = ( <select className={classes.InputElement} onChange={props.changed}    value={props.value}> 
            
               {props.elementData.option.map(option=>{
    
                   return(
                   <option key = {option.value} value = {option.value}>{option.displayValue}</option>
    
                   )
               })}
            
            </select>);
             break; 
        default:
            inputElement= <input className={classes.InputElement} onChange={props.changed} {...props.elementData} value={props.value}/>;
            break;
        break;

            }

return(

<div >

{inputElement}
</div>

);

}

export default input;
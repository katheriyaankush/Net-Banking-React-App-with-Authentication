import React from 'react';
import LogoImage from '../../Assets/bank.png';
import classes from './Logo.css';


const logo=()=>(

<div className={classes.Logo} >
<img src= {LogoImage} alt="logo"/>
</div>

)
export default logo;
import React from 'react';

import classes from './ProductItem.css';

const ProductItem = props => {
  

  return (
    <div className = {classes.Div}>
    <div style={{ marginBottom: '1rem' }}>
      <div className={classes.productItem}>
      <div className={classes.row}>

      <div className={classes.col25}>
      <img className={classes.Image}   src={require('../../Assets/' +props.id+ '.jpg')}   alt='pic'/>
      </div>
      <div className={classes.col75}>

        <h2 >{props.product}</h2>
        <p>{props.description}</p>
        </div>
     </div>
      </div>
    </div>
    </div>
  );
};

export default ProductItem;

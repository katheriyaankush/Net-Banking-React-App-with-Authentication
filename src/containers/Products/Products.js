import React, { useState } from 'react';
import {connect} from 'react-redux';

import classes from './Products.css';
import {Redirect} from 'react-router-dom';
import ProductItem from '../../components/Products/ProductItem';





 const product =(props)=> {


  const [productVal] = useState({      
       productDetails:[{
         id:1234,
          product: "Credit Cards",
          description: "The Mastercard Direct card is an international payment card that you can use for both everyday shopping and for travel. You can use the card in most shops in Denmark, in ATMs and when shopping online – and abroad, you benefit from Mastercard being the most widely accepted card in the world."

        },
        {
          id:1235,
          product: "Home Loan",
          description: "Select the home loan at the terms of your own life. When the loan is just right for you, it makes it possible to make your dreams come true and also gain wealth."

        },
        {
          id:1236,
          product: "Car Loan",
          description: "Danske Bank offers Car Loans up to 100% of on-road price of the car, with attractive interest rates and tenure up to 7 years"

        },
        {
          id:1237,
          product: "Mutual Funds",
          description:  "Get started with a monthly Systematic Investment Plan (SIP) of a convenient amount and watch your money grow!"

        },
        {
          id:1238,
          product: "Fixed Deposit",
          description: "Danske Bank offers the highest FD interest rate of 7.00% p.a. which is for a tenure of 500 days for the general public. For senior citizens, the interest rate is 0.50% more "

        }

      
      ]
       
    });
   


let element = null;
      if(!props.authToken){

      element= <Redirect to = "/" />;


      }
      else{
        element=  <ul className={classes.productsList}>
        {productVal.productDetails.map(prod => (
          <ProductItem
            key={prod.id}
            id={prod.id}
            product={prod.product}
            description={prod.description}
          />
        ))}
      </ul>;
      }
      
        return (
          <div>
               {element}
          </div>
      
        );
    }




const mapStateToProps=state=>{


    return{

        authToken: state.authToken,
    }
}


export default  connect(mapStateToProps ) (product);
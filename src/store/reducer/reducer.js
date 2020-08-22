import * as actionTypes from '../action/actionTypes';


const initialState={
       

    valueData:false,

    loading:false,
   

    authToken:null,
    showSpinner: false,
    error:false,
    totalBalance:19000,
    transfered:false,
    accountDetails:[{
      value: "Ankush Katharia",
      labelName: "Holder Name :"

    },
    {
      value: "BTM Layout",
      labelName: "Branch :"

    },
    {
      value: "DNSK00001",
      labelName: "IFSC :"

    },
    {
      value: "Registered",
      labelName: "Payment Address :"

    },
    {
      value: "0.0 INR",
      labelName: "Uncleared Funds :"

    },
    {
      value: "0.0 INR",
      labelName: "Amount on Hold :"

    }

  
  ],

    Transaction: [{
      amount: 1000,
      transactionId:12345,
      type: "debit",
      Account:1234567654,
      date: '27/08/2020 08:00 '


    },
 {
    amount: 500,
    transactionId:12346,
    type: "credit",
    Account:"PayTm Refund" ,
    date: '29/07/2020 14:00 '

 },

 {
    amount: 600,
    transactionId:12347,
    type: "debit",
    Account:"Phone Pay" ,
    date: '28/07/2020 10:00 '

 },
 {
    amount: 80000,
    transactionId:12348,
    type: "credit",
    Account:"Salary",
    date: '27/07/2020 11:00 '


 },
 {
    amount: 7000,
    transactionId:12349,
    type: "credit",
    Account:"234567890",
    date: '27/07/2020 10:00'
 }



]

    }





 const reducer = (state = initialState,action)=>{

    switch (action.type) {
          case actionTypes.SUBMIT_DATA:
                    const finalTransition = [...state.Transaction];
                    finalTransition.unshift(action.data);


                return {
                    ...state,
                    Transaction:finalTransition,
                    totalBalance: state.totalBalance - action.data.amount,
                    transfered:true
                }


                case actionTypes.ACCOUNT:
              return {
                  ...state,
                
                  transfered:false
              }

            


 //-----------------------------------------LOGIN AUTH-------------------------------------     


                case actionTypes.AUTH_START: 
                return {
    
                  ...state,
                  showSpinner:true
    
                };
                case actionTypes.AUTH_SUCCESS: 
                return {
    
                  ...state,
                  authToken: action.authToken,
                  showSpinner:false,
                  error: false,
                  userId:action.userId,
                  message:action.message,
                  name:action.name,
                  notMactchErr:null
    
                };
    
                case actionTypes.AUTH_FAIL: 
                return {
    
                  ...state,
                  error: true,
                  showSpinner:false,
                  message:null,
                  notMactchErr:null
    
                };
    
                case actionTypes.AUTH_LOGOUT: 
                return {
    
                  ...state,
                  authToken: null,
                  userId:null,
                  message:null,
                  insertAllow:null,
                  notMactchErr:null
    
                };

                case actionTypes.AUTH_NOT_MATCH:
                  return{
                      ...state,
                      notMactchErr:action.notMatchErr,
                      error:false,
                      showSpinner:false
                      

                  }
    
       
          default:
      
            return state;
    }





}


export default reducer;
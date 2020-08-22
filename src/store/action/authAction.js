import Axios from 'axios';
import * as actionTypes from './actionTypes';




export const authStart=()=>{

    return{
        type:actionTypes.AUTH_START
    }
    
    }
    

export const authSuccess=(authToken,name,userId,message)=>{

return{
    type:actionTypes.AUTH_SUCCESS,
    authToken:authToken,
    userId:userId,
    message:message,
    name:name
}

}

export const authNotMatch=(notMatchErr)=>{
    return{
        type:actionTypes.AUTH_NOT_MATCH,
        notMatchErr:notMatchErr

       
    }


}
export const authFail=()=>{

    return{
        type:actionTypes.AUTH_FAIL
       
    }
    
    }


export const logout=()=>{
 localStorage.removeItem('token');
 localStorage.removeItem('expirationDate');
 localStorage.removeItem('name');
return{
    type:actionTypes.AUTH_LOGOUT
}


}


export const authTimeout=(authTime) =>{

return dispatch=>{

setTimeout(() => {dispatch(logout())
    
}, authTime * 1000);

};


}





    export const authInit=(email,password,method,name)=>{

        const data = { email: email,
        password:password,
        name:name,
        returnSecureToken:true
        }
        let url = 'http://localhost/LoginAPI/users/signUp.php';
         if(method===true)
         {
            url = 'http://localhost/LoginAPI/users/signIn.php';
         }
   console.log(url);
        return dispatch => {
           dispatch(authStart());



               Axios.post(url, data)
               .then(response => {
              
                   const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
                    localStorage.setItem('token',response.data.idtoken);
                    localStorage.setItem('expirationDate',expirationDate);
                    localStorage.setItem('name',response.data.name);
                   if(response.data.error){
                    dispatch(authNotMatch(response.data.error.message));

                                       }
                   else{
                   dispatch(authSuccess(response.data.idtoken,response.data.name, response.data.localId,response.data.message));
                   dispatch(authTimeout(response.data.expiresIn));
                   }
               })
               .catch(err => {   
                   dispatch(authFail());
               });
         
        };
        
        };
    
   export const logoutHandler=()=>{

      return dispatch=>{

       dispatch(logout())


      };

        };


        export const authCheckState=()=>{
            
            return dispatch =>{
   
               const token = localStorage.getItem('token');
     
               if(!token){
                dispatch(logout());
                       }
                       else{
                        const expirationDate = new Date(localStorage.getItem('expirationDate'));
                       
               if(expirationDate <= new Date()){
                    dispatch(logout());
                   }
                   else{
                    const name = localStorage.getItem('name');
                    dispatch(authSuccess(token,name));
                      dispatch(authTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
                   }
               
                       }


            }

        }
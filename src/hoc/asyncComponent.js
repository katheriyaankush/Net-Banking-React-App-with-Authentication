import React ,{Component} from 'react';


const asyncComponent =(importComponet)=>{

   return class extends Component{

      state={
       component: null

      };
            
        componentDidMount(){
          importComponet().then(cmp=>{return(
              
            
            this.setState({component: cmp.default}) 
             ) })
     
         }


          render(){

            const CompVal = this.state.component;


                     return( CompVal ? <CompVal  {...this.props}/> : null   );
           }
   
}
   
}
export default asyncComponent;
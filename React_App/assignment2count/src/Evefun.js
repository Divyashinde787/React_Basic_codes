import React from "react";
import "./index.css";
class Evefun extends React.Component
{  count=0;
   constructor(){
      super();
     this.state={
		  count:0
		}
   }
   handleEvent=()=>{
      	this.setState({count:this.state.count+1});
       
   }
    render(){
       return<><h1>{this.state.count}</h1>
        <button onClick={this.handleEvent}>I am button</button>
        </>
    }
}
export default  Evefun;

import React from "react";
//import  ReactDOM from "react-dom";

class StateObj extends React.Component{
 constructor(){
    super();
        this.state={
            data:"divya"
        }
 }
    render(){
        return  <h1>Hello {this.state.data}</h1>
        
    }
}
export default StateObj;
import React from "react";
import "./index.css";

class EveFun extends React.Component{
    handleEvent=()=>{
        alert("i am event handler function");
    }
    render(){
        return <button onClick={this.handleEvent}>hi i am button</button>
    }
}
export default EveFun;
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(<>
<h4>inlineCSS</h4>
<center>
<h1 style={{backgroundColor:"red",color:"white",width:"600px", height:"45px"}}>Hello mumbai, Good Morning</h1>
</center></>,document.getElementById("root"));


<h4>Internal CSS:store all CSS property in java script object and pass java script object in 
JSX syntax in JSX element</h4>
let val={
  backgroundColor:"blue",
  color:"pink",
  width:"400px",
  height:"40px",
  padding:"20px"
};
ReactDOM.render(<><h1 style={val}>its Internal CSS</h1></>,document.getElementById("root"));



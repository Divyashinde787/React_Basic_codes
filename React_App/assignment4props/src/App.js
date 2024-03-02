import React from "react";
import Product from "./Product.jsx";
class App extends React.Component{
  constructor(props)
  { super(props);
   this.state={
    prodName:'ABCD'

    }
  }
  btnHandler=()=>{
    this.setState({prodName:"Divya"});
  }
  render(){
    return <><h1>Hello I am App component</h1>
    <Product name={this.state.prodName} /> <br/><br/>
    <button style={{width:"400px",height:"40px",marginLeft:"50px"}} onClick={this.btnHandler}>Change Property Value</button>
    </>
  }
}
export default App;

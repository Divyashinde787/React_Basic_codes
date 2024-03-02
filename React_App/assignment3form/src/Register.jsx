import React from "react";
//import ReactDom from "react-dom";
import "./index.css";
class Register extends React.Component
{
    constructor()
    {
      super();
      this.state={
		  name:'',
		  email:'',
		  contact:'',
		  errorMsg:''
		 }
   }
   
    genericHandler=(e)=>{
      this.setState({[e.target.name]:e.target.value});
    }
    
   saveForm=(e)=>{
    e.preventDefault();
    let regExp=/^[a-zA-z ' ']+$/;
    if(this.state.name.length===0)
    {  this.setState({errorMsg:'Name Should not blank'});
    }
    else if(this.state.name.match(regExp)==null)
    {this.setState({errorMsg:'Name must be present alphabet'});
    }
    else{
     }
   }
  render(){
   return <>
   <form onSubmit={(e)=>this.saveForm(e)}>
          <ul>
 <li><input type='text' name='name' value={this.state.name} onChange={(e)=>this.genericHandler(e)}/></li>
<li><input type='text' name='email' value={this.state.email} onChange={(e)=>this.genericHandler(e)}/></li>
<li><input type='text' name='contact' value={this.state.contact}  onChange={(e)=>this.genericHandler(e)}/></li>
	   <li><input type='submit' name='s' value='Register'/></li>
	   <li>{this.state.errorMsg}</li>

	  </ul>
    </form>
       </>
  }
}
export default Register;

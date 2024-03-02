import React,{Component} from "react";
import "./index.css";
class NavBar extends Component{
  render(){
     return <><center>
     <h2>Happy diwali</h2></center>
		<ul>
		<li><a href='https://google.com/'>Home</a></li>
		<li><a href='https://g.co/kgs/PW6Usk'>About</a></li>
		<li><a href=''>Contact</a></li>
		<li><a href=''>Services</a></li>
        <li><input type="text" name="search" id="search" placeholder="Search the site…"
      /> 
             <a href='' style={{paddingLeft:"25px"}}>Search</a></li>
        </ul>
	    </>
   }
}
export default NavBar;

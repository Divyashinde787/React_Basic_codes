import React from "react";
import "./index.css";

let RegForm=()=>{
    return <>
    <center>
        <input type="text" name="name" value="" placeholder="enter name" className='control'></input><br/>
        <imput type="text" name="email" value="" placeholder="enter email" className='control'></imput><br/><br/>
        <input type="text" name="contact" value="" placeholder="enter contact" className='control'></input><br/><br/>
        <input type="submit" name="s" value="Register" className='control'></input>
    </center>
    </>
}
export default RegForm;

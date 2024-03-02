import React,{useState} from "react";
import EmployeeService from "../services/EmployeeService.js";

let styleObj={
         width:"400px",
         height:"40px"
         };

let AddEmployee=()=>{
let [employee,setEmployee]=useState({id:0,
				     name:'',
				     salary:0
				    });
let [msg,setMsg]=useState("Test");
     let genHandler=(e)=>{
         setEmployee(data=>{return {...data,[e.target.name]:e.target.value}});
     }
				     
     
    let saveEmployee=(e)=>{
	e.preventDefault();
        EmployeeService.createEmployee(employee).then((res)=>{
           setMsg("Employee Added Success");
        });
    }
 return (<>
	<br/><br/>	
   <center>
	<h1>Add New Employee Form</h1>
	<form>
       <input type='text' name='id' value={employee.id} onChange={(e)=>genHandler(e)} style={styleObj}/><br/><br/>
      <input type='text' name='name' value={employee.name} onChange={(e)=>genHandler(e)} style={styleObj}/><br/><br/>
      <input type='text' name='salary' value={employee.salary} onChange={(e)=>genHandler(e)} style={styleObj}/><br/><br/>
       <input type='submit' name='s' value='Add New Employee' style={styleObj} onClick={(e)=>saveEmployee(e)}/><br/><br/>
	{msg}
      </form>
    </center>
  </>);
}
export default AddEmployee;

import React from "react";
import EmployeeService from "../services/EmployeeService.js";
class ListEmployeeComponent extends React.Component{

    constructor(props){
    super(props);
    this.state={
        employee:[]
    }
    }

    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
                this.setState({employee:res.data});
           });
   }

    render(){
        return(<div>

            <center><h2>employee list</h2></center>
            <div className="container">
		 <table width='50%' border='5' align='center'> 
   <thead>
    <tr><th>NAME</th><th>EMAIL</th><th>CONTACT</th><th>DELETE</th><th>UPDATE</th></tr>
    </thead>
    <tbody>
         {
            this.state.employee.map((employee)=>{
               <tr>
		<td>{employee.name}</td>
		<td>{employee.email}</td>
		<td>{employee.contact}</td>
               </tr>
              })
         }
   </tbody>
		 </table>
	       </div>

        </div>)
    }
}

export default ListEmployeeComponent;
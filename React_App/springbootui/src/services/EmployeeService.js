import axios from 'axios';
const EMPLOYEE_BASE_URL="http://localhost:8080/api/v1/viewemployee";
class EmployeeService
{
    getEmployee(){
     console.log(axios.get(EMPLOYEE_BASE_URL));
      return axios.get(EMPLOYEE_BASE_URL);
    }
   createEmployee(employee){
      return axios.post("http://localhost:8080/api/v1/addemployee",employee);
   }
}

export default new EmployeeService();

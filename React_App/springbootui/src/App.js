import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent.js";
import AddEmployee from "./components/AddEmployee.js";
let App=()=>{

    return(<>
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<ListEmployeeComponent/>}/>
         <Route extact path="/addemployee" element={<AddEmployee/>}/>
        </Routes>
      </ BrowserRouter >
     </>);
}
export default App;

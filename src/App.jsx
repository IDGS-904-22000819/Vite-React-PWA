import { useState } from 'react';
import Navbar from "./components/Navbar";
import PWABadge from './PWABadge';
import Footer from "./components/Footer";
import './App.css'
import EmployeeActions from "./components/EmployeeActions";
import EmployeeTable from "./components/EmployeeTable";


function App() {
    const [employees, setEmployees] = useState([]);

const handleAddEmployee = (newEmployee) => {
  // Crear id
  const newId = Date.now();

  // Combinar los datos 
  const employeeWithId = {
    ...newEmployee, // uso del operador de propagación para copiar las propiedades 
    id: newId       // añade la propiedad id
  };

  // Actualizar la lista de empleados 
  setEmployees((previousEmployees) => {
    // Crear un nuevo array que incluye todos los empleados anteriores + el nuevo
    const updatedEmployees = [...previousEmployees, employeeWithId];
    return updatedEmployees;
  });
};


 return (
    <div>
      <Navbar />

      <div id="structurePage">
        <header>
          <h1 className="text-center mt-4">CRUD de Empleados</h1>
        </header>

        <main className="container mt-4">
          <EmployeeActions onAddEmployee={handleAddEmployee} />
        <EmployeeTable employees={employees || []} />

          <div className="row mb-4">
            <div className="col-md-12 text-center">
              <PWABadge />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App

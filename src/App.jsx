import { useState } from 'react';
import Navbar from "./components/Navbar";
import PWABadge from './PWABadge';
import Footer from "./components/Footer";
import './App.css'
import EmployeeActions from "./components/EmployeeActions";
import EmployeeTable from "./components/EmployeeTable";

// Datos de empleados por defecto
const defaultEmployees = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Pérez",
    numero: "555-0101",
    correo: "juan.perez@empresa.com",
    salario: "45000"
  },
  {
    id: 2,
    nombre: "María",
    apellido: "García",
    numero: "555-0102",
    correo: "maria.garcia@empresa.com",
    salario: "52000"
  },
  {
    id: 3,
    nombre: "Carlos",
    apellido: "López",
    numero: "555-0103",
    correo: "carlos.lopez@empresa.com",
    salario: "48000"
  },
  {
    id: 4,
    nombre: "Ana",
    apellido: "Martínez",
    numero: "555-0104",
    correo: "ana.martinez@empresa.com",
    salario: "55000"
  },
  {
    id: 5,
    nombre: "Luis",
    apellido: "Rodríguez",
    numero: "555-0105",
    correo: "luis.rodriguez@empresa.com",
    salario: "42000"
  }
];

function App() {
    const [employees, setEmployees] = useState(defaultEmployees);

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

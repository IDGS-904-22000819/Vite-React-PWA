import { useState } from "react";

// función que se ejecutará cuando guardemos
function EmployeeActions({ onAddEmployee }) { 

  // guarda los valores del empleado actual
  const [employee, setEmployee] = useState({
    nombre: "",   
    apellido: "",
    numero: "",   
    correo: "",  
    salario: ""   
  });

  // Estado modal
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSave = () => {
    onAddEmployee(employee); //callback desde app.jsx

    setEmployee({
      nombre: "",
      apellido: "",
      numero: "",
      correo: "",
      salario: ""
    });
    setShowModal(false);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="row mb-3"> 
        <div className="d-flex justify-content-between"> 
          <button
            className="btn btn-success"
            onClick={() => setShowModal(true)}
          >
            + Agregar
          </button>

          <div className="input-group" style={{ maxWidth: "300px" }}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar empleado..."
            />
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="modal d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={handleClose} 
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Agregar Empleado</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose} 
                ></button>
              </div>

              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      value={employee.nombre}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      name="apellido"
                      value={employee.apellido}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Número</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="numero"
                      value={employee.numero}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Correo</label>
                    <input
                      type="email"
                      className="form-control"
                      name="correo"
                      value={employee.correo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Salario</label>
                    <input
                      type="number"
                      className="form-control"
                      name="salario"
                      value={employee.salario}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose} 
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={handleSave} 
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  ); 
} 

export default EmployeeActions;

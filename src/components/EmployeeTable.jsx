function EmployeeTable({ employees }) {
    return (
        <div className="row mb-4">
            <div className="col-md-12">
                <h3>Lista de Empleados ({employees.length})</h3>
                {employees.length === 0 ? (
                    <p className="text-muted">No hay empleados registrados.</p>
                ) : (
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Número</th>
                                    <th>Correo</th>
                                    <th>Salario</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.nombre}</td>
                                        <td>{employee.apellido}</td>
                                        <td>{employee.numero}</td>
                                        <td>{employee.correo}</td>
                                        <td>${employee.salario}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default EmployeeTable;
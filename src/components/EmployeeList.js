import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Button, Modal,Alert } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import AddForm from "./AddForm";
import Pagination from "./Pagination"

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);
  const { removeEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [showAlert,setShowAlert] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
    const [employeesPerPage] = useState(2)
  
    const indexOfLastEmployee = currentPage * employeesPerPage;
    const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
    const currentEmployees = sortedEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    const totalPagesNum = Math.ceil(sortedEmployees.length /employeesPerPage)

  const handleAlert = async () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
     }, 3000);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
    return () => handleAlert()
  }, [sortedEmployees]);


  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={handleShow}
              className="btn btn-success text-white"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      {showAlert && 
      <Alert variant="success" className="mb-2">
        <Alert.Heading>Updated SuccessFully</Alert.Heading>
      </Alert>
    }

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.length > 0 ?
          
             currentEmployees.map((employee) => (
                <tr key={employee.id}>
                    <Employee employee={employee} removeEmployee={removeEmployee} />
                </tr> 
             )) : ( <p>No employees to show</p> )
          }
        </tbody>
      </table>

      <Pagination pages={totalPagesNum} setCurrentPage={setCurrentPage} currentEmployees={currentEmployees} sortedEmployees={sortedEmployees}/>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EmployeeList;

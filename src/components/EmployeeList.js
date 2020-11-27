import { useContext, useEffect, useState } from "react";
import Employee from "./Employee";
import { Button, Modal,Alert } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { employees } = useContext(EmployeeContext);
  const { removeEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);
  const [showAlert,setShowAlert] = useState(false);


  const handleAlert = async () => {
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
     }, 2000);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
    return () => handleAlert()
  }, [employees]);


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
          {employees.length > 0 ?
             employees.sort((a,b) => a.name.localeCompare(b.name)).map((employee) => (
                <tr key={employee.id}>
                    <Employee employee={employee} removeEmployee={removeEmployee} /*handleAlert={handleAlert}*/ />
                </tr> 
             )) : ( <p>No employees to show</p> )
          }
        </tbody>
      </table>

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

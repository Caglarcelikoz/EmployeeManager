import {useState, useEffect} from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import EditForm from './EditForm'

const Employee = ({ employee, removeEmployee, handleAlert }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleClose();
  }, [employee]);
  return (
    <>
          <td>{employee.name}</td>
          <td>{employee.email}</td>
          <td>{employee.address}</td>
          <td>{employee.phone}</td>
          <td>
            <OverlayTrigger
              overlay={
                <Tooltip id={`tooltip-top`}>
                    Edit
                </Tooltip>
              }>
              <button
              className="btn text-warning btn-act"
              data-toggle="modal"
              onClick={handleShow}
            >
              <i className="material-icons">
                &#xE254;
              </i>
            </button>
            </OverlayTrigger>
            <OverlayTrigger
              overlay={
                <Tooltip id={`tooltip-top`}>
                    Delete
                </Tooltip>
              }>
              <button
              className="btn text-danger btn-act"
              data-toggle="modal"
            >
              <i
                className="material-icons"
                onClick={() => removeEmployee(employee.id)}
              >
                &#xE872;
              </i>
            </button>
              </OverlayTrigger>
          
          </td>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm employee={employee} handleAlert={handleAlert} />
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

export default Employee;

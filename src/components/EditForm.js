import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";
const EditForm = ({employee, handleAlert}) => {
  const { updateEmployee } = useContext(EmployeeContext);

  const [updatedEmployee, setUpdatedEmployee] = useState({
    id: employee.id,
    name: employee.name,
    email: employee.email,
    address: employee.address,
    phone: employee.phone,
  });
 
  const {id,name, address, email, phone} = updatedEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
   // handleAlert(true);
  };

  const onInputChange = (e) => {
    setUpdatedEmployee({ ...updatedEmployee, [e.target.name]: e.target.value });
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="email"
          placeholder="Email *"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={(e) => onInputChange(e)}
          value={phone}
        />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Edit Employee
      </Button>
    </Form>
  );
};
export default EditForm;

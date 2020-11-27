import { Button, Form } from "react-bootstrap";
import { EmployeeContext } from "../context/EmployeeContext";
import { useContext, useState } from "react";
const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  /* const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");*/
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const { name, email, address, phone } = newEmployee;

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(name, email, address, phone);
  };

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
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
          /*  onChange={(e) => setName(e.target.value)}*/
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
          /*onChange={(e) => setEmail(e.target.value)}*/
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
          /*onChange={(e) => setAddress(e.target.value)}*/
          rows={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => onInputChange(e)}
          /*onChange={(e) => setPhone(e.target.value)}*/
          placeholder="Phone"
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};
export default AddForm;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className = "isi bg-dark d-flex justify-content-center align-items-center p-1">
    
    <div className = " m-4 border border-3 border-white text-white rounded rounded-5">

    <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Link to="/login">
        <Button className="d-flex justify-content-center" variant="primary" type="submit">
          Submit
        </Button>
      </Link>
    </Form>
    </div>
   
    </div>
  );
}

export default Register;
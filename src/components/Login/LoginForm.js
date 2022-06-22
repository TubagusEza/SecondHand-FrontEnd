import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

import './LoginForm.Module.css'

function LoginForm() {
  return (
    <div className='login-form'>
      <Form>
        <Form.Group className="mb-3 mx-5" controlId="formBasicEmail">
          <h1>Masuk</h1>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Contoh: johmdee@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3 mx-5" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Masukkan password" />
        </Form.Group>

        <Form.Group className="mb-3 mx-5">
          <Link to="/">
            <Button className='btn-login' variant="custom" type="submit" style={{ backgroundColor: "#7126B5", color: "white" }}>
              MASUK
            </Button>
          </Link>
        </Form.Group>

        {/* <Button className='mx-5' variant="custom" type="submit" style={{ backgroundColor: "#7126B5", color: "white", minWidth:"100%", width:"100%" }}>
          MASUK
        </Button> */}
        {/* <button className='btn btn-primary btn-login' type='submit'>MASUK</button> */}
      </Form>

      <Form>
        <Form.Group className="my-3 mx-5 text-register">
          <Form.Text>Belum punya akun? </Form.Text><Link to="/register"><Form.Text>Daftar di sini</Form.Text></Link>
        </Form.Group>
      </Form>
    </div>

  );
}

export default LoginForm;
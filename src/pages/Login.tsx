import { ChangeEvent, FormEvent, useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FormComponents } from "../components/formComponents/userForm";
import { userFormData } from "./types";
import { loginUser } from "../components/helper/axiosHelper";
import { toast } from "react-toastify";

const Login = () => {
  const [userData, setUserData] = useState<userFormData>({});

  const navigate = useNavigate();

  const inputs = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Jack@gmail.com",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
    },
  ];

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { status, message, result } = await loginUser(userData);

    if (status === "success" && result?._id) {
      toast.success(message);
      sessionStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    } else {
      toast.error(message);
    }
  };
  return (
    <div className='bg-color'>
      <Container>
        <Row className='p-5'>
          <h2 className='text-center fw-bold'> Login</h2>
          <hr />

          <Col className='p-5 text-center '>
            <div className='p-5'>
              <h3 className='fw-bold mb-3'>Asset Finance Specialists !</h3>

              <p> Please login here. </p>
            </div>
          </Col>
          <Col className='p-5'>
            <Form onSubmit={handleOnSubmit}>
              {inputs.map((item, i) => (
                <FormComponents key={i} {...item} onChange={handleOnChange} />
              ))}

              <Button className='button mt-3 ' type='submit'>
                Login
              </Button>
            </Form>
            <div className='text-end p-4'>
              <hr />
              <Link to='/register' className='nav-link fw-bold'>
                {" "}
                Register new account?
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;

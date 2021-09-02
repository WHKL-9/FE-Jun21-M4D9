import { Form, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";

//we need a state for storing the information user entered on the form

const Login = () => {
  const [Name, setName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("loading the page");

    if (Password != ConfirmPassword){
        alert ("Please confirm with the same password")
        setIsLoading(false )
        setConfirmPassword("")
    } else if (Password === ConfirmPassword){
        try {
            let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify(),
              headers: {
                "Content-Type": "application/json",
              },
            });
            if (response.ok) {
              alert("Form was sent 🚀 ");
              setName("")
              setSurname("")
              setEmail("")
              setPassword("")
              setConfirmPassword("")
              setIsLoading(false)
              history.push("/Home");
      
            } else {
              alert("Some error occured!");
              setIsLoading(false)
      
            }
          } catch (error) {
            console.log(error);
            setIsLoading(false)
      
          }
    }

    
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="textarea"
                minLength="2"
                placeholder="Enter Name"
                required
                onChange={(e) => setName(e.target.value)}
                value={Name}
              />
            </Form.Group>
            <Form.Group controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="textarea"
                minLength="3"
                placeholder="Enter Surname"
                required
                onChange={(e) => setSurname(e.target.value)}
                value={Surname}
              />
            </Form.Group>
            <Form.Group controlId="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter E-Mail"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password with at least 1 letter and 1 number"
                // min 8 char at least one letter and one number
                pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
                required
                onChange={(e) => setPassword(e.target.value)}
                value={Password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword-2">
              <Form.Label>Re-enter your Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm your Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={ConfirmPassword}
              />
            </Form.Group>
            {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button disabled={isLoading} variant="primary" type="submit">
              {isLoading && (
                <Spinner
                  animation="border"
                  role="status"
                  className="spinner-border-sm"
                >
                  <span className="visually-hidden"></span>
                </Spinner>
              )}
              <span>{isLoading ? "sending" : "Send"}</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

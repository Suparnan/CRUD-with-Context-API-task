import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import { useContext, useState } from "react";
import { mycontext } from "../context.js";

const initialState = {
    name: "",
    punchline: "",
}

export function Create() {

    const [user, setUser] = useState([initialState]);
    
    let history = useHistory();

    const { setUserData, userData } = useContext(mycontext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
        ...user,
        [name]: value
        })
    console.log("Inside handleChange", user);
    }

    console.log("outside handleChange", user);

    const handleSubmit = (e) => {
        e.preventDefault();
        const myData = {
        id: Math.floor(Math.random() * 1000),
        name: user.name,
        punchline: user.punchline,
        }
        console.log("This is user",user);
        console.log("This is myData",myData);
        setUserData([...userData, myData])
        setUser({
        name: "",
        punchline: "",
        })
        history.push("/read");
        console.log("Inside Handle Submit",user,myData,userData);
    }

    console.log("Prop Data", userData);

    return(
        <main>
            <div className="Apple">
      <div className="container">
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formBasicUsername">
            <h3>
              Kalvettu Form
            </h3>
            <br />
            <br />
            <hr />
            <br />

            <Col sm={4}>
              <Form.Label column sm="2">Name</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="text" value={userData.name} name="name" placeholder="Enter your Name" onChange={handleChange} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formBasicTarget">
            <Col sm={4}>
              <Form.Label column sm="2">Target</Form.Label>
            </Col>
            <Col sm={5}>
              <Form.Control type="text" value={userData.punchline} name="punchline" placeholder="Enter your punchline" onChange={handleChange} />
            </Col>
          </Form.Group>
          
          <br />
          <Row>
            <Col>
              <Button className="but" variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </div>
        </main>
    )
}
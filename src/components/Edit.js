import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { mycontext } from "../context.js";
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const initialState = {
    name: "",
    punchline: "",
}

export function Edit() {
    const [user, setUser] = useState(initialState);
    const { id } = useParams();

    let history = useHistory();
    const { setUserData, userData } = useContext(mycontext);

    useEffect(() => {
        const findData = userData.find((data) => data.id == id);
        console.log("inside UseEffect", findData);
        setUser({
            name: findData.name,
            punchline: findData.punchline,
        })
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value

        })
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const newData = userData.map((data) => {
            if (data.id == id) {
                return {
                    ...data,
                    name: user.name,
                    punchline: user.punchline,
                }
            }
            return data;
        })
        setUserData(newData);
        history.push("/read");
    }

    return (
        <main>
            <div className="Apple">
                <Container fluid>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="formBasicName">
                            <h3>
                                New Punchline/Puthiya Sirpam
                            </h3>
                            <br />
                            <br />
                            <hr />
                            <br />

                            <Col sm={4}>
                                <Form.Label column sm="2">Name</Form.Label>
                            </Col>
                            <Col sm={5}>
                                <Form.Control type="text" value={user.name} name="name" placeholder="Enter your Name" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formBasicPunchline">
                            <Col sm={4}>
                                <Form.Label column sm="2">Punchline</Form.Label>
                            </Col>
                            <Col sm={5}>
                                <Form.Control type="text" value={user.punchline} name="punchline" placeholder="Senjiduven" onChange={handleChange} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        </Form.Group>
                        <br />
                        <Row>
                            <Col>
                                <Button className="but" variant="primary" onClick={handleUpdate}>
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        </main>
    )
}
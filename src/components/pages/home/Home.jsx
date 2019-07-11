import React, { Component } from 'react';
import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="d-flex flex-column Home">
        <div className="HomeOptionsContainer">
          <Form>
            <Row form>
              <Col md={2}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="text" name="text" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    );
  }
}

export default Home;

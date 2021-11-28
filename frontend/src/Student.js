import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Button,
  Card,
  Col,
  Row,
  Alert,
  ListGroup,
  Badge,
} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
export class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: null,
      submit: [],
      notsubmit: [],
    };
  }
  onChangeHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
    console.log(event.target.files[0])
  };

  onClickHandler = (e, aid) => {
    if (this.state.selectedFile !== null) {
      toast('File Uploaded !');
    }
    else{
        e.target.files = null;
        this.setState({ selectedFile: null });
    }
  };


  render(props) {
    const { notsubmit, submit } = this.state; //Handle Submit not Submit Cases

    return (
      <Row>
        <Col xs={12} md={{ span: 6, offset: 3 }}>
          <Card style={{ marginTop: '5rem', width: '40rem' }}>
            <Card.Header>UPCOMING ASSIGNMENTS</Card.Header>
            <Card.Body>
              <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Card.Title>Title:Assignment 2</Card.Title>
                      <Card.Text>Description: Merge Sort</Card.Text>
                      <Card.Text>Teacher Name: Swetha</Card.Text>
                      <Card.Text>Teacher Email: mswetha1708@gmail.com</Card.Text>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Upload Assignment</Form.Label>
                        <Form.Control
                          type='file'
                          name='file'
                          onChange={this.onChangeHandler}
                        />
                      </Form.Group>
                      <Button
                        variant='outline-primary'
                        onClick={this.onClickHandler}
                      >
                        Upload
                      </Button>
                    </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          <Card style={{ marginTop: '5rem', width: '40rem' }}>
            <Card.Header>SUBMITTED ASSIGNMENTS</Card.Header>

            <ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Title>Title: Assignment 1</Card.Title>
                    <Card.Text>Description: Insertion Sort </Card.Text>
                    <Card.Text>Teacher Name: Hello</Card.Text>
                    <Card.Text>Teacher Email: hello@email.com </Card.Text>
                  </ListGroup.Item>
            </ListGroup.Item>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default (Student);
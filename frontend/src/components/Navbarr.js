import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box, Container } from 'react-layout-components';
import { Navbar, Nav } from 'react-bootstrap';

export class Navbarr extends React.Component {

   constructor(props) {
     super(props)
     this.state = {
       auth: false

     }
   }
 componentWillMount() {
  const id = localStorage.getItem('Email')
  if (id==null)
    {
        this.state.auth = false;
    }
  else
    {
        this.state.auth = true;
    }
  }
  logOut = () => {
    this.state.auth = false;
    localStorage.clear();
  };

  render() {
    return (
      <Navbar bg='light' variant='light'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
          </Nav>
        <Navbar.Brand align='center'>Assignment Submission Portal</Navbar.Brand>
        <Nav className='ml-auto'>

          <Nav.Link href='/'>Log-in</Nav.Link>

            <Nav.Link onClick={this.logOut} href='/'>Log-out</Nav.Link>

            <Nav.Link href='/'>Create-account</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navbarr;

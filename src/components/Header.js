import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <>
         <Navbar bg="dark" variant="dark" text="white">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/6qZWWzbR/pngegg-3.png"
              width="30"
              height="30"
              className="d-inline-block align-top "
            />{' '}
               DineSpots
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
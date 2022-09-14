import "./styles.css";
import users from './users_data'
import Users from './Users'


import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function App() {
  
  
  return (
    <div className="App">
       <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      <h1>Users list</h1>
     <Users users={users} />
    
    
  

    </div>
  )
}

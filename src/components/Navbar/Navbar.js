
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './navbar.css';

function ColorSchemesExample() {
  return (
    <>
      
      <Navbar bg="light" variant="light">
        <Container style={{display:'flex',flexDirection:'row', justifyContent:'space-evenly'}}>
          <Navbar.Brand href="#home" className='drible'>dribbble</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#iring">Find Talent</Nav.Link>
            <Nav.Link href="#for-designers">For designers</Nav.Link>
            <Nav.Link href="#shots">Inspiration</Nav.Link>
            <Nav.Link href="learn">Learn design</Nav.Link>
            <Nav.Link href="go-pro" className='gobtn'>Go Pro</Nav.Link>
            <div style={{width:'20%',display:'flex',flexDirection:'row',marginLeft:'20%',marginTop:'15px'}}>
                <div className="search-bar" style={{marginLeft:'20px',borderRadius:'50%'}}>
                    <input type="text" placeholder="Search" />
                    
                </div>
                <div style={{marginLeft:'40px', }}>
                    <button style={{width:'100px'}}>Share Work</button>
                </div>
                <div style={{marginLeft:'40px'}}>
                    <img src='https://cdn.dribbble.com/users/1998175/avatars/normal/af46ac7b92eb85f76f5a3fe4f214fdf2.jpg?1542363868' style={{borderRadius:'50%', width:'50px',height:'50px',}}/>
                </div>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
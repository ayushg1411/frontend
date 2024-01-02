import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { PiSignInBold } from "react-icons/pi";
import { Link } from "react-router-dom";


function Responsive() {
  return (
    <div  className="bg-blue-600" >
      <Navbar collapseOnSelect expand="lg" >
        <Container>
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 me-3" alt="FlowBite Logo" />
          <Navbar.Brand href="/"  className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ParkMe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto px-32 text-white">
              <Link to="https://parkeme.netlify.app/features" className="text-white px-3">Features</Link>
              <Link to="/about" className="text-white">About</Link>
             
              <Link to="/contact" className="text-white px-3">Contact Us</Link>
              <Link to="/booking" className="text-white px-3"><button className='bg-yellow-300  mt-[1px] rounded-md h-7 w-24 text-[20px]  hover:bg-yellow-500'><p className='font-semibold pb-[3px] text-gray-600 hover:text-white '>Book Now</p></button>
</Link>


              {/* <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item to="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
         
              <Link eventKey={2} to="/sign-up">
             <div className="flex px-3" >
              <PiSignInBold class="signupbar" className="mt-[8px] text-white" />
              <Link to="/login" className="text-white">Login</Link>

             </div>
             
     
              </Link>
              <Link eventKey={2} to="/sign-up">
             <div className="flex px-3 " >
              <PiSignInBold class="signupbar" className="mt-[8px] text-white" />
              <Link to="/sign-up" className="text-white">Sign Up</Link>

             </div>
             
     
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Responsive;

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css"


const MyNavBar = () => {
    return(
        <>
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container className="m-2">
                <Navbar.Brand  as={Link} to="/" >Rick and Morty</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="about/">About</Nav.Link>
                    <Nav.Link as={Link} to="characters/">Characters</Nav.Link>
                    <Nav.Link as={Link} to="contact/">Contact Us</Nav.Link>
                    <Nav.Link as={Link} to="favorites/">Favorites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default MyNavBar;
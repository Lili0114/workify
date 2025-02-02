import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="/" style={{fontSize: 40, outlineWidth: 10, outlineColor: 'white', color: '#172DBA'}}>Workify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Issues" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/issues">
                All Issues
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/createIssue">
                Create Issue
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Profile" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profileDetails">
                Profile Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/myTeam">
                My Team
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/myProjects">
                My Projects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/myTasks">
                My Tasks
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/myIssues">
                My Issues
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline" style={{marginRight: 5}}>Search</Button>
          </Form>
          <Button variant="outline-secondary" style={{marginLeft: 5}}>Sign Up</Button>
          <Button variant="outline-secondary" style={{marginLeft: 5}}>Sign In</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
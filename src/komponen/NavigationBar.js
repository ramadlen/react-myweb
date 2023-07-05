
import { Container, Nav, NavLink, Navbar, NavbarBrand }     from 'react-bootstrap';
const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark">
                <Container>
                    <NavbarBrand>Iqbal</NavbarBrand>
                        <Nav>
                            <NavLink>Keren</NavLink>
                            <NavLink> Ganteng</NavLink>
                        </Nav>
                </Container>
            </Navbar>
        </div>
        
    )
}

export default NavigationBar;

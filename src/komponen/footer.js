
import { Container, ModalFooter, FooterLink, FooterBrand, Footer }     from 'react-bootstrap';
const mFooter = () => {
    return (
        <div>
            <Footer variant="dark">
                <Container>
                    <FooterBrand>Iqbal</FooterBrand>
                        <Footer>
                            <FooterLink>Keren</FooterLink>
                            <FooterLink> Ganteng</FooterLink>
                        </Footer>
                </Container>
            </Footer>
        </div>
        
    )
}

export default ModalFooter;

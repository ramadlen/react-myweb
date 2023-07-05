import { Container, Row, Col, Button }  from 'react-bootstrap';


const Intro = () => {
    return(
        <div className='intro'>
            <Container className='text-white text-center d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <h1>Siapakah Kamu kok berani buka?</h1>
                        <div className='title'>ok lah</div>
                        <div className='title'>ok lah</div>
                        <div className='introButton mt-4 text-center'>
                            <Button variant="dark">Lihat Semua List</Button></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro
import { Container, Row, Col, Card }                                          from 'react-bootstrap';

import damarhusada                                                            from '../komponen/assets/clients/logo-bpjs.png';

const Trending = () => {
    return (
        <Container>
            <br/>
            <h1 className='text White'> Not Bad</h1>
            <br/>
            <Row>
                <Col md={4} className='movieWrapper'>
                    <Card className='bg-dark text-white movieImage'>
                        <Card.Img src={damarhusada} alt='sesi1' width='auto' height='100px'  className='movieImage'/>
                                <Card.Title className=' text-center'>Ingin lihat 1</Card.Title>
                                    <Card.Text className='text-left'>
                                                 ok
                                    </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className='bg-dark text-white movieImage'>
                        <Card.Img src={damarhusada} alt='sesi1' width='auto' height='100px'  className='movieImage'/>
                                <Card.Title className=' text-center'>Ingin lihat 1</Card.Title>
                                    <Card.Text className='text-left'>
                                                 ok
                                    </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className='bg-dark text-white movieImage'>
                        <Card.Img src={damarhusada} alt='sesi1' width='auto' height='100px' className='movieImage'/>
                                <Card.Title className=' text-center'>Ingin lihat 1</Card.Title>
                                    <Card.Text className='text-left'>
                                                 ok
                                    </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        
                    </Card>
                </Col>
                <Col className='movieWrapper'>
                    <Card className=' m-1 p-2 text-dark movieImage'>
                        <Card.Img src={damarhusada} alt='sesi1' width='auto' height='100px'  className='Images'/>
                                <Card.Title className=' text-center'>Ingin lihat 1</Card.Title>
                                    <Card.Text className='text-left'>
                                                 ok
                                    </Card.Text>
                                <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        
                    </Card>
                </Col>
            </Row>
        </Container>
            
    )
}

export default Trending;


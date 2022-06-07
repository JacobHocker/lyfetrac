import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import largeLogo from '../../assets/images/ec-new-large.png';
import './Home.scss';


function Home(){
    
    return(
        <div className='home-container'>
            <Container>
                <Row>
                    <Col>
                        <div className='home-logo-container' >
                            <img src={largeLogo} alt='logo' className='large-logo' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
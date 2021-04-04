import React from 'react';
import classes from './Header.module.css';
import Img1 from '../../logo.svg';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const header = () => (
    <div className={classes.HeaderPage}>
        <Container fluid>
            <Row>
                <Col>
                    <div>
                        <a href="#"><img src={Img1} /></a>
                        <div className={classes.Links}>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Events</a>
                            <a href="#">Products</a>
                            <a href="#">Support</a> 
                        </div>
                    </div>
                    
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;
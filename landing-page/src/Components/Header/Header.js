import React from 'react';
import classes from './Header.module.css';
import Img1 from '../../logo.svg';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const header = () => (
    <div className={classes.HeaderPage}>
        <Container fluid>
            <Row>
                {/* Visible on Medium screens and below */}
                <Col className="d-lg-none d-xl-none">
                    <div className={classes.CollapseButton}>
                        <a href="#"><img src={Img1} /></a>
                        
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">

                        </Navbar.Collapse>   
                        
                    </div>
                </Col>

                {/* Visible only with Large screens and above*/}
                <Col className="d-none d-lg-block">
                    <div>
                        <a href="#"><img src={Img1} /></a>
                        <div className={classes.Links}> 
                            <a className={classes.About} href="#">About</a>          
                            <a className={classes.Careers} href="#">Careers</a>                        
                            <a className={classes.Events} href="#">Events</a>                 
                            <a className={classes.Products} href="#">Products</a>
                            <a className={classes.Support} href="#">Support</a>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className={classes.HeaderBodyRow}>
                <Col>
                    <div className={classes.OuterHeaderBody}>
                        <div className={classes.HeaderBody}>
                            <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;
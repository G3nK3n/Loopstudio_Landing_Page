import React from 'react';
import classes from '../Footer/Footer.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Img1 from '../../logo.svg';
import Facebook from '../../icon-facebook.svg';
import Twitter from '../../icon-twitter.svg';
import Pinterest from '../../icon-pinterest.svg';
import Instagram from '../../icon-instagram.svg'; 

const footer = () => (
    <div className={classes.OutsideFooter}>
        <Container>
            <div className="d-none d-lg-block">
                <Row>
                    <Col>
                        <div>
                            <a href="#"><img className={classes.Logo} src={Img1} /></a>
                            <div className={classes.Links}> 
                                <a className={classes.About} href="#">About</a>          
                                <a className={classes.Careers} href="#">Careers</a>                        
                                <a className={classes.Events} href="#">Events</a>                 
                                <a className={classes.Products} href="#">Products</a>
                                <a className={classes.Support} href="#">Support</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className={classes.OuterSocialMediaLinks}>
                            <div className={classes.SocialMediaLinks}>
                                <a href="#"><img src={Facebook} /></a>
                                <a href="#"><img src={Twitter} /></a>
                                <a href="#"><img src={Pinterest} /></a>
                                <a className={classes.Instagram} href="#"><img src={Instagram} /></a>
                            </div>
                            
                            <div className={classes.Copyright}>
                                <p>&#169;2021 Loopstudios. All rights reserved.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
);

export default footer;
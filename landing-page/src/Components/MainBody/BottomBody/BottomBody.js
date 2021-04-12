import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../BottomBody/BottomBody.module.css';

const bottombody = () => (
    <div className={classes.BottomBodyContainer}>
        <Container>
            <Row>
                <Col>
                    <div>
                        <h1>Our Creations</h1>
                        <button>See All</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default bottombody;
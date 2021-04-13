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
                    <div className={classes.OurCreationTitle}>
                        <h1>OUR CREATIONS</h1>
                    </div>
                </Col>
                <Col>
                    <div className={classes.SeeAllButton}>
                        <button>SEE ALL</button>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default bottombody;
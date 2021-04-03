import React from 'react';
import classes from './Header.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const header = () => (
    <div className={classes.HeaderPage}>
        <Container>
            <Row className={classes.HeaderRow}>
                <Col>
                    Hi
                </Col>
            </Row>
        </Container>
    </div>
);

export default header;
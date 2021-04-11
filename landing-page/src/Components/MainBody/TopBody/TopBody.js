import React from 'react';
import Container from 'react-bootstrap/Container';
import Img1 from '../../../image-interactive.jpg';
import classes from '../TopBody/TopBody.module.css';

const topbody = () => (
    <div className={classes.BodyContainer}>
        <Container>
            <div>
                <img src={Img1} />
            </div>
        </Container>
    </div>
);

export default topbody;
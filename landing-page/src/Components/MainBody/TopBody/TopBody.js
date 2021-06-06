import React from 'react';
import Container from 'react-bootstrap/Container';
import Img1 from '../../../image-interactive.jpg';
import classes from '../TopBody/TopBody.module.css';

const topbody = () => (
    <div className={classes.BodyContainer}>
        <Container>
            <div className="d-lg-none d-xl-none">
                <img src={Img1} />
                <div className={classes.TopBodyText}>
                    <h1>THE LEADER IN INTERACTIVE VR</h1>
                    <p>
                        Founded in 2011, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe.
                        Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                    </p>
                </div>
            </div>



            <div className="d-none d-lg-block">
                <img src={Img1} />
                <div className={classes.TopBodyText}>
                    <div className={classes.InnerTopBodyText}>
                        <h1>THE LEADER IN INTERACTIVE VR</h1>
                        <p>
                            Founded in 2011, Loopstudio has been producing world-class virtual reality projects for some of the best companies around the globe.
                            Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
);

export default topbody;
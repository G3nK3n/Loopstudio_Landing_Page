import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from '../BottomBody/BottomBody.module.css';

import Img1 from '../../../image-curiosity.jpg';
import Img2 from '../../../image-deep-earth.jpg';
import Img3 from '../../../image-fisheye.jpg';
import Img4 from '../../../image-from-above.jpg';
import Img5 from '../../../image-grid.jpg';
import Img6 from '../../../image-night-arcade.jpg';
import Img7 from '../../../image-pocket-borealis.jpg';
import Img8 from '../../../image-soccer-team.jpg';


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
            <Row>
                <Col>
                    <div>
                        <ul className={classes.ImageList}>                           
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img2} />
                                    <div className={classes.ListText}>
                                        <h2>DEEP EARTH</h2>
                                    </div>
                                </div>
                            </li>                                                  
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img6} />
                                    <div className={classes.ListText}>
                                        <h2>NIGHT ARCADE</h2>
                                    </div>
                                </div>
                            </li>                                                   
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img8} />
                                    <div className={classes.ListText}>
                                        <h2>SOCCER TEAM VR</h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img5} />
                                    <div className={classes.ListText}>
                                        <h2>THE GRID</h2>
                                    </div>
                                </div>
                            </li>
                        </ul>

                        <ul className={classes.ImageList}>
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img4} />
                                    <div className={classes.ListText}>
                                        <h2>FROM UP ABOVE VR</h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img7} />
                                    <div className={classes.ListText}>
                                        <h2>POCKET BOREALIS</h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img1} />
                                    <div className={classes.ListText}>
                                        <h2>THE CURIOSITY</h2>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={classes.DivForList}>
                                    <img src={Img3} />
                                    <div className={classes.ListText}>
                                        <h2>MAKE IT FISHEYE</h2>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
);

export default bottombody;
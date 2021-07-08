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

import Img_1 from '../../../image-curiosity-mobile.jpg';
import Img_2 from '../../../image-deep-earth-mobile.jpg';
import Img_3 from '../../../image-fisheye-mobile.jpg';
import Img_4 from '../../../image-from-above-mobile.jpg';
import Img_5 from '../../../image-grid-mobile.jpg';
import Img_6 from '../../../image-night-arcade-mobile.jpg';
import Img_7 from '../../../image-pocket-borealis-mobile.jpg';
import Img_8 from '../../../image-soccer-team-mobile.jpg';






const bottombody = () => (
    <div className={classes.BottomBodyContainer}>
        <Container>

            <div className="d-lg-none d-xl-none">
                <Row>
                    <Col>
                        <div className={classes.OurCreationTitle}>
                            <h1>OUR CREATIONS</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={classes.Mobile_Image}>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>Deep Earth</h2>
                                </div>
                                <img src={Img_2}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>Night Arcade</h2>
                                </div>
                                <img src={Img_6}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>Soccer Team VR</h2>
                                </div>
                                <img src={Img_8}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>The Grid</h2>
                                </div>
                                <img src={Img_5}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>From Up Above VR</h2>
                                </div>
                                <img src={Img_4}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>Pocket Borealis</h2>
                                </div>
                                <img src={Img_7}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>The Curiosity</h2>
                                </div>
                                <img src={Img_1}></img>
                            </div>
                            <div>
                                <div className={classes.Mobile_Text}>
                                    <h2>Make It Fisheye</h2>
                                </div>
                                <img src={Img_3}></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className="d-none d-lg-block">
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
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img2} />
                                            <div>
                                                <div className={classes.ListText}>
                                                    <h2>DEEP EARTH</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </li>                                                  
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img6} />
                                            <div className={classes.ListText}>
                                                <h2>NIGHT ARCADE</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>                                                   
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img8} />
                                            <div className={classes.ListText}>
                                                <h2>SOCCER TEAM VR</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img5} />
                                            <div className={classes.ListText}>
                                                <h2>THE GRID</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>

                            <ul className={classes.ImageList}>
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img4} />
                                            <div className={classes.ListText}>
                                                <h2>FROM UP ABOVE VR</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img7} />
                                            <div className={classes.ListText}>
                                                <h2>POCKET BOREALIS</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img1} />
                                            <div className={classes.ListText}>
                                                <h2>THE CURIOSITY</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <div className={classes.DivForList}>
                                            <img src={Img3} />
                                            <div className={classes.ListText}>
                                                <h2>MAKE IT FISHEYE</h2>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
);

export default bottombody;
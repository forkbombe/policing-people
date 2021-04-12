import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';
import Crosshead from "./Crosshead";
import Pentagon from "./Pentagon";

const WhoWeAre = () => (
    <div className="who-we-are">
        <Grid>
            <Row>
                <Col sm={12}>
                    <section>
                        <Crosshead text={["Who ", <b>we</b>, " are"]} />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col md={6} sm={6}>
                    <div className="box-padding">
                        {/*<Pentagon />*/}
                        <h5>IAN TOMSON-SMITH</h5>
                        <h3>Chief Executive</h3>
                        <p>
                            Ian is also the Chief Executive of Eagle View Digital Solutions,
                            a leading technology provider in the space of data integration.
                            Ian leads the management team at Policing People.
                        </p>
                    </div>
                </Col>
                { /* <Col md={4} sm={12}>
                    <div className="box-padding">

                        <h5>SARAH BAILEY</h5>
                        <h3>Director, Recruitment and HR</h3>
                        <p>
                            Sarah has extensive experience in recruitment having
                            worked at Executive Connections and Badenoch & Clark,
                            before moving into management roles in Corporate
                            HR at JP Morgan and Friends Provident.
                        </p>
                    </div>
                </Col> */ }
                <Col md={6} sm={6}>
                    <div className="box-padding">
                        {/*<Pentagon />*/}
                        <h5>BERNARD RIX</h5>
                        <h3>Director, Policing</h3>
                        <p>
                            Bernard Rix is the Chief Executive of CoPaCC Ltd,
                            the Publisher of PolicingInsight.com, and the Founder
                            of the World Class Policing Awards. He has worked
                            in policing for over 30 years, in the UK, across
                            Europe and in the Middle East.
                        </p>
                        </div>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default WhoWeAre;
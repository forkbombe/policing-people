import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Info = () => (
    <div className="info">
        <Grid>
            <Row>
                <Col lg={3} md={6} sm={12}>
                    <div className="infoBox bg-shade1">
                        <div className="box-padding">
                            <h3>What is Policing people?</h3>
                            <p>
                                PolicingPeople allows you to register
                                your interest, NOW, in supporting police
                                forces as a contractor, at this time of
                                global crisis - wherever in the world you
                                may be.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="infoBox bg-shade2">
                        <div className="box-padding">
                            <h3>Support police forces</h3>
                            <p>
                                We are working at pace with relevant policing
                                bodies, initially in the United Kingdom, to ensure
                                "Policing People" contractors are available to support
                                police forces within just a few weeks.
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="infoBox bg-shade3">
                        <div className="box-padding">
                            <h3>Candidates</h3>
                            <p>
                                Enables candidates with relevant policing-related
                                skills and experience to support the response
                                to Coronavirus (Covid-19)
                            </p>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <div className="infoBox bg-shade4">
                        <div className="box-padding">
                            <h3>Flexible interim resourcing</h3>
                            <p>
                                We are a technology solution that enables
                                flexible interim resourcing
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default Info;
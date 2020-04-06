import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BannerSmall } from "../components/Banner"
import Crosshead from "../components/Crosshead";
import OptimalEmploymentFramework from "../components/OptimalEmploymentFramework";
import Layout from "../components/layout"
import SEO from "../components/seo"

const CandidatesPage = () => (
    <Layout>
        <SEO title="Candidates" />

        <BannerSmall
            title="Candidates"
        />
        <div className="bg-pattern">
            <section>
                <Grid>
                    <Row>
                        <Col sm={8}>
                            <div className="box-padding right-only">
                                <Crosshead
                                    align="left"
                                    text={['What is ', <b>Policing People?</b>]}
                                />
                                <p>
                                    <b>
                                        PolicingPeople allows you to register your interest,
                                        NOW, in supporting police forces as a contractor,
                                        at this time of global crisis.
                                    </b>
                                </p>
                                <p>
                                    Right now, we are looking for those with relevant
                                    policing-related skills and experience - wherever in the
                                    world you may be.
                                </p>
                                <p>
                                    Current (or recent) security clearance is desirable,
                                    though not essential for your registration now.
                                </p>
                                <p>
                                    We are working at pace with relevant policing bodies,
                                    initially in the United Kingdom, to ensure that "Policing People"
                                    contractors are available to support police forces within just a
                                    few weeks
                                </p>
                            </div>
                        </Col>
                        <Col sm={4}>
                            <div className="box-padding left-only">
                                <Crosshead
                                    align="left"
                                    text="Benefits"
                                />
                                <ul>
                                    <li>
                                        Gives you significant flexibility to work when you want.
                                    </li>
                                    <li>
                                        Enables candidates with relevant policing-related skills and experience to support the policing response to Coronavirus (Covid-19).
                                    </li>
                                    <li>
                                        Both payroll and insurance are managed by Policing People - enabling hassle free employment, and minimising the burden on policing
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
            <OptimalEmploymentFramework register={true} />
        </div>
    </Layout>
);

export default CandidatesPage
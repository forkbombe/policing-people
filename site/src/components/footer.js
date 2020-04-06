import React from "react";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = () => (
    <footer>
        <section>
            <Grid>
                <Row>
                    <Col lgOffset={1} mdOffset={0} lg={3} md={12}>
                        Policing People
                        <br /><br />
                    </Col>
                    <Col lg={3} md={12}>
                        <span className="color-brand2"><b>info@policingpeople.com</b></span>
                        <br /><br />
                    </Col>
                    <Col lg={3} md={12}>
                        © {new Date().getFullYear()} by Policing People Ltd
                        <br /><br />
                    </Col>
                </Row>
            </Grid>
        </section>
    </footer>
);

export default Footer;
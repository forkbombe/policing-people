import React from "react"
import Layout from "../components/layout"
import RegisterForm from "../components/RegisterForm"
import SEO from "../components/seo"
import Crosshead from "../components/Crosshead";
import {Grid, Row, Col} from "react-flexbox-grid";

const RegisterPage = () => (
    <Layout>
        <SEO title="Register" />
        <div className="bg-pattern">
            <section>
                <Grid>
                    <Row>
                        <Col mdOffset={2} sm={12} md={8}>
                            <div className="shadow" id="register-form">
                                <div className="box-padding">
                                    <section>
                                        <RegisterForm />
                                    </section>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        </div>
    </Layout>
);

export default RegisterPage
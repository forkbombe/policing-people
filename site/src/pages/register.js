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
                                    <div className="aligncenter">
                                    <Crosshead
                                        align="center"
                                        text={[<b>Register</b>, ' your details']} />

                                        <p>
                                            By completing and submitting this form, you give Policing
                                            People Ltd permission to store and use your data in compliance
                                            with local laws and regulations; to seek further information
                                            from you, relevant to Policing People providing contract staff
                                            to forces worldwide; and to contact you with details of suitable
                                            vacancies as they arise.
                                        </p>
                                    </div>
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
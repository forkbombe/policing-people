import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';
import Crosshead from "./Crosshead";
import RegisterButton from "./RegisterButton";

const OptimalEmploymentFramework = () => (
    <div className="optimal-employment-framework">
        <div className="panel">
            <section>
                <Grid>
                    <Row>
                        <Col md={6}>
                            <div className="panelLeft">
                                <div className="box-padding right-only">
                                    <Crosshead
                                        align="left"
                                        text={['Optimal ', <b>Employment</b>, ' framework']}
                                    />
                                    <p><b>- for example, taking care of UK IR35 implications.</b></p>
                                    <p>
                                        The Policing People platform can remove any additional complexities of engaging with
                                        interim staff as it is a Professional Employment Organisation (PEO). A PEO
                                        is a new payroll solution that jointly employs the contractor with the Force.
                                    </p>
                                    <p>
                                        The contractor is paid full PAYE and employment responsibilities are shared.
                                        The PEO accepts liability for payroll, Tax, NICs, pension, app levy,
                                        legal and tribunal, insurances and all statutory pay. The force simply
                                        pays a single amount to the PEO.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="panelRight aligncenter">
                                <div className="box-padding left-only">
                                    <img src={'/mail.png'} alt="Register now" />
                                    <h2>Register Now</h2>
                                    <p>
                                        Registration is simple:<br />
                                        Tell us who you are<br />
                                        Provide key location, contact and related details<br />
                                        Tell us what you are available to do
                                    </p>
                                    <p>
                                        <RegisterButton theme="white" />
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>
        </div>
    </div>
);

export default OptimalEmploymentFramework;
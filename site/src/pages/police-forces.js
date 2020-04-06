import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Crosshead from "../components/Crosshead";
import {Grid, Row, Col} from "react-flexbox-grid";
import {BannerSmall} from "../components/Banner";
import OptimalEmploymentFramework from "../components/OptimalEmploymentFramework";
import TwoCol from "../components/TwoCol";

const PoliceForcesPage = () => (
    <Layout>
        <SEO title="Police Forces" />
        <BannerSmall
            title="Police Forces"
        />
        <div className="bg-pattern">
            <section className="aligncenter">
                <Grid>
                    <Row>
                        <Col smOffset={2} sm={8}>
                            <Crosshead text={['What is ', <b>Policing People?</b>]} />

                            <p>
                                We are a technology solution that enables flexible interim resourcing.
                            </p>
                            <p>
                                This allows police forces and other relevant organisations to directly
                                match requirements with available contractor resources, and then secure these resources for immediate & scheduled deployment.
                            </p>
                            <p>
                                The service includes an internal admin web interface and an external mobile user application
                                and portal, all with total configurability to enable rapid delivery,
                                connected to a secure cloud-based database.
                            </p>
                            <p>
                                Support, contractor payment and insurance all included.
                            </p>
                            <p>
                                Uses a proven technology platform that has been used for many years in
                                the United Kingdom and worldwide, in transport, in the UK's
                                National Health Service and in Local Government.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </section>

                <section>
                    <TwoCol
                        contentLeft={(
                            <div className="alignleft box-padding right-only">
                                <div>
                                    <Crosshead
                                        align="left"
                                        text={["The system is ", <b>intuitive</b>, " and ", <b>easy</b>, " to use"]}
                                    />
                                    <p><b>Admin Portal</b></p>
                                    <ul>
                                        <li>
                                            Users within the Police Force can log in and manage
                                            ALL their temporary and project-based work force
                                        </li>
                                        <li>
                                            Create a new project needing resource
                                        </li>
                                        <li>
                                            Add roles to that project
                                        </li>
                                        <li>
                                            Detail the commercials for any accepted candidate
                                        </li>
                                        <li>Specify location</li>
                                        <li>
                                            Identify whether a candidate will be accepted based
                                            on meeting criteria or need interview
                                        </li>
                                        <li>
                                            Add known candidates
                                        </li>
                                        <li>
                                            Push Roles out to all registered Candidates
                                            and any current on line recruitment portals
                                        </li>
                                    </ul>

                                    <Crosshead
                                        align="left"
                                        text={['Validation & Verification']}
                                    />
                                    <p>
                                        Through facial recognition software, our system (either via our app or a webcam on the users pc) prompts the user to turn their head left, right, up, or down during the authentication process.
                                        We then use this image to compare with the photographic identity documents collected and verify the applicant’s identity.
                                    </p>
                                </div>
                            </div>
                        )}
                        contentRight={
                            <div className="alignleft box-padding left-only">
                                <div>
                                    <Crosshead
                                        align="left"
                                        text={['There are ', <b>three</b>, ' web portals']}
                                    />
                                    <p>
                                        <b>Admin Portal</b><br />
                                        <b>Client Portal</b><br />
                                        <b>Candidate / User Portal</b>
                                    </p>
                                    <ul>
                                        <li>
                                            One Portal allows overall control of all resourcing
                                        </li>
                                        <li>
                                            A secondary portal allows reduced functionality
                                            for regional or local forces under one account.                                    </li>
                                        <li>
                                            A separate portal allows individual users to create and
                                            update their profiles in addition to their mobile apps
                                        </li>
                                    </ul>

                                    <Crosshead
                                        align="left"
                                        text={['Mobile app']}
                                    />
                                    <p>
                                        <b>Apple and Android Mobile App for users</b>
                                    </p>
                                    <ul>
                                        <li>
                                            Central to onboarding users is the app
                                        </li>
                                        <li>
                                            Located in app store for iPhone & android
                                        </li>
                                        <li>
                                            Really easy to use
                                        </li>
                                        <li>
                                            Allows candidates to register, set when they are available for work...
                                        </li>
                                        <li>
                                            …and receive immediate alerts which they can accept
                                        </li>
                                        <li>
                                            The app can even be used for registering on site and payroll
                                        </li>
                                        <li>Everything a Candidate needs..</li>
                                    </ul>
                                </div>

                            </div>
                        }
                    />

            </section>

            <section>
                <TwoCol
                    contentLeft={(
                        <div className="alignmiddle aligncenter box-padding right-only">
                            <div>
                                <div className="h2 color-brand1">
                                    <b>THE SMARTER COMPLIANCE SOLUTION</b>
                                </div>
                                <br />
                                <img src={'/digital-world.png'} alt='' />
                            </div>
                        </div>
                    )}
                    contentRight={(
                        <div className="alignmiddle aligncenter box-padding right-only">
                            <div>
                                <div className="h2 color-brand1">
                                    <b>FACIAL RECOGNITION LIVENESS CHECKING</b>
                                </div>
                                <br />
                                <img src={'/facial-recognition.png'} alt='' />
                            </div>
                        </div>
                    )}
                />
            </section>

            <section>
                <Grid>
                    <Row>
                        <Col sm={6}>
                            <div className="box-padding right-only">
                                <p>
                                    On setup, the identity of the candidate is verified.
                                    The nature of this validation can be set by the Force,
                                    but the usual validation approach is via passport,
                                    identity card or photo driving licence
                                </p>
                                <p>
                                    The photo ID is photographed, and then uploaded into the system.
                                    The candidate is then videoed (to ensure that a real person is
                                    behind the validation attempt)
                                </p>
                                <p>
                                    The video of the face is then matched to the passport application photo,
                                    and identity validated. This is a proven approach, with over 50
                                    forensic tests completed on the face and document
                                </p>
                                <p>
                                    Proof of address documentation is usually bank statement or utility bill
                                    from the last three months, with this cross referenced to electoral roll information
                                </p>
                                <p>
                                    The Force can specify, by role, additional validation documentation that is
                                    required (e.g. educational certificates, professional memberships etc)
                                </p>
                                <p>
                                    The service has been deployed in the United Kingdom's National Health Service,
                                    who have stringent validation requirements around ID and qualifications.
                                    We are confident we can meet the requirements of Police Forces
                                </p>
                            </div>
                        </Col>
                        <Col sm={6}>
                            <div className="box-padding left-only">
                                <Crosshead
                                    align="left"
                                    text={['Benefits']}
                                />
                                <ul>
                                    <li>
                                        It accelerates placement, and enhance choice for both forces
                                        and staff, for all interim policing activities, including all
                                        supporting roles e.g. IT contractors.
                                    </li>
                                    <li>
                                        A "real time" offer and acceptance process.
                                    </li>
                                    <li>
                                        Significant cost savings to forces.
                                    </li>
                                    <li>
                                        Includes verified ID and experience validation, to standards set by the force.
                                    </li>
                                    <li>
                                        Provides the medium / long term goal of standardisation of the staff onboarding process.
                                    </li>
                                    <li>
                                        Utilises existing staff databases and also builds bespoke databases based on
                                        requirements for others with specialist skills to support front line policing.
                                    </li>
                                    <li>
                                        In the UK, delivers optimal management of IR35 legislation.
                                    </li>
                                    <li>
                                        PolicingPeople deals with contractor payments.
                                    </li>
                                    <li>
                                        Delivers complete transparency and better visibility of future costs.
                                    </li>
                                    <li>
                                        A monthly licence fee gives cost certainty.
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </section>

            <OptimalEmploymentFramework />
        </div>
    </Layout>
);

export default PoliceForcesPage
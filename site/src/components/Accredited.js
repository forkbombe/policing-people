import React from "react";
import Crosshead from "./Crosshead";
import { Grid, Row, Col } from 'react-flexbox-grid';

const Accredited = () => (
    <div className="accredited">
        <Grid>
            <Row>
                <Col sm={12}>
                    <section>
                        <Crosshead text={["As ", <b>accredited</b>, " by"]} />
                    </section>
                </Col>
            </Row>
            <Row>
                <Col smOffset={2} sm={8}>
                    <img src={'/logos-accredited.png'} alt="Accredited by NPCC and PoliceICT" />
                </Col>
            </Row>
        </Grid>
    </div>
);

export default Accredited;
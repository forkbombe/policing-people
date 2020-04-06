import React from "react"
import { Grid, Row, Col } from 'react-flexbox-grid';

const TwoCol = ({contentLeft, contentRight}) => (
    <Grid>
        <Row>
            <Col sm={6}>
                {contentLeft}
            </Col>
            <Col sm={6}>
                {contentRight}
            </Col>
        </Row>
    </Grid>
);

export default TwoCol;
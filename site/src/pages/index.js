import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/Banner"
import Info from "../components/Info"
import {Col, Grid, Row} from "react-flexbox-grid";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Info />
      <Grid>
          <Row>
              <Col smOffset={2} sm={8}>
                  <br />
                    <p>* At this time, we are particularly keen to hear from those with skills and experience in: communications; community support; call handling; enforcement support; ICT support; investigation support; policy development; statement taking; and training.</p>
              </Col>
          </Row>
      </Grid>
  </Layout>
);

export default IndexPage
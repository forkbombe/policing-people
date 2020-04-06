import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner } from "../components/Banner"
import Info from "../components/Info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Info />
  </Layout>
);

export default IndexPage
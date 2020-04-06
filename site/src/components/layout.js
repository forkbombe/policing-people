/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import {MobileNavigation} from "./navigation";
import Accredited from "./Accredited";
import Footer from "./footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <div id="page-wrap">
          <div>
              <MobileNavigation />
          </div>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="bg-grey1">
              <main>
                  {children}
              </main>
              { /* <Accredited /> */ }
          </div>
          <Footer />
      </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

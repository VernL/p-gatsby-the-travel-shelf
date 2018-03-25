import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "font-awesome/css/font-awesome.css";

const DefaultLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: "description",
          content:
            "A magazine and index of beautiful global independent bookstores"
        }
      ]}
    />
    <NavBar />
    {children()}
    <Footer />
  </div>
);

export default DefaultLayout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

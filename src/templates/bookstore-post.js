import React, { Component } from "react";
import Form from "../components/EmailForm/EmailForm";
import "./bookstore-post.scss";

const bookstorePost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <section
        id="hero-bookstore"
        className="py-5 text-white"
        data-type="background"
        data-speed="2"
      >
        <div className="primary-overlay">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col text-center">
                <h1 className="display-4 myhero text-center">
                  {post.frontmatter.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="blog-bookstore">
        <div className="container">
          <div className="row justify-content-center" id="primary">
            <main id="content" className="col-md-8">
              <article
                className="post"
                style={{ padding: "30px 20px", marginBottom: "40px" }}
              >
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </article>
            </main>

            <aside className="col-md-4">
              <div className="widget">
                <h4>Join Our Mailing List</h4>
                <p>Keep up-to-date with the latest news!</p>
                <Form />
              </div>

              <div className="widget">
                <h4 className="connect">Info</h4>
                <p className="address">
                  <strong>{post.frontmatter.title}</strong>
                </p>
                <p className="address">{post.frontmatter.streetAddress}</p>
                <p className="address">
                  {post.frontmatter.addressLocality},{" "}
                  {post.frontmatter.addressRegion} {post.frontmatter.postalCode}
                </p>
                <p className="address">{post.frontmatter.addressCountry}</p>
                <p className="address">{post.frontmatter.telephone}</p>
                <p className="social">
                  {post.frontmatter.twitter ? (
                    <a href={post.frontmatter.twitter}>
                      <i className="fa fa-twitter-square" />
                    </a>
                  ) : null}
                  {post.frontmatter.facebook ? (
                    <a href={post.frontmatter.facebook}>
                      <i className="fa fa-facebook-square" />
                    </a>
                  ) : null}
                  {post.frontmatter.instagram ? (
                    <a href={post.frontmatter.instagram}>
                      <i className="fa fa-instagram" />
                    </a>
                  ) : null}
                </p>
              </div>

              <div className="widget">
                <h4 className="connect">Amenities</h4>
                <p className="social">
                  {post.frontmatter.coffee ? (
                    <i className="fa fa-coffee" aria-hidden="true" />
                  ) : null}
                  {post.frontmatter.wifi ? (
                    <i className="fa fa-wifi" aria-hidden="true" />
                  ) : null}
                  {post.frontmatter.plug ? (
                    <i className="fa fa-plug" aria-hidden="true" />
                  ) : null}
                  {post.frontmatter.calendar ? (
                    <i className="fa fa-calendar" aria-hidden="true" />
                  ) : null}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default bookstorePost;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        url
        events
        telephone
        addressCountry
        addressRegion
        addressLocality
        postalCode
        streetAddress
      }
    }
  }
`;

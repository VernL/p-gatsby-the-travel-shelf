import React from 'react'
import Link from 'gatsby-link'
import StoreCard from '../components/StoreCard/StoreCard'

import './index.scss'

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <div className='top'>
        <section id='showcase' className='py-5 text-white'>
            <div className='primary-overlay'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col text-center'>
                            <h1 className='display-4 myhero text-center'>A magazine of beautiful independent bookstores
                                around the world</h1>
                            <Link to='/about' className='btn btn-outline-warning btn-lg read'><i
                                className='fa fa-arrow-right'/> Read More </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id='portfolio'>
            <div className='container'>
                <h2 className='text-center'>Welcome To The Travel Shelf</h2>
                <hr align='center' width='30%'/>
                <p className='text-center header'>Browse Our Portfolio And Visit Your Local Independent Bookstores
                    Today!</p>
                <div className='row no-gutters d-flex flex-wrap justify-content-around align-items-baseline'>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                      <StoreCard
                        slug={node.fields.slug}
                        title={node.frontmatter.title}
                        excerpt={node.excerpt}
                        thumbnail={node.frontmatter.thumbnail.childImageSharp.responsiveSizes.src}
                      />
                  ))}
                </div>
            </div>
        </section>

    </div>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 400) {
                src
                srcSet
                sizes
                }
              }
            }
          }
           fields {
            slug
          }
          excerpt
        }
      }
    }
  }`


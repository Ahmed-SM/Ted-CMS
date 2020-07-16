import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/content"
import Card from "../components/card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
          }
          internal{
            content
          }
          fields{
            slug
          }
        }
      }
    }
  }
`)
return(
  <Layout>
    <SEO title="Home" />
    <Content>
      {data.allMarkdownRemark.edges.map((edge, index)=>{
        return(
          <>
          <Card CardHeader={edge.node.frontmatter.title} CardContent={edge.node.internal.content} index={index} path={`${edge.node.fields.slug}`}/>
          </>
        )

      })}
    </Content>
  </Layout>
)}

export default IndexPage
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
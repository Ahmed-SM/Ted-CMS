import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Card from "../components/card"
import { useStaticQuery, graphql } from "gatsby"

export const data = graphql`
query(
  $slug: String!
) {
    markdownRemark(
      fields:{
        slug:{
          eq:$slug
        }}){
          frontmatter{
            title
          }
          html
        }
      }
`
const Blog = (props) => {
  return(
    <Layout>
      <Content>
        <div className={"align"} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}} />
      </Content>
    </Layout>
  )}
  
  export default Blog;
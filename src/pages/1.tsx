// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import Content from "../components/content"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const About: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="حول" />
    <div style={{flex:"1"}}>
      <h1>حول</h1>

    </div>
  </Layout>
)

export default About

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`

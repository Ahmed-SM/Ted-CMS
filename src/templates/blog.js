import React from "react"
import Layout from "../components/layout"
import Content from "../components/content"
import Card from "../components/card"

const Blog = () => {
  return(
    <Layout>
      <Content>
        <Card CardHeader={"test"} CardContent={"test"} index={"1"}/>
      </Content>
    </Layout>
  )}
  
  export default Blog;
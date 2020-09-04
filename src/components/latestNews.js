import { Link } from "gatsby"
import ServicesCarousel from "../components/carousel";
import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Card from "../components/card";
const LatestNews = () => {
    const data = useStaticQuery(graphql`
query {
  allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/news/"} }) {
    edges {
      node {
        frontmatter {
          title
        }
        internal{
            content
          }
        fields {
          slug
        }
      }
    }
  }
}
`)
return(
    <ServicesCarousel header={ <h2 className={"content-header--red"}><span className={"normal"}>أخر</span> الأخبار </h2>}>
        {data.allMarkdownRemark.edges.map((edge, index)=>{
        return(
        <>
        <Card title={`${edge.node.frontmatter.title}`} index={index} path={`${edge.node.fields.slug}`}/>
        </>
        )

    })}
    </ServicesCarousel>
)
}

export default LatestNews;
const StyledCarousel = styled.div`
height: ${props => props.height ? props.height : "341px"};
background: ${props => props.color ? props.color : "#dbe7f0"};
display:flex;
flex-direction:${props => props.flexDirection ? props.flexDirection : "row"};
padding: 30px 0;
text-align: center;
.content-header--red{
  color:crimson;
  .normal{
    font-weight:500;
  }
}
    .content-header--white{
      color:white;
      .normal{
        font-weight:500;
      }
    }

`;
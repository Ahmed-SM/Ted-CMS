import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Content from "../components/content"

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
          htmlAst
        }
      }
`
const Blog = (props) => {
  return(
    <Layout>
      <Content flexDirection={"row"}>
      {props.data.markdownRemark.html.split("<p>----</p>").map((card, index) =>{
        console.log(card)
                return(
        <StyledCard key={index}>
        <StyledImgWrapper>
    
        </StyledImgWrapper>
          <h3 dangerouslySetInnerHTML={{__html: props.data.markdownRemark.frontmatter.title}} ></h3>
          <div className={"align"} dangerouslySetInnerHTML={{__html: card}} />
          <StyledButton>عودة</StyledButton>
        </StyledCard>
      )})}
      </Content>
    </Layout>
  )}
  
  export default Blog;
  const StyledCard = styled.div`
min-width: 262px;
max-width: 980px;

margin: 20px 20px;
padding: 20px 20px;
background: #FFFFFF;
border-radius: 15px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
position: relative;
text-align:center;
transition: transform 0.3s ease-in-out;
p{
  margin: 15px 0 20px 0;
}
h3{
  margin:20px;
  color: hsla(0, 0%, 0%, 0.8);
}
a{
  text-decoration: none;
}
video{
  border-radius: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
}

`;
const StyledImgWrapper = styled.div`
width: 100%;
height:200px;
border-radius: 15px;
background:#dbe7f0;
img{
  border-radius: 15px;
  object-fit: cover;
}
`;
const StyledButton = styled.button`
  background: linear-gradient(90deg, #DC143C 0%, #B70025 100%);
  border-radius:25px;
  color:white;
  border:none;
  height:35px;
  width:90px;
  margin:0 5px;
  cursor:pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
    background-image: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
  }
`;
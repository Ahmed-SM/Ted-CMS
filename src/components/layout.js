/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

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
    <>
      <StyledContainer>
        <StyledNavbar>
          <div class="tab">Tab1</div>
          <div class="tab">Tab2</div>
          <div class="logo">
          <h1>Ted</h1>
          <span class="small-circle">u</span>
          </div>
          <div class="tab">Tab3</div>
          <div class="tab">Tab4</div>
        </StyledNavbar>
        {children}
      </StyledContainer>
    </>
  )
}
{/* <Header siteTitle={data.site.siteMetadata.title} /> */}
// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
const StyledContainer = styled.div`
  position: absolute;
  top: 0px; 
  bottom: 0px;
  min-width: 320px;
  width:100%;
  max-width: 500px;
  display:flex;
  flex-direction:column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background:  #FCE373;
  height: 100%;

  .content{
    background: #FCE373;
    flex-grow:1;
    padding:0 25px;  
  }
  .card-wrapper{
    position: relative;
    width: fit-content;
    height: 111px;
    margin: 40px auto;
  }
  .card{
  width: 100%;
  height: 90px;
  background: #231F20;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  }
  .card-circle{
    position: absolute;
    top:-27px;
    left:-20px;
    width: 66px;
    height: 66px;
    border-radius:66px;
    background: #FCE373;
    border: 3px solid #231F20;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index:1;
    text-align: center;
  }
  .card h4{
    font-style: normal;
    margin: 0;
    font-weight: 300;
    font-size: 24px;
    text-align: center;
    padding-top: 5px;
    font-family: Post No Bills Jaffna Light;
    color: #FCE373;
  }
  .card p{
    margin:0;
    margin-left:15px;
    color: #FCE373;
    font-family: Post No Bills Jaffna Light;
  }
  .content .title {
    font-style: normal;
    font-weight: 300;
    font-family: Post No Bills Jaffna Light;
    font-size: 55px;
    height: fit-content;
    margin: 0;
    padding: 0;
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .content .sub-title {
    font-style: normal;
    font-family: Post No Bills Jaffna Light;
    font-weight: 300;
    font-size: 22px;
    margin: 0;
    
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .content .circle-index {
    font-weight: 300;
    font-family: Post No Bills Jaffna Light;
    margin: 0;
    line-height: 70px;
    font-size: 36px;
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
const StyledNavbar = styled.nav`
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  height: 54px;
  background: #CCA69A;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  font-family: Post No Bills Jaffna Light;

  .tab{
    text-align: center;
    width: 50px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .logo{
    position: relative;

    margin-top:20px;
    width: 66px;
    height: 66px;
    border-radius:66px;
    background: #cc4e4e;
    border: 3px solid #CCA69A;
    z-index:1;
  }
  .logo .small-circle{
    width: 28px;
    height: 28px;
    position: absolute;
    top:45px;
    right:0px;
    border-radius:66px;
    background: #5dcc4e;
    color:white;
    text-align: center;
    z-index:2;
    font-family: Post No Bills Jaffna Light;
  }
  .logo h1{
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin:0;
    margin-top:14px;
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    color: white;
    font-family: Post No Bills Jaffna Light;
  }

`
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
import ted from '../images/ted.png'; 

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
          <div className="img">
            <img src={ted} alt="Logo" width={300} />
          </div>
          <div class="menu">
            <div class="tab">بوابتي</div>
            <div class="tab">شركاؤنا</div>
            <div class="tab">المكتبة الرقمية</div>
            <div class="tab">تواصل معنا</div>
          </div>
        </StyledNavbar>
        {/* <div class="fullscreen-video-wrap">
      <video src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" autoplay="" loop="true">
    </video>
    <div class="header-overlay"></div>
    </div> */}
        {children}
        <StyledFooter>
        </StyledFooter>
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
  display:flex;
  flex-direction:column;
  background:  #f0f0eb;
  height: fit-content;
  
  .title {
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
  .sub-title {
    font-style: normal;
    font-family: Post No Bills Jaffna Light;
    font-weight: 300;
    font-size: 22px;
    margin: 0;
    
    text-align: center;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .fullscreen-video-wrap{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100vh;
    overflow:hidden;
  }
  
  .fullscreen-video-wrap video{
    min-height:100%;
    min-width:100%;
  }
  .header-overlay{
    height:100vh;
    position: absolute;
    top:0;
    left:0;
    width:100vw;
    z-index:1;
    background:#000000;
    opacity:0.85;
  }
  

`
const StyledNavbar = styled.nav`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  border-radius:0 0 66px 66px;
  background: #B68A35;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  font-family: Post No Bills Jaffna Light;
  margin-bottom:80px;
  padding:20px 0;

  .tab{
    font-family: 'Tajawal', sans-serif;
    color:white;
    text-align: center;
    width: 120px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .logo{
    position: relative;
    margin-top:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    width: 66px;
    height: 66px;
    border-radius:66px;
    background: #cc4e4e;
    border: 3px solid #B68A35;
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
    text-align: center;
    font-weight: 300;
    font-size: 24px;
    color: white;
    font-family: Post No Bills Jaffna Light;
  }
  .menu{
    display:flex;
    flex-direction:row-reverse;
  }
  img{
    margin:0px 0;
  }
  .img{
    text-align:right;
  }
  

`
const StyledFooter = styled.footer`
  position: fixed;
  bottom:0;
  display:flex;
  z-index:2;
  flex-direction:row-reverse;
  justify-content:space-around;
  align-items:center;
  width: 100%;
  height: 44px;
  background: #B68A35;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  font-family: Post No Bills Jaffna Light;


`
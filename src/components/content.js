import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Content = ({ ViewTitle, ViewSubTitle, children }) => (
  <StyledContent>
          {children}
  </StyledContent>
)


export default Content;
const StyledContent = styled.div`
    background: #FCE373; 
    display:flex;
    justify-content: space-around;
    align-items: center;
    max-width:1000px;
    margin: 0 auto;
    flex-wrap:wrap;
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
`;

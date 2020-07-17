import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Content = ({ ViewTitle, ViewSubTitle, children }) => (
  <StyledContent >
          {children}
  </StyledContent>
)


export default Content;
const StyledContent = styled.div`
    background: #F2F2F2; 
    display:flex;
    flex-wrap:wrap;
    flex-direction: row-reverse;
    width:100%;
    justify-content: space-around;
    align-items: space-around;
    align-content: space-around;
    margin: 60px 0 10px 0;
    padding: 0 20px;

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

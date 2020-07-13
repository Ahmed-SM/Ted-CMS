import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"


const Card = ({ CardHeader, CardContent, index }) => (
  <StyledCard>
     <div class="card-circle"><h1 class="circle-index">{index+1}</h1></div>
     <div class="card" dir="auto">
         <h4>{CardHeader}</h4>
         <p>{CardContent}</p>
     </div>
  </StyledCard>
)
export default Card;
const StyledCard = styled.div`
    margin: 40px 10px 10px 25px;
    position: relative;
    width: fit-content;
    height: fit-content;
 
 
  .card{
  min-width: 320px;
  max-width: 320px;
  width: 100%;
  min-height: 100px;
  background: #B68A35;
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
    background: #F2F2F2;
    border: 3px solid #B68A35;
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
    font-family: 'Tajawal', sans-serif;
    color: #F2F2F2;
  }
  .card p{
    margin:4px 15px;
    color: #F2F2F2;
    font-family: 'Tajawal', sans-serif;
  }
  .circle-index {
    font-weight: 300;
    font-family: 'Tajawal', sans-serif;
    margin: 0;
    line-height: 70px;
    font-size: 36px;
    text-align: center;
    color: #B68A35;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
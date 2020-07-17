import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlingBall } from '@fortawesome/free-solid-svg-icons';

const Card = ({ CardHeader, CardContent, index, path }) => (
  <StyledCard>
    <Link className="boneless" to={path}>
      <div className="card-circle">
        <FontAwesomeIcon icon={faBowlingBall} color={"#333"} size={"3x"}/>
      </div>
      <div className="card" dir="auto">
          <h4>{CardHeader}</h4>
      </div>
    </Link>
  </StyledCard>
)
export default Card;
const StyledCard = styled.div`

    position: relative;
    min-width: 320px;
    max-width: 320px;
    width: 100%;
    height: 275px;
    min-height: 200px;

  .boneless{
    text-decoration: none;
  }
  .card{
  display:flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 175px;
  min-height: 100px;
  background: #B68A35;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  
  }
  .card-circle{
    position: absolute;
    top:-50px;
    left:35%;
    width: 96px;
    height: 96px;
    border-radius:66px;
    background: #F2F2F2;
    border: 3px solid #B68A35;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index:1;
    text-align: center;
    display:flex;
    justify-content: center;
    align-items: center;
    align-content: center;
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
    padding:0px 10px;

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
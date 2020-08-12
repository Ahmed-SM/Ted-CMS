import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const Card = ({title}) => (
    <StyledCard>
      <StyledImgWrapper>

      </StyledImgWrapper>
      <h3>قراءة في كتاب {title}</h3>
      <div className="buttonsWrapper">
        <StyledButton>أبدء</StyledButton>
      </div>
  </StyledCard>
)
export default Card;
const StyledCard = styled.div`
min-width: 262px;
height: 350px;
margin: 20px 20px;
padding: 20px 20px;
background: #FFFFFF;
border-radius: 15px;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
position: relative;
text-align:center;
h3{
  margin:20px;
}

`;
const StyledImgWrapper = styled.div`
width: 100%;
height:200px;
border-radius: 15px;
background:#dbe7f0;
`;
const StyledButton = styled.button`
  background: linear-gradient(90deg, #DC143C 0%, #B70025 100%);
  border-radius:25px;
  color:white;
  border:none;
  height:35px;
  width:90px;
  margin:0 5px;
`;
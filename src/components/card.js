import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"


const Card = ({title, path}) => (
    <StyledCard>
      <Link to={path}>
      <StyledImgWrapper>

      </StyledImgWrapper>
      <h3>{title}</h3>
      <div className="buttonsWrapper">
        <StyledButton>أبدء</StyledButton>
      </div>
      </Link>
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
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
position: relative;
text-align:center;
transition: transform 0.3s ease-in-out;
&:hover{
  transform:scale(1.05);
}
h3{
  margin:20px;
  color: hsla(0, 0%, 0%, 0.8);
}
a{
  text-decoration: none;
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
  cursor:pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
    background-image: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
  }
`;
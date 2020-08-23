import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight,  faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";


const ServicesCarousel = ({ children, header }) => {
  const [move, setMove] = useState({value:"0", count:0, shift:"304"})
  const ButtonRef = useRef();
  const handleRightMove = () => {
    if(move.count > -ButtonRef.current.childElementCount + (ButtonRef.current.childElementCount /2) +1){
      setMove(prevState  =>({ ...prevState , value: +prevState.value + +prevState.shift, count: prevState.count-1}))
    }
  };
  const handleLeftMove = () => {
    if( ButtonRef.current.childElementCount % 2 != 0){
      if(move.count < ButtonRef.current.childElementCount - (ButtonRef.current.childElementCount /2)-1){
      setMove(prevState  =>({ ...prevState , value: +prevState.value - +prevState.shift, count: prevState.count+1}))
      }
    }else{
      if(move.count < ButtonRef.current.childElementCount - (ButtonRef.current.childElementCount /2)){
        setMove(prevState  =>({ ...prevState , value: +prevState.value - +prevState.shift, count: prevState.count+1}))
    }
  }
  
  };
  useEffect(()=>{
  if ( ButtonRef.current.childElementCount % 2 == 0 && move.value === "0") {
    setMove(prevState  =>({ ...prevState , value:"149"}))
  }
    ButtonRef.current.style.transform = `translateX(${move.value}px)`;
  },[move.value])

  return (
    <StyledContent height={"fit-content"} color={"white"} flexDirection={"column"}>
     {header}
     <div  className={"flex-parent"}>
      <FontAwesomeIcon  className={"pointer"}  icon={faAngleRight} color={"#989898"} size={"3x"}  onClick={handleRightMove}/>
       <div className={"overflow"}>
        <div ref={ButtonRef} className={"flex testing"}>
          {children}
        </div>
       </div>
       <FontAwesomeIcon className={"pointer"}  icon={faAngleLeft} color={"#989898"} size={"3x"}  onClick={handleLeftMove}/>
     </div>
 
    </StyledContent>
  );
};
export default ServicesCarousel;

const StyledContent = styled.div`
height: ${props => props.height ? props.height : "341px"};
background: ${props => props.color ? props.color : "#dbe7f0"};
display:flex;
align-items:center;
flex-direction:${props => props.flexDirection ? props.flexDirection : "row"};
padding: 30px 0;
.flex-parent{
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  flex-wrap: nowrap;

}
.flex{
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  flex-wrap: nowrap;
  transform: translateX(0px);
  transition: transform 0.3s ease-in-out;

}
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
    .testing{

      flex-wrap: nowrap;
 
    }
  img{
    margin-bottom:0;
  }
  .overflow{
    overflow:hidden;
    width:895px;  
    
  }
  button{
    z-index:1;
  }
  .pointer{
    cursor:pointer;
  }
  overflow:hidden;
`;
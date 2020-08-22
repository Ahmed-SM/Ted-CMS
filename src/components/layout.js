/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useRef, useEffect } from 'react';
import "react-multi-carousel/lib/styles.css";
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import ted from '../images/ted.png'; 
import main2 from '../assets/main2.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import Card from "./card";
import ServicesCarousel from "./carousel";
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  // document.body.dir="rtl";
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
    <StyledHeader>
      <div className="HeaderContainer">
        <div className="img">
          <img src={ted} alt="Logo" width={250} />
        </div>
        <div className="menuWrapper">
          <div className="menu">
            <div className="tab">الرئيسية</div>
            <div className="tab">حول</div>
            <div className="tab">المجالات</div>
            <div className="tab">المكتبة الرقمية</div>
            <div className="tab">فكرة</div>
            <div className="tab">المركز الإعلامي</div>
            <div className="tab">روابط مهمة</div>
            <div className="tab">تواصل معنا</div>
          </div>
        </div>
        <div className="buttonsWrapper">
        {/* <StyledButton>التسجيل</StyledButton>
        <StyledButton>دخول</StyledButton> */}
        </div>
      </div>
    </StyledHeader>
    <StyledContent height={"460px"}>
    <div className={"flex-main"}>
      <div>
        <img src={main2} alt="Logo" width={420} />
      </div>
      <div className={"flex-col"}>
        <h2>التعليم الإلكتروني</h2>
        <p>تعلم وأنت في مكانك</p>
      </div>
    </div>
    </StyledContent>
        <ServicesCarousel header={ <h2 className={"content-header--red"}><span className={"normal"}>المجالات</span> التعليمية </h2>}>
        <Card title={"مهارات"}></Card>
        <Card title={"قراءة في كتاب "}></Card>
        <Card title={"ساعة معرفة"}></Card>
      </ServicesCarousel>
    <StyledContent color={"linear-gradient(269.68deg, #BA9A5A 0.06%, rgba(186, 154, 58, 0.87) 99.93%)"} flexDirection={"column"}>
    <h2 className={"content-header--white"}><span className={"normal"}>كيفية</span> التعلم </h2>
    <div>
      <FontAwesomeIcon icon={faMars} color={"white"} size={"10x"} rotation={270}/>
      <FontAwesomeIcon icon={faMars} color={"white"} size={"10x"} rotation={180}/>
      <FontAwesomeIcon icon={faMars} color={"white"} size={"10x"} rotation={270}/>
      <FontAwesomeIcon icon={faMars} color={"white"} size={"10x"} rotation={180}/>
      <FontAwesomeIcon icon={faMars} color={"white"} size={"10x"} rotation={270}/>
    </div>
    </StyledContent>
      <ServicesCarousel header={ <h2 className={"content-header--red"}><span className={"normal"}>أخر</span> الأخبار </h2>}>
        <Card title={"الخبر الأول"}></Card>
        <Card title={"الخبر الثاني"}></Card>
        <Card title={"الخبر الثالث"}></Card>
      </ServicesCarousel>
    <StyledContent height={"250px"}></StyledContent>
    <StyledFooter>
      <div>
        <img src={ted} alt="Logo" width={170} />
      </div>
      <div>
        جميع الحقوق محفوظة منطقة رأس الخيمة التعليمة
      </div>
      <div>
       منطقة رأس الخيمة التعليمة
      </div>
      <div>
       منطقة رأس الخيمة التعليمة
      </div>
    </StyledFooter>
    </>
  )
}


export default Layout;
const StyledHeader = styled.header`
box-shadow: 0px 1px 4px #BA9A5A;
z-index:10;
background: #FFFFFF;
width:100%;
.HeaderContainer{
  height: 108px;
  margin: 0 auto;
  width:fit-content;
  display:flex;
  justify-content:flex-start;
}
.menuWrapper{
  display:flex;
  flex-grow: 1;
}
.menu{
  display:flex;
  justify-content:space-between;
  align-items:center;
  flex-wrap: wrap;
  @media only screen and (max-width: 1100px) {
    display:none;
}
}
.img{
  min-width:250px;
  display:flex;
  align-items:center;
  flex-grow: 0.1;
  &> *{
    margin-bottom: 0;
  }
}
.tab{
  margin:10px 15px;
  font-size:18px;
  font-weight:700;
  color:#333;
}
.buttonsWrapper{
  display:flex;
  align-items:center;
}
`;
const StyledFooter = styled.footer`
background: #FFFFFF;
box-shadow: 0px -1px 4px #BA9A5A;
height: 108px;
z-index:10;
display:flex;
justify-content:space-around;
align-items:center;
img{
  margin-bottom:0;
}
`;
const StyledContent = styled.div`
height: ${props => props.height ? props.height : "341px"};
background: ${props => props.color ? props.color : "#dbe7f0"};
display:flex;
align-items:center;
flex-direction:${props => props.flexDirection ? props.flexDirection : "row"};
padding: 30px 0;
.flex{
  display:flex;
  width:100%;
  align-items:center;
  justify-content:center;
  flex-wrap: wrap;
  transform: ${props => props.translateX ? props.translateX : "translateX(0px)"};
  transition: transform 1s ease-in-out;

}
.flex-main{
  display:flex;
  width:100%;
  align-items:center;
  justify-content:space-around;
  flex-wrap: wrap;
}
.flex-col{
  display:flex;
  flex-direction:column;
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
      margin:0 20px;
      overflow:hidden;
      flex-wrap: nowrap;
      width:fit-content;
    }
  img{
    margin-bottom:0;
  }
  overflow:hidden;
`;
const StyledCarousel = styled.div`
height: ${props => props.height ? props.height : "341px"};
background: ${props => props.color ? props.color : "#dbe7f0"};
display:flex;
flex-direction:${props => props.flexDirection ? props.flexDirection : "row"};
padding: 30px 0;
text-align: center;
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
const StyledCard = styled.div`
width: 262px;
height: 350px;
margin: 20px 20px;
padding: 20px 20px;
background: #FFFFFF;
border-radius: 15px;
box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
position: relative
`;
const StyledImgWrapper = styled.div`
width: 100%;
height:200px;
border-radius: 15px;
background:#dbe7f0;
`;

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
// const StyledFooter = styled.footer`
//   position: fixed;
//   bottom:0;
//   display:flex;
//   z-index:2;
//   flex-direction:row-reverse;
//   justify-content:space-around;
//   align-items:center;
//   width: 100%;
//   height: 44px;
//   background: #B68A35;
//   font-style: normal;
//   font-weight: 300;
//   font-size: 18px;
//   font-family: Post No Bills Jaffna Light;


// `

  //  <StyledContainer>
  //       <StyledNavbar>
  //         <div className="img">
  //           <img src={ted} alt="Logo" width={300} />
  //         </div>
  //         <div class="menu">
  //           <div class="tab">بوابتي</div>
  //           <div class="tab">شركاؤنا</div>
  //           <div class="tab">المكتبة الرقمية</div>
  //           <div class="tab">تواصل معنا</div>
  //         </div>
  //       </StyledNavbar>
  //       {/* <div class="fullscreen-video-wrap">
  //     <video src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" autoplay="" loop="true">
  //   </video>
  //   <div class="header-overlay"></div>
  //   </div> */}
  //       {children}
  //       <StyledFooter>
  //       </StyledFooter>
  //     </StyledContainer>

  const servicesList = [
    {
      Title: "حالة طلباتي",
      Description:
        "تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    },
    {
      Title: "طلبات متنوعة",
      Description:
        "تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    },
    {
      Title: "طلبات من مكتب التطوير المؤسسي",
      Description: "",
    },
    {
      Title: "طلبات من قسم الاتصال المؤسسي",
      Description: "",
    },
    {
      Title: " طلبات من قسم الموارد البشرية",
      Description: "",
    },
    {
      Title: "طلبات من قسم الخدمات الإدارية",
      Description: "",
    },
    {
      Title: "مكتبي",
      Description:
        " تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..",
    },
  ];
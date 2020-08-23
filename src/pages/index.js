import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Content from "../components/content"
import main2 from '../assets/main2.png'; 
import icon1 from '../assets/1icon.png'; 
import label1 from '../assets/1.png'; 
import label2 from '../assets/2.png'; 
import label3 from '../assets/3.png'; 
import label4 from '../assets/4.png'; 
import label5 from '../assets/5.png'; 
import icon2 from '../assets/2icon.png'; 
import icon3 from '../assets/3icon.png'; 
import icon4 from '../assets/4icon.png'; 
import icon5 from '../assets/5icon.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars } from '@fortawesome/free-solid-svg-icons';
import Card from "../components/card";
import ServicesCarousel from "../components/carousel";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
          }
          internal{
            content
          }
          fields{
            slug
          }
        }
      }
    }
  }
`)
return(
  <Layout>
    <SEO title="Home" />
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
      <StyledContent color={"linear-gradient(269.68deg, #BA9A5A 0.06%, rgba(186, 154, 58, 0.87) 99.93%)"} height={"fit-content"} flexDirection={"column"}>
      <h2 className={"content-header--white"}><span className={"normal"}>كيفية</span> التعلم </h2>
      <div className={"learning"} >
        <div>
          <img src={icon1} alt="Logo" width={150} />
          <img src={label1} alt="Logo" width={150} />
        </div>
        <div>
          <img src={icon2} alt="Logo" width={150} />
          <img src={label2} alt="Logo" width={150} />
        </div>
        <div>
          <img src={icon3} alt="Logo" width={150} />
          <img src={label3} alt="Logo" width={150} />
        </div>
        <div>
          <img src={icon4} alt="Logo" width={150} />
          <img src={label4} alt="Logo" width={150} />
        </div>
        <div>
          <img src={icon5} alt="Logo" width={150} />
          <img src={label5} alt="Logo" width={150} />
        </div>
      </div>
      </StyledContent>
        <ServicesCarousel header={ <h2 className={"content-header--red"}><span className={"normal"}>أخر</span> الأخبار </h2>}>
          <Card title={"الخبر الأول"}></Card>
          <Card title={"الخبر الثاني"}></Card>
          <Card title={"الخبر الثالث"}></Card>
        </ServicesCarousel>
      <StyledContent height={"250px"}></StyledContent>
  </Layout>
)}

export default IndexPage
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}

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

  .learning{
    display:flex;
    flex-wrap: wrap;
    justify-content:center;

    &>div{
      margin:20px;
      display:flex;
      flex-direction:column;

      &>img{
        margin-bottom:20px;
      }
    }
  }
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
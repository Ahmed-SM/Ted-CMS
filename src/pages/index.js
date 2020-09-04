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
import partners1 from '../assets/partners/1.jpg'; 
import partners2 from '../assets/partners/2.jpg'; 
import partners3 from '../assets/partners/3.jpg'; 
import partners4 from '../assets/partners/4.jpg'; 
import partners5 from '../assets/partners/5.jpg'; 
import partners6 from '../assets/partners/6.jpg'; 
import partners7 from '../assets/partners/7.jpg'; 
import partners8 from '../assets/partners/8.jpg'; 
import partners9 from '../assets/partners/9.jpg'; 
import partners10 from '../assets/partners/10.jpg'; 
import partners11 from '../assets/partners/11.jpg'; 
import partners12 from '../assets/partners/12.jpg'; 
import partners13 from '../assets/partners/13.jpg'; 
import partners14 from '../assets/partners/14.jpg'; 
import partners15 from '../assets/partners/15.jpg'; 
import partners16 from '../assets/partners/16.jpg'; 
import partners17 from '../assets/partners/17.jpg'; 
import partners18 from '../assets/partners/18.jpg'; 
import partners19 from '../assets/partners/19.jpg'; 
import partners20 from '../assets/partners/20.jpg'; 
import partners21 from '../assets/partners/21.jpg'; 
import partners22 from '../assets/partners/22.jpg'; 
import partners23 from '../assets/partners/23.jpg'; 
import partners24 from '../assets/partners/24.jpg'; 
import partners25 from '../assets/partners/25.jpg'; 
import partners26 from '../assets/partners/26.jpg'; 
import partners27 from '../assets/partners/27.jpg'; 
import partners28 from '../assets/partners/28.jpg'; 
import partners29 from '../assets/partners/29.jpg'; 
import partners30 from '../assets/partners/30.jpg'; 
import partners31 from '../assets/partners/31.jpg'; 
import partners32 from '../assets/partners/32.jpg'; 
import partners33 from '../assets/partners/33.jpg'; 
import partners34 from '../assets/partners/34.jpg'; 
import partners35 from '../assets/partners/35.jpg'; 
import partners36 from '../assets/partners/36.jpg'; 
import partners37 from '../assets/partners/37.jpg'; 
import Card from "../components/card";
import ServicesCarousel from "../components/carousel";
import LatestNews from "../components/latestNews";


const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: {regex : "\/posts/"} }) {
      edges {
        node {
          frontmatter {
            title
          }
          internal{
              content
            }
          fields {
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
          {data.allMarkdownRemark.edges.map((edge, index)=>{
        return(
        <>
        <Card title={`${edge.node.frontmatter.title}`} index={index} path={`${edge.node.fields.slug}`}/>
        </>
        )
        })}
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
     <LatestNews/>
      <ServicesCarousel color={"#dbe7f0"} width={"100%"} shift={"250"}>
        <img src={partners1} alt="Logo" width={250} />
        <img src={partners2} alt="Logo" width={250} />
        <img src={partners3} alt="Logo" width={250} />
        <img src={partners4} alt="Logo" width={250} />
        <img src={partners5} alt="Logo" width={250} />
        <img src={partners6} alt="Logo" width={250} />
        <img src={partners7} alt="Logo" width={250} />
        <img src={partners8} alt="Logo" width={250} />
        <img src={partners9} alt="Logo" width={250} />
        <img src={partners10} alt="Logo" width={250} />
        <img src={partners11} alt="Logo" width={250} />
        <img src={partners12} alt="Logo" width={250} />
        <img src={partners13} alt="Logo" width={250} />
        <img src={partners14} alt="Logo" width={250} />
        <img src={partners15} alt="Logo" width={250} />
        <img src={partners16} alt="Logo" width={250} />
        <img src={partners17} alt="Logo" width={250} />
        <img src={partners18} alt="Logo" width={250} />
        <img src={partners19} alt="Logo" width={250} />
        <img src={partners20} alt="Logo" width={250} />
        <img src={partners21} alt="Logo" width={250} />
        <img src={partners22} alt="Logo" width={250} />
        <img src={partners23} alt="Logo" width={250} />
        <img src={partners24} alt="Logo" width={250} />
        <img src={partners25} alt="Logo" width={250} />
        <img src={partners26} alt="Logo" width={250} />
        <img src={partners27} alt="Logo" width={250} />
        <img src={partners28} alt="Logo" width={250} />
        <img src={partners29} alt="Logo" width={250} />
        <img src={partners30} alt="Logo" width={250} />
        <img src={partners31} alt="Logo" width={250} />
        <img src={partners32} alt="Logo" width={250} />
        <img src={partners33} alt="Logo" width={250} />
        <img src={partners34} alt="Logo" width={250} />
        <img src={partners35} alt="Logo" width={250} />
        <img src={partners36} alt="Logo" width={250} />
        <img src={partners37} alt="Logo" width={250} />
        </ServicesCarousel>
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
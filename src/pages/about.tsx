// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import styled from "styled-components"
import Content from "../components/content"
import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const About: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="حول" />
    <Content>
      <StyledCard>
      <StyledImgWrapper>
        <img height={"200px"} width={"100%"} src={"https://www.emaratalyoum.com/polopoly_fs/1.1118688.1531849547!/image/image.jpg_gen/derivatives/original_640/image.jpg"}></img>
      </StyledImgWrapper>
        <h3>حول</h3>
        <p>يعد التدريب والتمكين والتطوير أحد العناصر الرئيسية في خطة منطقة رأس الخيمة التعليمية، بما يجعلها الخيار الوظيفي الأول للكفاءات المواطنة من خلال توفير بيئة عمل محفزة تعتمد على نتائج الأداء وتشجع الابتكار والتفكير المبدع وتعمق الانتماء الوظيفي وتحقق الاكتفاء الذاتي من الكوادر القيادية الإشرافية والاختصاصية المواطنة.وتستهدف المنطقة التعليمية تطوير قدرات موظفيها في مختلف مجالات عملهم لدعم قدرتها على تحقيق أهدافها وتطلعاتها. وتحرص على استثمار علاقات الشراكة والتعاون التي تربطها بمختلف المؤسسات والمنظمات في تنظيم برامج تدريبية متخصصة قادرة على إكساب موظفيها خبرات جديدة تدعم قدراتهم على إنجاز مهامهم وفق أفضل المعايير وتحقق سعادتهم وتحسن جودة الحياة .​</p>
        <StyledButton>عودة</StyledButton>
      </StyledCard>
    </Content>
  </Layout>
)

export default About

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
const StyledCard = styled.div`
min-width: 262px;
max-width: 980px;

margin: 20px 20px;
padding: 20px 20px;
background: #FFFFFF;
border-radius: 15px;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
box-sizing: border-box;
position: relative;
text-align:center;
transition: transform 0.3s ease-in-out;
p{
  margin: 15px 0 20px 0;
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
img{
  border-radius: 15px;
  object-fit: cover;
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
  cursor:pointer;
  transition: all 0.3s ease-in-out;
  &:hover{
    background: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
    background-image: linear-gradient(45deg, #b52b47 6%, #B70025 53%) !important;
  }
`;
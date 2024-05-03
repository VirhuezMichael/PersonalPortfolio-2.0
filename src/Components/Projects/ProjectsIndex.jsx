import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiHtml5 , SiCss3 , SiExpress , SiFirebase , SiNodedotjs } from 'react-icons/si';
import ProjectCard from './Card';
import ProjectCard2 from './Card2';

const ProjectContainer = styled.div`
  padding: 10px 0;
  background-color: #1D2A3F;
`;

const ProjectTitle = styled.h2`
font-size: 40px;
font-family: 'Monaco', monospace;
font-weight: 600;
text-align: center;
margin-top: 30px;
margin-bottom: 50px;
color: #fffafc;
width: 95%;
border-radius: 25px;
background-color: rgba(201, 219, 239, 0.2);
padding-top: 2px;
padding-bottom: 4px;
@media (max-width: 768px) {
  margin-bottom: 20px;
}
`;

const ProjectWrapper = styled.div`
display: flex;
flex-direction: column;
flex: 1;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-top: 10px;
  margin-right: 20px;
  margin-left:20px;
  padding-bottom: 20px;
  gap:20px;
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-bottom: 10px;
  margin-right: 20px;
  margin-left:20px;
  padding-top: 0px;
  gap: 20px;
`


const projects = [
  {
    href: 'https://diario-digital-sj.netlify.app/',
    imageSrc: './projects/Diario.webp',
    title: 'Digital Diary',
    description: 'I made a digital newspaper for posting news in general, as well as having sections for outstanding news and old news. In addition, the page has a responsive design to be viewed on mobile devices.',
    icons: [SiJavascript, SiHtml5, SiCss3]
  },
  {
    href: "https://lbimpresiones3d.netlify.app/",
    imageSrc: "./projects/LBImpresiones.webp",
    title: "e-commerce",
    description:"This is an e-commerce developed for a 3D printing venture. Makes a query to a database hosted on Firebase to show the available products. It has links that act as a filter for the product search. It has a functional shopping cart where the selected products are stored, the purchase order is generated and it is stored in the database." ,
    icons: [FaReact, SiFirebase, SiJavascript, SiHtml5, SiCss3] 
  },
  {
    href: "https://wedev-sj.netlify.app/",
    imageSrc: "./projects/wedev.png",
    title: "Landing Page",
    description:"Main page of a company dedicated to providing web and software solutions to companies that need it. To do it I used development tools that help its functionality such as React-scroll and nodemailer so that contact messages are sent to the company's email." ,
    icons: [FaReact, SiNodedotjs, SiExpress, SiJavascript, SiHtml5, SiCss3]
  },
  {
    href: "https://wedev-sj.netlify.app/",
    imageSrc: "./projects/wedev.png",
    title: "Landing Page",
    description:"Main page of a company dedicated to providing web and software solutions to companies that need it. To do it I used development tools that help its functionality such as React-scroll and nodemailer so that contact messages are sent to the company's email." ,
    icons: [FaReact, SiNodedotjs, SiExpress, SiJavascript, SiHtml5, SiCss3]
  }
];

const Projects = () => {
  return (
    <Element name="projects" id="pojects">
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectWrapper>
        <Column1>
        <ProjectCard  {...projects[0]} />
        <ProjectCard2  {...projects[1]} />
        </Column1>
        <Column2>
          <ProjectCard2  {...projects[2]} />
          <ProjectCard  {...projects[3]} />
        </Column2>
        </ProjectWrapper>
      </ProjectContainer>
     </Element>
  );
};

export default Projects
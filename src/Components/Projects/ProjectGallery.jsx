import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiHtml5 , SiCss3 , SiExpress , SiFirebase , SiNodedotjs } from 'react-icons/si';

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
`;

const ProjectWrapper = styled.div`
display: grid;
place-items: center;

`;

const Gallery = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 80rem;
`
const Card = styled.figure`
position: relative;
left: 0;
width: 12rem;
border-radius: 1.2rem;
height: 25rem;
overflow: hidden;
transition: 0.4s ease-in-out;
box-shadow: 0 0 22px 0 hsla(0, 0%, 100%, .5);
flex: 0.25;
&:hover {
    flex: 1.3;
    font-weight: bold;
    cursor: pointer;
    border-radius: 1rem;
  }
`
const Img = styled.img`
position: relative;
height: 25rem;
object-fit: cover;
`
const StyledCard = styled(Card)`
  &:nth-child(1) ${Img} {
    left: -8rem;
  }
  &:nth-child(2) ${Img} {
    left: -6rem;
  }
  &:nth-child(3) ${Img} {
    left: -14rem;
  }
  &:nth-child(4) ${Img} {
    left: -8rem;
  }
`;

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




const ProjectGallery = () => {
    return (
      <Element name="projects" id="pojects">
        <ProjectContainer>
          <ProjectTitle>Projects</ProjectTitle>
          <ProjectWrapper>
            <Gallery>
            {projects.map((project, index) => (
              <StyledCard key={index}>
                <Img src={project.imageSrc} alt={`project ${index + 1}`} />
              </StyledCard>
            ))}
            </Gallery>
          </ProjectWrapper>
        </ProjectContainer>
       </Element>
    );
  };
  
  export default ProjectGallery


//   .gallery {
//     display: flex;
//     gap: 1rem;
//     max-width: 80rem;
//   }
//   .card {
//     position: relative;
//     left: 0;
//     width: 6rem;
//     border-radius: 1.2rem;
//     height: 20rem;
//     overflow: Hidden;
//     transition: 0.4s ease-in-out;
//     box-shadow: 0 5px 12px rgba(0,0,0,0.3);
//     flex: 0.25;
//   }

//   .card img{
//     position: relative;
//     height: 20rem;
//     object-fit: conver;
//   }
//   .card:hover {
//     flex: 2;
//     font-weight: bold;
//     cursor: pointer;
//     border-radius: 1rem;
//   }
//   .card:nth-child(1) img {
//     left: -8rem;
//   }
//   .card:nth-child(2) img {
//     left: -6rem;
//   }
//   .card:nth-child(3) img {
//     left: -14rem;
//   }
//   .card:nth-child(4) img {
//     left: -8rem;
//   }
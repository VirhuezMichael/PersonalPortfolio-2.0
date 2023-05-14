import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { FaReact } from 'react-icons/fa';
import { SiJavascript, SiHtml5 , SiCss3 , SiExpress , SiFirebase , SiNodedotjs } from 'react-icons/si';

const Icon = styled.div`
  color: #fffafc;
  height: 40px;
  margin-right: 10px;
`

const ProjectContainer = styled.div`
  padding: 10px 0;
  background-color: #131313;
`;

const ProjectTitle = styled.h2`
  font-size: 48px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 50px;
  color: #fffafc;
`;

const ProjectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ProjectImageCard = styled.div`
  width: 600px;
`;
const ProjectImage = styled.img`
  width: 550px;
  height: 300px;
  background-size: cover;
  padding: 10px;
`
const ProjectCard = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #2b2b2b;
  margin: 20px;
  border-radius: 20px;
  &:hover {
    background-color:  #e8e9ea;
    cursor: pointer;
    ${Icon} {
      color: #131313;
    }
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
`;

// const ServiceButton = styled.button`
//   background-color:   #ba1e4a ;
//   color: #fff;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color:   #ba1e4a  ;
//   }
// `;

const IconContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: wrap;
  justify-content: flex-start;
`

const Service = () => {
  return (
    <Element name="services" id="services">
      <ProjectContainer>
        <ProjectTitle>Projects</ProjectTitle>
        <ProjectWrapper>
          <ProjectCard href="https://diario-digital-sj.netlify.app/" target="_blank">
            <ProjectImageCard>
              <ProjectImage src="./diarioDigital.png" alt="project-image" />
            </ProjectImageCard>
            <ProjectContent> 
              <div>
                <h2 style={{color:"#3cbcb6"}}>Digital Diary</h2>
              </div>
              <div>
              <ProjectDescription>I made a digital newspaper for posting news in general, as well as having sections for outstanding news and old news. In addition, the page has a responsive design to be viewed on mobile devices.
                </ProjectDescription>
              </div>
              <IconContainer>
                <Icon>
                  <SiJavascript style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiHtml5 style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiCss3 style={{ width: '30px', height: '30px' }}/>
                </Icon>
              </IconContainer>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard href="https://lbimpresiones3d.netlify.app/" target='_blank'>
          <ProjectImageCard>
              <ProjectImage src="./impresion3d.png" alt="project-image" />
            </ProjectImageCard>
            <ProjectContent>
              <div>
                <h2 style={{color:"#3cbcb6"}}>e-commerce</h2>
              </div>
              <div>
              <ProjectDescription>This is an e-commerce developed for a 3D printing venture. Makes a query to a database hosted on Firebase to show the available products. It has links that act as a filter for the product search. It has a functional shopping cart where the selected products are stored, the purchase order is generated and it is stored in the database.
                </ProjectDescription>
              </div>
              <IconContainer>
                <Icon>
                  <FaReact style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiFirebase style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiJavascript style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiHtml5 style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiCss3 style={{ width: '30px', height: '30px' }}/>
                </Icon>
              </IconContainer>
            </ProjectContent>
          </ProjectCard>
          <ProjectCard href="https://wedev-sj.netlify.app/" target='_blank'>
          <ProjectImageCard>
              <ProjectImage src="./wedev.png" alt="project-image" />
            </ProjectImageCard>
            <ProjectContent>
              <div>
                <h2 style={{color:"#3cbcb6"}}>Company Page</h2>
              </div>
              <div>
              <ProjectDescription>Main page of a company dedicated to providing web and software solutions to companies that need it. To do it I used development tools that help its functionality such as React-scroll and nodemailer so that contact messages are sent to the company's email.
                </ProjectDescription>
              </div>
              <IconContainer>
                <Icon>
                  <FaReact style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiNodedotjs style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiExpress style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiJavascript style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiHtml5 style={{ width: '30px', height: '30px' }}/>
                </Icon>
                <Icon>
                  <SiCss3 style={{ width: '30px', height: '30px' }}/>
                </Icon>
              </IconContainer>
            </ProjectContent>
          </ProjectCard>
        </ProjectWrapper>
      </ProjectContainer>
     </Element>
  );
};

export default Service
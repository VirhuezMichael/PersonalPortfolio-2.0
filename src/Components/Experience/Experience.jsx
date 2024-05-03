import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SiCsharp, SiDotnet, SiCss3, SiHtml5, SiJavascript, SiSqlite, SiBootstrap, SiMercurial, SiGithub } from 'react-icons/si';
import Card from './Card';

const ExperienceContainer = styled.div`
  padding: 10px 0;
  background-color: #1D2A3F;
  @media (max-width: 768px) {
    max-width: 100vw;
    padding:5px 0;
  }
`;

const ExperienceTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  font-family: 'Monaco', monospace;
  text-align: center;
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

const ExperienceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content:: flex-start;
  }
  
`;

const experience = [
  {
    href: 'https://logimail.email',
    imageSrc: './experience/logimail.png',
    title: 'Logimail',
    // eslint-disable-next-line no-multi-str
    description: "Mass email sending system for managing marketing campaigns and disseminating relevant information from companies to their clients, attracting new subscribers, unsubscribing them and managing them independently, according to the user's needs.",
    icons: [SiCsharp, SiDotnet, SiJavascript, SiSqlite, SiHtml5, SiCss3, SiBootstrap, SiMercurial],
    company: "Logique",
    date: "2023 - Actual",
    // eslint-disable-next-line no-multi-str
    responsability: `I am responsible, along with the development team, for carrying out the tasks required for the implementation of the application from its inception. These tasks include: backend and frontend development and monitoring using development tools such as Visual Studio in .NET language, Mercurial for version control, Razor for UI/UX development, SQL Express for database implementation managing its handling with Entity Framework and a data migration system, among others.
I also want to highlight the use of SOLID principles for application development using an MVC system, design patterns, and the use and implementation of dependency injection, as well as the use of both proprietary and external NuGet packages and a modular design.
Additionally, I emphasize that I have been responsible for researching and configuring all required email protocols following the directives of RFC documents.`,
    name: "Full Stack Developer"
  },
  {
    href: "https://logique.co",
    imageSrc: './experience/LEAD.png',
    title: "LEAD",
    // eslint-disable-next-line no-multi-str
    description: `Criminal detection system through DNA, through the use of complex algorithms, used in the United Arab Emirates.
Developed in conjunction with Sorenson Forensics (criminalistics laboratory).
Capable of functioning at the local level of each Emirate and functioning globally for the Federal system.`,
    icons: [SiCsharp, SiDotnet, SiJavascript, SiSqlite, SiHtml5, SiCss3, SiBootstrap],
    company: "Logique",
    date: "2023 - Actual",
    // eslint-disable-next-line no-multi-str
    responsability: `I am responsible for approving all modifications and updates required by the development team, while respecting established security protocols through the execution of previously agreed tests to ensure proper functioning and compliance with requirements.
    I use various tools for conducting tests, documenting each of them, and providing feedback to the team. Tests are performed on both the frontend and backend parts, and database tests are also carried out using SQL scripts to ensure the fidelity of the stored data and its correlations.
    Unfortunately, as it is a federal security program, I do not have authorization to showcase my work, but I will be happy to provide further explanation of my daily tasks.`,    
    name: "QA Testing"
  },
  {
    href: "Supervision Escolar",
    imageSrc: './experience/logimail.png',
    title: "SIGE",
    // eslint-disable-next-line no-multi-str
    description:"Implementation and coupling to an existing system, responsible for managing student transfers between schools belonging to the same secondary school district.\
    Developed for the Province of Tierra del Fuego in Argentina." ,
    icons: [SiCsharp, SiDotnet, SiJavascript, SiSqlite, SiHtml5, SiCss3, SiBootstrap, SiGithub],
    company: "Scholl Supervision",
    date: "2022 - 2023",
    // eslint-disable-next-line no-multi-str
    responsability: `I was responsible for the complete development of the student transaction system between schools in the province of Tierra del Fuego, Argentina, working for the school supervision department.
    Both the backend and frontend were developed in .NET, and a SQL database was used for the data storage.
    The program is capable of adding, removing, editing, and performing transactions of students. It was a challenge for me, as I had never been in charge of the complete development of an application before. I learned a lot on the fly, and the program was functional within 4 months.
    Currently, it has the capacity to handle more than 10,000 student profiles and can generate different user accounts for management purposes. Unfortunately, I no longer have access or authorization to showcase the program, as it is a government program.`,
    name: "Full Stack Developer"
  },
];

const Experience = () => {
  return (
    <Element name="experience" id="experience">
      <ExperienceContainer>
        <ExperienceTitle>Experience</ExperienceTitle>
        <ExperienceWrapper>
          {experience.map((work, index) => (
            <Card key={index} {...work}/>
          ))}
        </ExperienceWrapper>
      </ExperienceContainer>
     </Element>
  );
};

export default Experience
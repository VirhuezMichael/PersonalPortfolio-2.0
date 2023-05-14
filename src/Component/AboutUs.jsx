import React from 'react';
import styled from 'styled-components';



const AboutSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(rgba(247, 249, 217, 0.8), rgba(247, 249, 217, 0.8)),
    url(/background-image.png) no-repeat;
    background-size: cover; */
    font-family: 'Raleway', sans-serif;
  background-color:  transparent ;
  transition: background-color 0.3s ease;
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;
  padding: 3rem;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: .5rem;
  color: #86868b;
`;

const Span = styled.span`
  font-family: system-ui;
  color: transparent;
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -0.015em;
  background-image: linear-gradient(180deg, #ffe993, #eb831c);
  background-clip: text;
  -webkit-background-clip: text;
`;

const AboutDescription = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #86868b;
  padding-top: 40px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <video autoPlay muted loop>
        <source src="./red.mp4" type="video/mp4" />
      </video>
      <AboutContent>
        <AboutTitle>Hey, My name is Michael Virhuez</AboutTitle>
        <AboutTitle>and I'm <Span>Full Stack</Span> Developer</AboutTitle>
        <AboutDescription>
        I am a person dedicated to web and software development, who is part of business teams to provide innovative solutions and thus have a positive impact on the clients.
        </AboutDescription>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
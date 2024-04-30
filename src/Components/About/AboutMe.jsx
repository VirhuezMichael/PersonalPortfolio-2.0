import React from 'react';
import styled from 'styled-components';



const AboutSection = styled.section`
  align-items: center;
  background-color: #1D2A3F;
  transition: background-color 0.3s ease;
  width: 100%;
`;

const AboutContent = styled.div`
  max-width: auto;
  text-align: center;
  padding: 2.5rem 60px;
  display: flex;
  flex-direction: row;
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
  padding-left: 30px;
  text-align: left;
`;

const ImgProfile = styled.img`
  height: 250px;
  border-radius: 140px;
`

const TitleContainer = styled.div`
  text align: center;
  margin-top: 60px;
  padding-top: 20px;
`

const About = () => {
  return (
    <AboutSection id="about">
      <TitleContainer>
      <AboutTitle>Hey, My name is Michael</AboutTitle>
        <AboutTitle>and I'm <Span>full stack</Span> Developer</AboutTitle>
      </TitleContainer>
      <AboutContent>
        <div>
          <ImgProfile src="profile/perfil.webp" alt="profile picture"/>
        </div>
        <div>
        <AboutDescription>
        With extensive experience in development, I am committed to providing innovative and high-quality solutions. My passion for technology and my ability to effectively collaborate in teams allow me to contribute significantly to diverse projects. Always in search of stimulating challenges, I am ready to take on new projects and exceed expectations.
        </AboutDescription>
        </div>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
import React, {useState} from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const CloseButton = styled.button`
  position: absolute;
  top: 7px;
  right: 7px;
  border: 3px solid;
  border-radius: 50%;
  font-size:18px;
  border-color: #ffffff;
  background-color: rgba(255,255,255,0%);
  color:#ffffff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &: hover{
    background-color: rgba(255,255,255,50%);
  }
`
const Icon = styled.div`
  color: #61dafb;
  height: 40px;
  margin-right: 8px;
`
const CardDetail = styled.div`
  display: none;
  flex-direction: column;
  background: linear-gradient(135deg, #1D2A3F, #9aaad6);
  opacity: 0.9;
  backdrop-filter: blur(10px);
  transition: background-color 0.5s ease;
  margin: 10px 20px;
  border-radius: 20px;
  border: 2px solid #1D2A3F;
  transition-duration: 0.5s;
  &:hover {
    border-color: #00FFFF;
    box-shadow: 0 0 22px 0 hsla(0, 0%, 100%, .5);
    cursor: default;
  }
  ${({ expanded }) => 
    !expanded &&
    `
    display: flex; 
  `}
  ${({ closed }) => 
    closed &&
    `
    display: none; 
  `}
  @media (max-width: 768px) {
    max-width: 98vw;
    height: 450px;
    flex-direction: row;
    padding: 0;
    margin: 5px;
  }
  
`
const DetailContainer = styled.div`
width: 956px;
height: 304px;
display: flex;
flex-direction: row;
@media (max-width: 768px) {
  max-width: 98vw;
  flex-direction: column;
  padding: 0;
  margin: 5px;
}
`
const Detail = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 20px;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    margin: 0;
    justify-content: start;
  }
`
const Description = styled.div`
  width: 65%;
  padding-top:10px;
  padding-right: 20px;
  color: #c9dbef;
  display: grid;
  @media (max-width: 768px) {
    width: 100vw;
  }
`
const Paragraph = styled.p`
white-space: pre-line;
font-size:14px;
font-family: 'Monaco', monospace;
text-align:left;
margin-top: 10px;
@media (max-width: 768px) {
  margin-top: 5px;
  padding-left: 5px;
  padding-right: 25px;
  font-size: 13px;
  width: 100vw;
  text-align: left;
}
`
const Item = styled.p`
font-family: 'Monaco', monospace;
font-size: 16px;
padding-left: 5px;
color: #c9dbef;
`
const ItemContainer = styled.div`
display: flex;
flex-direction: row;
margin-left:50px;
padding:15px;
@media (max-width: 768px) {
  margin-left: 0px;
  text-align: left;
  padding: 5px;
}
`
const TitleItem = styled.p`
color: #00FFFF;
font-size: 16px;
font-family: 'Monaco', monospace;
`
const ExperienceCard = styled.article`
  display: flex;
  flex-direction: row;
  background: linear-gradient(135deg, #1D2A3F, #9aaad6);
  opacity: 0.9;
  backdrop-filter: blur(10px);
  transition: background-color 0.5s ease;
  margin: 10px 20px;
  border-radius: 20px;
  border: 2px solid #1D2A3F;
  transition-duration: 0.5s;
  &:hover {
    cursor: pointer;
    border-color: #00FFFF;
    box-shadow: 0 0 22px 0 hsla(0, 0%, 100%, .5);
  }
  ${({ expanded }) => 
    !expanded &&
    `
    display: none; 
  `}
  ${({ closed }) => 
    closed &&
    `
    display: flex; 
  `}
  @media (max-width: 768px) {
    max-width: 98vw;
    height:450px;
    padding: 0;
    margin: 5px;
    flex-direction: column;
    align-items: center;
  }
`
const ExperienceImageCard = styled.div`
width: 600px;
@media (max-width: 768px) {
  width: 100vw;
}
`
const ExperienceImage = styled.img`
  width: 550px;
  height: 300px;
  background-size: cover;
  padding: 10px;
  @media (max-width: 768px) {
    width: 350px;
    height: 200px;
  }
  
`
const ExperienceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`
const ExperienceDescription = styled.p`
  font-size: 18px;
  color: #c9dbef;
  margin-bottom: 20px;
  text-align: left;
  display: block;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`
const IconContainer = styled.div`
  height: 50px;
  display: flex;
  flex-direction: wrap;
  justify-content: flex-start;
  @media (max-width: 768px) {
    height: 40px;
  }
`
const iconColors = {
  SiCsharp: '#68217A',
  SiDotnet: '#512BD4',
  SiCss3: '#264DE4',
  SiHtml5: '#E34F26',
  SiJavascript: '#F0DB4F',
  SiSqlite: '#003B57',
  SiBootstrap: '#563D7C',
  SiMercurial: '#3465A4',
  SiGithub: '#181717'
};

const Card = ({href, imageSrc, title, description, icons, company, date, responsability, name}) => {
  const [expanded, setExpanded] = useState (true);
  const [closed, setClosed] = useState (false);

  const toggleDescription = () => {
    setExpanded(!expanded);
    setClosed(!closed);  
  }

 
   return( 
    <>
      {expanded ? (
        <ExperienceCard onClick={toggleDescription} icons={icons} expanded={expanded}>
          <ExperienceImageCard>
          <ExperienceImage src={imageSrc} alt="project-image" />
          </ExperienceImageCard>
          <ExperienceContent>
            <div>
              <h2 style={{ color: "#ffe993" }}>{title}</h2>
            </div>
            <div>
              <ExperienceDescription>{description}</ExperienceDescription>
            </div>
            <IconContainer>
            {icons.map((IconComponent, index) => (
              <Icon key={index}>
                <IconComponent style={{ width: '30px', height: '30px', color: iconColors[IconComponent.name]}} />
              </Icon>
            ))}
            </IconContainer>
          </ExperienceContent>
        </ExperienceCard>
        ) : (
        <CardDetail>
          <CloseButton onClick={toggleDescription}><FaTimes /></CloseButton>
          <DetailContainer>
            <Detail>
              <ItemContainer>
              <TitleItem>Company: </TitleItem>
              <Item>{company}</Item>
              </ItemContainer>
              <ItemContainer>
              <TitleItem>Date: </TitleItem>
              <Item>{date}</Item>
              </ItemContainer>
              <ItemContainer>
              <TitleItem>Title: </TitleItem>
              <Item>{name}</Item>
              </ItemContainer>
              <ItemContainer>
              <TitleItem>Project Name: </TitleItem>
              <Item>{title}</Item>
              </ItemContainer>
              <ItemContainer>
              <a href={href} target="_blank" title="Visit site" rel="noopener noreferrer" style={{color: "#FFFFFF"}}>{href}</a>
              </ItemContainer>
            </Detail>
            <Description>
            {responsability.split('\n').map((paragraph, index) => (
              <Paragraph key={index}>{paragraph}</Paragraph>
            ))}
            </Description>
          </DetailContainer>
        </CardDetail>
      )}
    </>
   )
}

export default Card;
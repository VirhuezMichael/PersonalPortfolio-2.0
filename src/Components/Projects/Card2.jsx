import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin:1px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Para que la imagen se ajuste al contenedor */
  object-fit: cover; /* Para que la imagen se ajuste sin distorsión */
  position: absolute;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: rgba(255, 255, 255);
  z-index: 2;
`;

const ProjectCard2 = ({ href, imageSrc, title, description, icon }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={imageSrc} alt={title} />
      </ImageContainer>
      <Content>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{href}</p>
        <div>{icon}</div>
      </Content>
    </Card>
  );
};

export default ProjectCard2;

import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin:1px;
  overflow: hidden;
`;

const ImageContainer = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 100%; /* Para que la imagen se ajuste al contenedor */
  object-fit: cover; /* Para que la imagen se ajuste sin distorsión */
  transition: transform 0.5s ease; /* Transición para suavizar el efecto de desplazamiento */
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
  transform: translateX(0%); /* Desplaza la información hacia la mitad */
  transition: transform 0.5s ease; /* Transición para suavizar el efecto de desplazamiento */
  background-color: rgba(255, 255, 255);
`;

const ProjectCard = ({ href, imageSrc, title, description, icon }) => {
  return (
    <Card>
      <ImageContainer>
        <Image src={imageSrc} alt={title} />
      </ImageContainer>
    </Card>
  );
};

export default ProjectCard;

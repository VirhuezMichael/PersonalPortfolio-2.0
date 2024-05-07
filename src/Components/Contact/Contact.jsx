import React from "react";
import styled from "styled-components";
import { useState } from "react";



const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [correoEnviado, setCorreoEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Enviar solicitud POST al servidor Node.js
    try {
      const response = await fetch("https://portfoliobackend-j4lug5acc-michaels-projects-404a3990.vercel.app/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
      });
      if (response.ok) {
        console.log("The message was sended correctly");
        setNombre ("")
        setEmail ("")
        setMensaje ("")

        setCorreoEnviado(true);

        
      } else {
        console.error("Error to try send the message");
        
      }
    } catch (error) {
      console.error(error);
      
    }
  };

  const handleClose = () => {
    setCorreoEnviado(false);
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Contact</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput
          type="text"
          placeholder="Name"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <ContactInput
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ContactTextArea
          placeholder="Message"
          required
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
        />
        <ButtonContainer>
        <ContactButton type="submit" onClick={handleSubmit}>Send</ContactButton>
        <ButtonShadow />
        </ButtonContainer>
      </ContactForm>
      <div>
      {correoEnviado && (
        <PopupContainer>
          <PopupContent>
            <h3>Menssage sended</h3>
            <p>The mail has been sent successfully.</p>
            <button onClick={handleClose}>Close</button>
          </PopupContent>
        </PopupContainer>
      )}
    </div>
    </ContactContainer>
  );
};

export default Contact;

// Estilos de Contact Component

const ContactContainer = styled.section`
  background-color:  #1D2A3F ;
  color: #ece3da;
  padding: 10px 0;
  text-align: center;
`;

const ContactTitle = styled.h2`
font-size: 40px;
font-weight: 600;
font-family: 'Monaco', monospace;
text-align: center;
margin-top:40px;
margin-bottom: 50px;
color: #fffafc;
width: 95%;
border-radius: 25px;
background-color: rgba(201, 219, 239, 0.2);
padding-top: 2px;
padding-bottom: 4px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactInput = styled.input`
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: none;
  width: 90%;
  color: #131313;
  text-align: left;
  background-color: #eef4fc;
`;

const ContactTextArea = styled.textarea`
  font-size: 1.2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 5px;
  border: none;
  width: 90%;
  text-align: left;
  background-color: #eef4fc;
`;

const ContactButton = styled.button`
  font-size: 1rem;
  padding: 1rem 2rem;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 12px 40px;
  margin: 16px 0;
  font-weight: 500;
  line-height: 20px;
  color: #0d0d0d;
  letter-spacing: .2px;
  background-color: hsla(0, 0%, 100%, .9);
  background-clip: padding-box;
  border: 3px solid hsla(0, 0%, 100%, .3);
  border-radius: 8px;
  transition: box-shadow 0.1s ease;
  &:hover {
    box-shadow: 0 0 20px 0 hsla(0, 0%, 100%, .3);
    border-color: #00FFFF;
  }
`;

const ButtonContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ButtonShadow = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, #ffeb3b, #ff5722);
  z-index: -1;
  border-radius: 5px;
  filter: blur(20px);
  opacity: 0.8;
`;

// Estilos de pop-up

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 1rem;
  }
`;
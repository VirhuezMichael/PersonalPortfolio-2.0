import React from 'react';
import styled from 'styled-components';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledFooter = styled.footer`
  background-color: #2b2b2b;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 16px 8px;
  }
`;

const StyledSocialIcons = styled.div`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const StyledIconLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #fff;
  color: #000;
  transition: all 0.3s;

  &:hover {
    background-color: #3f848c  ;
    color: #fff;
  }
`;

const StyledCopyRight = styled.span`
  color: #ece3da;

  @media (max-width: 600px) {
    margin-top: 8px;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <StyledSocialIcons>
        <StyledIconLink href="https://www.linkedin.com/in/walter-michael-virhuez-37a48b212/?locale=en_US" target="_blank" title="linkedin">
          <LinkedInIcon />
        </StyledIconLink>
        <StyledIconLink href="https://www.whatsapp.com/" target="_blank" title="whatsapp">
          <WhatsAppIcon />
        </StyledIconLink>
        <StyledIconLink href="https://www.github.com/VirhuezMichael" target="_blank" title="github">
          <GitHubIcon />
        </StyledIconLink>
      </StyledSocialIcons>
      <StyledCopyRight>© {currentYear}. By Michael Virhuez.</StyledCopyRight>
    </StyledFooter>
  );
};

export default Footer;

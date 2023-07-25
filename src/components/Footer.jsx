import React from 'react';
import styled from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';


const StyledFooter = styled.footer`
  background: var(--color-primary);
  padding: 3rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;

  a {
    color: var(--color-bg);
  }
`;

const StyledFooterLogo = styled.a`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 2rem;
  display: inline-block;
`;

const StyledPermalinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 3rem;

  li {
    list-style: none;
  }

  a {
    color: var(--color-bg);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--color-primary);
    }
  }
`;

const StyledFooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;

  a {
    background: var(--color-bg);
    color: var(--color-white);
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      background: transparent;
      color: var(--color-bg);
      border-color: var(--color-bg);
    }
  }
`;

const StyledFooterCopyright = styled.div`
  margin-bottom: 4rem;
  color: var(--color-bg);
`;

const Footer = () => {
  const getYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <StyledFooter>
      <StyledFooterLogo href="#home"> &copy;  {getYear()} Carlos Calleja Sáez</StyledFooterLogo>
      <StyledPermalinks>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
       
        <li>
          <a href="#contact">Contact</a>
        </li>
      </StyledPermalinks>
      <StyledFooterSocials>
        <a
          href="https://www.linkedin.com/CarlosCallejaSaez"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/CarlosCallejaSaez" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        
      </StyledFooterSocials>
      <StyledFooterCopyright>
        <small> Made with 💓 in Palencia, Spain</small>
      </StyledFooterCopyright>
    </StyledFooter>
  );
};

export default Footer;

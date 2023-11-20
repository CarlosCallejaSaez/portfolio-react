import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import styled, { keyframes } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledHeader = styled.header`
  height: 100%;
  padding-top: 7rem;
  overflow: hidden;
  gap: 10px;

  @media screen and (max-width: 1024px) {
    padding-top: 3rem;
  }
`;

const StyledHeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  animation: ${fadeIn} 1s ease-out; /* Aplica la animación fadeIn */

  @media screen and (max-width: 1024px) {
    height: auto;
  }
`;

const StyledCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2.5rem;
`;

const StyledScrollDownLink = styled.a`
  position: absolute;
  right: 5rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 400;
  font-size: 1rem;
  color: var(--color-primary);

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledH1 = styled.h1`
  font-size: 3rem;
  animation: ${fadeIn} 1s ease-out; 

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`;

const Header = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <StyledHeader id="home" data-aos="fade-left">
      <StyledHeaderContainer className="container header__container">
        <h3>Hello I'm</h3>
        <StyledH1>Carlos Calleja Sáez</StyledH1>
        <h3 className="text-light">Full-stack Developer</h3>
        <StyledCTA>
          <CTA />
        </StyledCTA>
        <StyledScrollDownLink href="#contact" className="scroll__down">
          Scroll Down
        </StyledScrollDownLink>
        <HeaderSocials />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;

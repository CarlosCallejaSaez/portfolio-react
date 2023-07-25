import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import styled  from 'styled-components';

const StyledHeader = styled.header`
  height: 100%;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px){
    padding-top: 3rem;
  }
`;

const StyledHeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1024px){
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
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: 600px){
    display: none;
  }
`;

const Header = () => {
  return (
    <StyledHeader id="home">
     
      <StyledHeaderContainer className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Carlos Calleja Sáez</h1>
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

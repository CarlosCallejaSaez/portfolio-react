import React, { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import styled from 'styled-components';

const StyledNav = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);
`;

const StyledNavLink = styled.a`
  background: transparent;
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: var(--color-light);
  font-size: 1.1rem;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  &.active {
    background: var(--color-bg);
    color: var(--color-white);
  }
`;

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <StyledNav>
      <StyledNavLink href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
        <AiOutlineHome />
      </StyledNavLink>
      <StyledNavLink href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </StyledNavLink>
      <StyledNavLink href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
        <BiBook />
      </StyledNavLink>
      <StyledNavLink href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>
        <RiServiceLine />
      </StyledNavLink>
      <StyledNavLink href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </StyledNavLink>
    </StyledNav>
  );
}

export default Topbar;

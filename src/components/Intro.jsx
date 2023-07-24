import React from 'react';
import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../assets/me.png';

const StyledIntroContainer = styled.section`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

const StyledAboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  display: grid;
  place-items: center;
  transition: var(--transition);

  &:hover {
    transform: rotate(0);
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }

  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0rem auto 3rem;
  }
`;

const StyledAboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
`;

const StyledAboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StyledAboutCard = styled.article`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }
`;

const StyledAboutIcon = styled.div`
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const StyledAboutCardTitle = styled.h5`
  font-size: 1rem;
`;

const StyledAboutCardText = styled.small`
  font-size: 0.9rem;
  color: var(--color-light);
`;

const StyledAboutContent = styled.div`
  p {
    margin: 2rem 0 2.6rem;
    color: var(--color-light);

    @media screen and (max-width: 1024px) {
      margin: 1rem 0 1.5rem;
    }

    @media screen and (max-width: 600px) {
      margin: 1.5rem 0;
    }
  }

  
`;

const Intro = () => {
  return (
    <StyledIntroContainer id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <StyledAboutMe>
          <StyledAboutMeImage>
            <img src={ME} alt="me" />
          </StyledAboutMeImage>
        </StyledAboutMe>
        <StyledAboutContent>
          <StyledAboutCards>
            <StyledAboutCard>
              <StyledAboutIcon>
                <FaAward />
              </StyledAboutIcon>
              <StyledAboutCardTitle>Experience</StyledAboutCardTitle>
              <StyledAboutCardText>Still Learning at RockTheCode</StyledAboutCardText>
            </StyledAboutCard>
            <StyledAboutCard>
              <StyledAboutIcon>
                <VscFolderLibrary />
              </StyledAboutIcon>
              <StyledAboutCardTitle>Projects</StyledAboutCardTitle>
              <StyledAboutCardText>20+ Completed Projects</StyledAboutCardText>
            </StyledAboutCard>
          </StyledAboutCards>
          <p>
            I’ve spent the last several months in RockTheCode
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </StyledAboutContent>
      </div>
    </StyledIntroContainer>
  );
}

export default Intro;

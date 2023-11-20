import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import styled from 'styled-components';

const StyledExperience = styled.section`

`;

const StyledExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 600px) {
    gap: 1rem;
  }
`;

const StyledExperienceItem = styled.div`
  background: var(--color-bg-variant);
  padding: 2.4rem 5rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: default;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    padding: 2rem;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    padding: 2rem 1rem;
  }
`;

const StyledExperienceTitle = styled.h3`
  text-align: center;
  margin-bottom: 2rem;
  color: var(--color-primary);
`;

const StyledExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;

  @media screen and (max-width: 1024px) {
    p {
      padding: 1rem;
    }
  }
`;

const StyledExperienceDetails = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledExperienceIcon = styled(BsFillPatchCheckFill)`
  margin-top: 6px;
  color: var(--color-primary);
`;

const Experience = () => {
  return (
    <StyledExperience id="experience">
      <h3>  🛠 The Skills I Have 🛠 </h3>
      <h2>Skills</h2>
      <StyledExperienceContainer className="container experience__container">
        <StyledExperienceItem className="experience__frontend">
          <StyledExperienceTitle>Front-end Development</StyledExperienceTitle>
          <StyledExperienceContent className="experience__content">
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>HTML</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>CSS</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>JavaScript</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>TypeScript</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>React</h4>
            </StyledExperienceDetails>

          </StyledExperienceContent>
        </StyledExperienceItem>
        <StyledExperienceItem className="experience__backend">
          <StyledExperienceTitle>Back-end Development</StyledExperienceTitle>
          <StyledExperienceContent className="experience__content">
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>Node.js</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>MongoDB</h4>
            </StyledExperienceDetails>
            <StyledExperienceDetails className="experience__details">
              <StyledExperienceIcon className="experience__details-icon" />
              <h4>SQL</h4>
            </StyledExperienceDetails>


          </StyledExperienceContent>
        </StyledExperienceItem>
      </StyledExperienceContainer>
    </StyledExperience>
  );
}

export default Experience;

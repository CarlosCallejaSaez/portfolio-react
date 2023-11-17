import React from 'react';
import styled from 'styled-components';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../assets/me.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

const StyledIntroContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  align-items: center; 
  justify-content: center; 

  @media screen and (max-width: 1024px) {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0;
  align-items: center; 
  justify-content: center; 
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0;
    align-items: center; 
    justify-content: center; 
  }
`;
const StyledAboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  display: flex;
  justify-content: center; 
  align-items: center; 
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


const StyledAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  width: 100%; 

  @media screen and (max-width: 1024px) {
    width: 100%; 
  }
`;


const StyledAboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  transform: rotate(10deg);
  display: flex;
  justify-content: center; 
  align-items: center; 

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
      margin: 0;
    }
  }

  
`;

const StyledH2 = styled.h2`
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  font-family: 'Poppins',sans-serif;
`;



const Intro = () => {

  const [reposCount, setReposCount] = useState(34);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get('https://api.github.com/users/CarlosCallejaSaez');
        setReposCount(response.data.public_repos);
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    fetchGitHubData();
  }, []);


  return (
    <>

      <StyledIntroContainer id="about">
        <StyledH2>       </StyledH2>


        <div className="container about__container" href="#contact">

          <StyledAboutMe>

            <StyledAboutMeImage>
              <img src={ME} alt="me" />
            </StyledAboutMeImage>

          </StyledAboutMe>
          <br />
          <StyledAboutContent>
            <StyledAboutContainer>
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
                  <StyledAboutCardText>{reposCount !== null ? (
                    <span>
                      ⭐<strong>{reposCount}</strong>⭐ Repositories on Github
                    </span>
                  ) : (
                    'Loading...'
                  )}</StyledAboutCardText>
                </StyledAboutCard>




              </StyledAboutCards>

            </StyledAboutContainer>
          </StyledAboutContent>

        </div>

      </StyledIntroContainer></>
  );
}

export default Intro;

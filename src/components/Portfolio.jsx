import React from 'react';
import styled from 'styled-components';
import projects from '../projects';

const PortfolioSection = styled.section`
 

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;

    
    @media screen and (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }

    
    @media screen and (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

const PortfolioItem = styled.article`
  background: var(--color-bg-variant);
  padding: 1.3rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: var(--transition);

  &:hover {
    border-color: var(--color-primary-variant);
    background: transparent;
  }

  .portfolio__item-image {
    border-radius: 1.5rem;
    overflow: hidden;
    height: 30%;
  }

  h3 {
    margin: 2rem 0;
  }

  p {
    margin: 0 0 1.2rem 0;
    font-size: 0.9rem;
  }

  .portfolio__item-cta {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .portfolio__item-content {
    height: 50%;
  }
`;

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <h5>🥇 My Favourite Projects 🥇</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <PortfolioItem className="portfolio__item" key={project.id}>
            <div className="portfolio__item-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a href={project.github} target="_blank" className="btn" rel="noreferrer">
                GitHub
              </a>
              <a href={project.link} target="_blank" className="btn btn-primary" rel="noreferrer">
                Visit Website
              </a>
            </div>
          </PortfolioItem>
        ))}
      </div>
    </PortfolioSection>
  );
};

export default Portfolio;

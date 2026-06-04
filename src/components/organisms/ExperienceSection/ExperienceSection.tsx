import React from 'react';
import { Box, Container } from '@mui/material';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import ExperienceItem from '../../molecules/ExperienceItem/ExperienceItem';
import { useExperience } from '../../../hooks/usePortfolioData';
import { ESection } from '../../../types';
import './ExperienceSection.style.css';

const ExperienceSection: React.FC = () => {
  const { data: experience = [] } = useExperience();

  return (
    <Box
      component="section"
      id={ESection.EXPERIENCE}
      className="experience-section"
      aria-label="Work Experience"
    >
      <Container maxWidth="xl">
        <SectionLabel>Experience</SectionLabel>
        <Box className="experience-section__timeline">
          {experience.map((exp, index) => (
            <ExperienceItem
              key={exp.company}
              experience={exp}
              isLast={index === experience.length - 1}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;

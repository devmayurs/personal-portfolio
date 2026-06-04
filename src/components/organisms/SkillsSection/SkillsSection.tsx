import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import SkillCard from '../../molecules/SkillCard/SkillCard';
import TechChip from '../../atoms/TechChip/TechChip';
import { useSkills } from '../../../hooks/usePortfolioData';
import { ARCHITECTURE_DEPTH_TAGS } from '../../../constants/sections';
import { ESection } from '../../../types/index';
import './SkillsSection.style.css';

const SkillsSection: React.FC = () => {
  const { data: skills = [] } = useSkills();

  return (
    <Box component="section" id={ESection.SKILLS} className="skills-section" aria-label="Technical Skills">
      <Container maxWidth="xl">
        <SectionLabel>Technical Skills</SectionLabel>

        {/* Callout banner */}
        <Box className="skills-section__callout">
          <Typography variant="body2" className="skills-section__callout-text">
            <Box component="span" className="skills-section__callout-highlight">
              Beyond typical 4-year experience —{' '}
            </Box>
            architectural ownership of Nx Monorepo migrations, Micro Frontend systems, reusable framework design,
            schema-driven platforms, AI workflow automation, and full CI/CD cloud pipelines across GCP, Vercel and
            Render.
          </Typography>
        </Box>

        {/* Skills grid */}
        <Box className="skills-section__grid">
          {skills.map((skill) => (
            <SkillCard key={skill.category} skill={skill} />
          ))}
        </Box>

        {/* Architecture depth bar */}
        <Box className="skills-section__arch-bar">
          <Typography variant="overline" className="skills-section__arch-label">
            Architecture Depth
          </Typography>
          <Box className="skills-section__arch-divider" />
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: '0.75rem' }}>
            {ARCHITECTURE_DEPTH_TAGS.map((tag) => (
              <TechChip key={tag} label={tag} variant="muted" />
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillsSection;

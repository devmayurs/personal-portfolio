import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import HeroScene from '../../atoms/HeroScene/HeroScene';
import HeroStats from '../../molecules/HeroStats/HeroStats';
import RoleChips from '../../molecules/RoleChips/RoleChips';
import { useScrollTo } from '../../../hooks/useScrollTo';
import { ESection } from '../../../types/index';
import './HeroSection.style.css';

const HeroSection: React.FC = () => {
  const { scrollTo } = useScrollTo();

  return (
    <Box component="section" id={ESection.ABOUT} className="hero-section" aria-label="About Mayur Solanki">
      {/* Background decorations */}
      <Box className="hero-section__grid-bg" aria-hidden="true" />
      <Box className="hero-section__glow-right" aria-hidden="true" />
      <Box className="hero-section__glow-left" aria-hidden="true" />

      <Container maxWidth="xl">
        <Box className="hero-section__inner">
          {/* Left: Text content */}
          <Box className="hero-section__text">
            <Typography variant="overline" className="hero-section__tag fu">
              {'< software.developer / architect >'}
            </Typography>

            <Typography component="h1" className="hero-section__name fu2">
              Mayur
              <br />
              <Box component="span" className="hero-section__name-gradient">
                Solanki
              </Box>
            </Typography>

            <Box className="fu3">
              <RoleChips />
            </Box>

            <Typography variant="body1" className="hero-section__bio fu3">
              I build enterprise-grade software — CRM, ERP, POS, B2B eCommerce — with architectural depth that goes
              beyond standard development. I own migrations, architect Nx Monorepo systems, design reusable framework
              ecosystems, and ship CI/CD pipelines on GCP. My skills span frontend architecture, schema-driven
              platforms, AI automation, and cloud deployments —{' '}
              <Box component="strong" className="hero-section__bio-strong">
                built through deep engineering ownership, not just years of experience.
              </Box>
            </Typography>

            <Stack direction="row" sx={{ gap: '1rem', flexWrap: 'wrap' }} className="fu4">
              <Button
                variant="contained"
                onClick={() => {
                  scrollTo(ESection.PROJECTS);
                }}
                className="hero-section__cta-primary"
                id="hero-view-projects-btn"
              >
                View Projects ↓
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  scrollTo(ESection.CONTACT);
                }}
                className="hero-section__cta-secondary"
                id="hero-hire-me-btn"
              >
                Hire Me
              </Button>
            </Stack>

            <Box className="fu5">
              <HeroStats />
            </Box>
          </Box>

          {/* Right: Three.js canvas */}
          <Box className="hero-section__canvas-wrap">
            <HeroScene />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

import React, { Suspense, lazy } from 'react';
import { Box, CircularProgress } from '@mui/material';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import SkillsSection from '../components/organisms/SkillsSection/SkillsSection';
import ProjectsSection from '../components/organisms/ProjectsSection/ProjectsSection';
import ExperienceSection from '../components/organisms/ExperienceSection/ExperienceSection';
import ContactSection from '../components/organisms/ContactSection/ContactSection';

// Fallback while lazy sections load
const SectionFallback: React.FC = () => (
  <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
    <CircularProgress size={32} sx={{ color: '#38BDF8' }} />
  </Box>
);

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProjectsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ExperienceSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default HomePage;

import React from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import SectionLabel from '../../atoms/SectionLabel/SectionLabel';
import ContactCard from '../../molecules/ContactCard/ContactCard';
import GlowDot from '../../atoms/GlowDot/GlowDot';
import { CONTACT_INFO } from '../../../constants/socials';
import { ESection } from '../../../types';
import './ContactSection.style.css';

const ContactSection: React.FC = () => {
  return (
    <Box
      component="section"
      id={ESection.CONTACT}
      className="contact-section"
      aria-label="Contact"
    >
      <Container maxWidth="xl">
        <SectionLabel>Contact</SectionLabel>

        <Box className="contact-section__intro">
          <Typography variant="body1" className="contact-section__body">
            Open to senior software developer roles, frontend architecture positions, and interesting
            product challenges across product companies, startups, and service firms.
            <br />
            <Box component="strong" className="contact-section__body-strong">
              Let&apos;s build something great together.
            </Box>
          </Typography>
        </Box>

        <Box className="contact-section__grid">
          {CONTACT_INFO.map((contact) => (
            <ContactCard key={contact.label} contact={contact} />
          ))}
        </Box>

        {/* Availability badge */}
        <Stack
          direction="row"
          alignItems="center"
          gap="10px"
          className="contact-section__availability"
          role="status"
          aria-label="Currently available for new opportunities"
        >
          <GlowDot />
          <Typography className="contact-section__availability-text">
            Available for new opportunities
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default ContactSection;

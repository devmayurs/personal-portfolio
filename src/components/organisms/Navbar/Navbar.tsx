import React from 'react';
import { AppBar, Toolbar, Container, Button, Stack } from '@mui/material';
import NavLink from '../../molecules/NavLink/NavLink';
import { NAV_LINKS } from '../../../constants/sections';
import { useScrollTo } from '../../../hooks/useScrollTo';
import { ESection } from '../../../types';
import './Navbar.style.css';

const Navbar: React.FC = () => {
  const { scrollTo } = useScrollTo();

  return (
    <AppBar position="fixed" className="navbar">
      <Container maxWidth="xl">
        <Toolbar className="navbar__toolbar" disableGutters>
          <Button
            onClick={() => {
              scrollTo(ESection.ABOUT);
            }}
            className="navbar__logo"
            disableRipple
          >
            MS
          </Button>

          <Stack direction="row" sx={{ gap: 'clamp(1rem,3vw,2.5rem)' }} component="nav" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <NavLink key={link.id} link={link} />
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

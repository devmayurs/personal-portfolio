import React from 'react';
import { Button } from '@mui/material';
import { useAppSelector } from '../../../store/hooks';
import { useScrollTo } from '../../../hooks/useScrollTo';
import type { INavLink } from '../../../types';
import './NavLink.style.css';

interface INavLinkProps {
  link: INavLink;
}

const NavLink: React.FC<INavLinkProps> = ({ link }) => {
  const { scrollTo } = useScrollTo();
  const activeSection = useAppSelector((state) => state.ui.activeSection);
  const isActive = activeSection === link.id;
  return (
    <Button
      onClick={() => {
        scrollTo(link.id);
      }}
      className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
      disableRipple
    >
      {link.label}
    </Button>
  );
};

export default NavLink;

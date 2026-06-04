import React from 'react';
import { Stack, Chip } from '@mui/material';
import { HERO_ROLES } from '../../../constants/sections';
import './RoleChips.style.css';

const RoleChips: React.FC = () => {
  return (
    <Stack className="role-chips" sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '8px' }}>
      {HERO_ROLES.map((role) => (
        <Chip key={role} label={role} size="small" className="role-chip" />
      ))}
    </Stack>
  );
};

export default RoleChips;

import React, { useState } from 'react';
import { Card, CardActionArea, Box, Typography } from '@mui/material';
import type { IContactInfo } from '../../../types';
import './ContactCard.style.css';

interface IContactCardProps {
  contact: IContactInfo;
}

const ContactCard: React.FC<IContactCardProps> = ({ contact }) => {
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    window.open(contact.href, contact.isExternal ? '_blank' : '_self');
  };

  return (
    <Card
      className={`contact-card ${hovered ? 'contact-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardActionArea onClick={handleClick} className="contact-card__action">
        <Box className={`contact-card__icon-wrap ${hovered ? 'contact-card__icon-wrap--hovered' : ''}`}>
          <Typography className="contact-card__icon">{contact.icon}</Typography>
        </Box>
        <Box>
          <Typography variant="caption" className="contact-card__label">
            {contact.label}
          </Typography>
          <Typography
            className={`contact-card__value ${hovered ? 'contact-card__value--hovered' : ''}`}
          >
            {contact.value}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ContactCard;

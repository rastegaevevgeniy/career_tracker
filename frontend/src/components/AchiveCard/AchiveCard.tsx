import React, { ReactElement } from 'react';
import "./AchiveCard.scss";
import {Typography, SvgIcon } from '@mui/material';

interface AchiveCardProps {
  title: string;
  date: string;
  image: ReactElement;
  description: string;
}

const AchiveCard: React.FC<AchiveCardProps> = ({ title, date, image, description}) => {
  
  return (
    <div className="achive-card">
      <Typography className="achive-card__title" component="h3">{title}</Typography>
      <Typography className="achive-card__data">{date}</Typography>
      <SvgIcon className='achive-card__image'>
        {image}
      </SvgIcon>
      <Typography className="achive-card__description">{description}</Typography>
    </div>
  );
}

export default AchiveCard;
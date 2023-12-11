import React from 'react';
import "./ReccomendCard.scss";
import {Typography, SvgIcon} from '@mui/material';

interface ReccomendCardProps {
  name: string;
  duration: string;
  level: string;
  title: string;
  description: string;
  vacancies: string;
}

const ReccomendCard: React.FC<ReccomendCardProps> = ({ name, duration, level, title, description, vacancies }) => {
  
  return (
    <div className="reccomend-card">
        <div className="reccomend-card__info">
          <Typography component="h3" className="reccomend-card__text">{name}</Typography>
          <SvgIcon style={{ fontSize: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
          </SvgIcon>
          <Typography className="reccomend-card__text">{duration}</Typography>
          <SvgIcon style={{ fontSize: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
              <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
            </svg>
          </SvgIcon>
          <Typography className="reccomend-card__text">{level}</Typography>
        </div>
        <Typography variant="h6" className="reccomend-card__title">
          {title}
        </Typography>
        <Typography className="reccomend-card__description">
          {description}
        </Typography>
        <div className="reccomend-card__vacancies">{vacancies}</div>
      </div>
  );
}

export default ReccomendCard;
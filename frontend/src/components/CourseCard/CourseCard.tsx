import React from 'react';
import "./CourseCard.scss";
import {Typography, CircularProgress} from '@mui/material';

interface CourseCardProps {
  title: string;
  progressValue: number;
  lessonLearned: number;
  totalLessons: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ title, progressValue, lessonLearned, totalLessons }) => {
  
  const progressColor = progressValue === 100 ? '#87CC9E' : '#5A9BFF';

  return (
    <div className="progress-card">
      <Typography variant="h6" component="h3">
          {title}
      </Typography>
      <div className='progress-card__progress-container'>
        <CircularProgress 
          className='progress-card__progress' 
          value={progressValue} 
          variant="determinate" 
          style={{
            color: progressColor,
            transform: 'rotate(90deg)',
          }}
          size={32}
        />
        <Typography variant="caption">
          {progressValue}%
        </Typography>
      </div>
      <Typography variant="body2">
        <span className='progress-card__lessons-learned'>{lessonLearned}</span> из {totalLessons} уроков просмотрено
      </Typography>
    </div>
  );
}

export default CourseCard;
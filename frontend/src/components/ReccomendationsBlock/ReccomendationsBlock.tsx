import React from 'react';
import "./ReccomendationsBlock.scss";
import Block from "../Block/Block";
import CourseCard from "../CourseCard/CourseCard";
import {ListItem} from '@mui/material';

const ReccomendationsBlock: React.FC = () => {
  
  const courses = [
    {
      id: 1,
      title: 'Продакт-менеджер с опытом',
      lessonLearned: 51,
      totalLessons: 85,
      progressValue: 60,
    },
    {
      id: 2,
      title: 'Бизнес-аналитик',
      lessonLearned: 85,
      totalLessons: 85,
      progressValue: 100,
    },
    {
      id: 3,
      title: 'Figma - подготовка к верстке',
      lessonLearned: 102,
      totalLessons: 102,
      progressValue: 100,
    }
  ]

  return (
    <Block title={'Рекомендации для вас'}>
      {courses.map((course) => (
          <ListItem key={course.id}>
            <CourseCard 
              title={course.title}
              progressValue={course.progressValue}
              lessonLearned={course.lessonLearned}
              totalLessons={course.totalLessons}
            />
          </ListItem>
        ))
      }
    </Block> 
  );
}

export default ReccomendationsBlock;
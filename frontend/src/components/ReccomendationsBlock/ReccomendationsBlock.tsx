import React from 'react';
import "./ReccomendationsBlock.scss";
import Block from "../Block/Block";
import ReccomendCard from "../ReccomendCard/ReccomendCard";
import {ListItem} from '@mui/material';

const ReccomendationsBlock: React.FC = () => {
  
  const recommendations = [
    {
      id: 1,
      name: 'Менеджмент',
      duration: '2 месяца',
      level: 'с нуля',
      title: 'Навыки критического мышления',
      description: 'Для принятия верных решений в периоды высокой турбулентности ',
      vacancies: '+ 1250 вакансий',
    },
    {
      id: 2,
      name: 'Дизайн',
      duration: '6 месяцев',
      level: 'с нуля',
      title: 'Продуктовый дизайнер',
      description: 'Для эффективной проработки дизайна вашего продукта',
      vacancies: '+ 450 вакансий',
    },
    {
      id: 3,
      name: 'Анализ данных',
      duration: '6 месяцев',
      level: 'с нуля',
      title: 'SQL для работы с данными и аналитики',
      description: 'Курсы помогут быстро анализировать данные и принимать верные решения',
      vacancies: '+ 730 вакансий',
    }
  ]

  return (
    <Block title={'Рекомендации для вас'}>
      {recommendations.map((recommendation) => (
          <ListItem key={recommendation.id}>
            <ReccomendCard 
              name={recommendation.name}
              duration={recommendation.duration}
              level={recommendation.level}
              title={recommendation.title}
              description={recommendation.description}
              vacancies={recommendation.vacancies}
            />
          </ListItem>
        ))
      }
    </Block> 
  );
}

export default ReccomendationsBlock;
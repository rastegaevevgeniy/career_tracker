import React from 'react';
import "./ProgressBlock.scss";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { openProgressModal } from '../../redux/actions';

const ProgressBlock: React.FC = () => {

  const dispatch = useDispatch();

  const openProgress = () => {
    dispatch(openProgressModal());
  };
  
  return (
    <Box className='progress-block'>
      {/* Секция с 60% */}
      <Box className='progress-block__progress-container'>
        <Typography variant="h1" className='progress-block__progress'>60%</Typography>
        <Typography className='progress-block__text'>Навыков освоено</Typography>
        <Button
          onClick={openProgress}
          variant="contained" 
          className='progress-block__button' 
          color="primary">
          Смотреть прогресс
        </Button>
      </Box>
      {/* Картинка */}
      <Box className='progress-block__image'></Box>


      <Box className='progress-block__info'>

        {/* 54 урока */}
        <Box className='progress-block__lessons  progress-block__info-container progress-block__info-block'>
          <Typography variant="h2" className='progress-block__number'>54</Typography>
          <Typography className='progress-block__text'>урока осталось до прохождения курса</Typography>
        </Box>

        <Box className='progress-block__info-container'>
          {/* 1900 и 150к */}
          <Box className='progress-block__info-block'>
            <Typography variant="h2" className='progress-block__number'>1900</Typography>
            <Typography className='progress-block__text'>подходящих вакансий</Typography>
          </Box>
          <Box className='progress-block__info-block'>
            <Typography variant="h2" className='progress-block__number'>150 000</Typography>
            <Typography className='progress-block__text'>твоя средняя зарплата</Typography>
          </Box>
        </Box>

      </Box>

    </Box>
  );
}

export default ProgressBlock;
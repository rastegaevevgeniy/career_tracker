import React, { useEffect, useState } from 'react';
import "./ModalProgress.scss";
import { api } from '../../utils/Api/Api';
import { YourDataType } from '../../utils/Api/ApiConst';
import Skills from '../Skills/Skills';
// import ModalBlock from '../../components/ModalBlock/ModalBlock'
import {
  Typography,
  LinearProgress,
  Box,
} from '@mui/material';

  const dataSkills = [
    {
      p: 'Уже усвоено',
      color: { backgroundColor: '#87CC9E', borderRadius: '6px' },
      name: ['Экономика и бизнес-модель продукта', 'dfyz', 'ofgaorf', 'fddgvna;ijnv;osnhdiouv;iabv']
    },
    {
      p: 'Нужно освоить',
      color: { backgroundColor: '#ACCCFF', borderRadius: '6px' },
      name: ['Экономика и бизнес-модель продукта', 'dfyz']
    },
    {
      p: 'Текущий курс',
      color: { backgroundColor: '#FFDDE5', borderRadius: '6px' },
      name: ['Экономика и бизнес-модель продукта', 'dfyz']
    },
    {
      p: `Рекомендованные  \nкурсы`,
      color: { backgroundColor: '#F3F3F3', borderRadius: '6px' },
      name: ['Экономика и бизнес-модель продукта', 'dfyz']
    },
  ];


const ModalProgress: React.FC = () => {
  const [dataUser, setDataUser] = useState<YourDataType[] | null>(null);


  useEffect(() => {
    api
      .getInitialTracker()
      .then((data) => setDataUser(data))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  const styleSkills = {
    bgcolor: '#FFF',
    borderRadius: '10px',
    padding: '14px',
  }

  return (
    // <ModalBlock title='Прогресс'>
      <Box sx={styleSkills}>
        <div className='block'>
          <div className='block__title'>
            <Typography variant="caption" display="block" sx={{ fontSize: '0.84rem', color: '#909099' }}>
              Твоя цель
            </Typography>
            <Typography id="modal-modal-description" sx={{
              fontFamily: 'Yandex Sans Text, Arial, sans-serif',
              fontSize: '23px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '24px',
              paddingTop: "8px",
            }} variant="h6" gutterBottom>
              Middle
            </Typography>
          </div>
          <Box sx={{ width: '572px', display: "grid", alignContent: 'center' }}>
            <LinearProgress variant="determinate" value={60} // Сюда закинуть процент расчитанный от показателей бэка
              sx={{
                height: "12px", borderRadius: '12px',
                '& .css-5xe99f-MuiLinearProgress-bar1': { backgroundColor: '#87CC9E', borderRadius: '12px' },
                backgroundColor: '#5A9BFF',
              }} />
          </Box>
        </div>
        <Skills dataSkills = {dataSkills}/>
        <div className='block'>
          <Typography variant="caption" display="block"
            sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line', margin: '24px 0 165px' }} >
            Осталось учиться
          </Typography>
        </div>
      </Box>
    // </ModalBlock>
  );
};

export default ModalProgress;
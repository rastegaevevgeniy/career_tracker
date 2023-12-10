import React, { useEffect, useState } from 'react';
import "./ModalSkill.scss";
import { api } from '../../utils/Api/Api';
import { CLOSE_ICON } from '../../utils/constants';
import { YourDataType } from '../../utils/Api/ApiConst';
// import { closeModal } from '../../redux/modal/actions.js';
import { closeModal } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Skills from '../Skills/Skills';
import {
  Typography,
  Modal,
  LinearProgress,
  SvgIcon,
  Box,
} from '@mui/material';


const ModalSkill: React.FC = () => {
  const [dataUser, setDataUser] = useState<YourDataType[] | null>(null);

  interface RootState {
    isModalOpen: boolean;
  }

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: RootState) => state.isModalOpen);

  useEffect(() => {
    api
      .getInitialTracker()
      // .then((data) => setDataUser(data))
      .then((data) => console.log(data))
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  const style = {
    height: '100%',
    right: '0',
    position: 'absolute',
    width: "936px",
    bgcolor: '#F1F3F7',
    padding: "36px 40px",
  };

  const style2 = {
    bgcolor: '#FFF',
    borderRadius: '10px',
    padding: '14px',
  }

  return (
    <div className='x'>
      {isModalOpen !== undefined &&
        <Modal
          open={isModalOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className='title'>
              <h1 className='title__text'>Навыки</h1>
              <button className='title__button' onClick={() => dispatch(closeModal())}>
                <SvgIcon>
                  {CLOSE_ICON}
                </SvgIcon>
              </button>
            </div>
            <Box sx={style2}>
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
              <Skills />
              <div className='block'>
                <Typography variant="caption" display="block"
                  sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line', margin: '24px 0 165px' }} >
                  Осталось учиться
                </Typography>
                <Typography variant="caption" display="block"
                  sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line', margin: '24px 0 165px' }} >
                  3 месяца из 12
                </Typography>
              </div>

              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div>
                  {dataUser && dataUser.map((item, index) => (
                    <div key={index}>
                      <h1>{item.username}</h1>
                      {item.profession.map((profession, profIndex) => (
                        <div key={profIndex}>
                          <h2>{profession.name}</h2>
                          <p>Level: {profession.level}</p>
                          <p>Salary: {profession.salary}</p>
                          <ul>
                            {profession.skills.map((skill, skillIndex) => (
                              <li key={skillIndex}>{skill}</li>
                            ))}
                          </ul>
                          <h3>Courses:</h3>
                          {profession.course.map((course, courseIndex) => (
                            <div key={courseIndex}>
                              <h4>{course.name}</h4>
                              <p>Description: {course.description}</p>
                              <p>Full Cost: {course.course_cost_full}</p>
                              <p>Per Month: {course.course_per_month}</p>
                              <a href={course.link_course} target="_blank" rel="noopener noreferrer">Link</a>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Typography>
            </Box>
          </Box>
        </Modal>
      }
      {/* <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >

        <div>
          <h2 id="simple-modal-title">Modal Title</h2>
          <p id="simple-modal-description">Modal content goes here.</p>
        </div>
      </Modal> */}
    </div>
  );
};

export default ModalSkill;
import React from 'react';
import "./ModalProgress.scss";
import Skills from '../Skills/Skills';
import { CLOSE_ICON } from '../../utils/constants';
import { closeModal } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import Chart from "../Chart/Chart";
import { Skill } from '../../utils/Api/ApiConst';
import {
  Typography,
  LinearProgress,
  Box,
  Modal,
  SvgIcon,
} from '@mui/material';

interface SkillsProps {
  dataSkillsProgress: Skill[];
}


const ModalProgress: React.FC<SkillsProps> = ({ dataSkillsProgress }) => {

  interface RootState {
    isProgressModalOpen: boolean;
  }

  const dispatch = useDispatch();
  const isProgressModalOpen = useSelector((state: RootState) => state.isProgressModalOpen);

  const styleModal = {
    height: '100%',
    right: '0',
    position: 'absolute',
    width: "936px",
    bgcolor: '#F1F3F7',
    padding: "36px 40px",
    overflowY: 'auto',
  };

  const styleSkills = {
    bgcolor: '#FFF',
    borderRadius: '10px',
    padding: '14px',
    marginBottom: '24px',
  }

  return (
    <div className='x'>
      {isProgressModalOpen !== undefined &&
        <Modal
          open={isProgressModalOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <div className='title'>
              <h2 className='title__text'>Прогресс</h2>
              <button className='title__button' onClick={() => dispatch(closeModal())}>
                <SvgIcon>
                  {CLOSE_ICON}
                </SvgIcon>
              </button>
            </div>
            <Box sx={styleSkills}>
              <div className='block'>
                <Chart />
              </div>
            </Box>
            <Box sx={styleSkills}>
              <div className='block'>
                <div className='block__title'>
                  <Typography variant="caption" display="block" sx={{ fontSize: '0.84rem', color: '#909099' }}>
                    ЗП с освоенными навыками
                  </Typography>
                  <Typography id="modal-modal-description" sx={{
                    fontFamily: 'Yandex Sans Text, Arial, sans-serif',
                    fontSize: '23px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: '24px',
                    paddingTop: "8px",
                  }} variant="h6" gutterBottom>
                    150 000 ₽
                  </Typography>
                </div>
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr max-content', alignItems: 'center', width: '572px' }}>
                  <LinearProgress
                    variant="determinate"
                    value={60}
                    sx={{
                      height: '12px',
                      borderRadius: '12px',
                      '& .css-5xe99f-MuiLinearProgress-bar1': { backgroundColor: '#87CC9E', borderRadius: '12px' },
                      backgroundColor: '#5A9BFF',
                      gridColumn: '1 / 2',
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: 'Yandex Sans Text, Arial, sans-serif',
                      color: '#1A1B22',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '1.25',
                      paddingLeft: '8px',
                      gridColumn: '2 / 3'
                    }}>
                    250 к
                  </Typography>
                </Box>
              </div>
              <Skills dataSkills={dataSkillsProgress} />
            </Box>
          </Box>
        </Modal>
      }
    </div>
  );
};

export default ModalProgress;
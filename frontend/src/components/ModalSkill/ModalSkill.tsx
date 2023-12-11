import React from 'react';
import "./ModalSkill.scss";
import { Skill } from '../../utils/Api/ApiConst';
import Skills from '../Skills/Skills';
import { CLOSE_ICON } from '../../utils/constants';
import { closeModal } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import {
  Typography,
  LinearProgress,
  Box,
  Modal,
  SvgIcon,
} from '@mui/material';

const ModalSkill: React.FC<{ dataSkills: Skill[] }> = (props) => {
  const { dataSkills } = props;


  interface RootState {
    isSkillsModalOpen: boolean;
  }

  const dispatch = useDispatch();
  const isSkillsModalOpen = useSelector((state: RootState) => state.isSkillsModalOpen);

  const styleModal = {
    height: '821px',
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
    height: '686px',
  }

  return (
    <div className='x'>
      {isSkillsModalOpen !== undefined &&
        <Modal
          open={isSkillsModalOpen}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styleModal}>
            <div className='title'>
              <h2 className='title__text'>Навыки</h2>
              <button className='title__button' onClick={() => dispatch(closeModal())}>
                <SvgIcon>
                  {CLOSE_ICON}
                </SvgIcon>
              </button>
            </div>
            <Box sx={styleSkills}>
              <div className='block'>
                <div className='block__title'>
                  <Typography variant="caption" className="block" sx={{ fontSize: '0.84rem', color: '#909099' }}>
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
                      gridColumn: '2 / 3',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 500,
                      lineHeight: '1.25',
                      paddingLeft: '8px'
                    }}>
                    60%
                  </Typography>
                </Box>
              </div>
              <Skills dataSkills={dataSkills} />
              <div className='block'>
                <Typography variant="caption" className="block"
                  sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line', margin: '24px 0 165px' }} >
                  Осталось учиться
                </Typography>
                <Typography variant="caption" className="block"
                  sx={{ fontSize: '16px', fontWeight: 400, lineHeight: '20px', minWidth: '254px', whiteSpace: 'pre-line', margin: '24px 0 165px' }} >
                  3 месяца из 12
                </Typography>
              </div>
            </Box>
          </Box>
        </Modal>
      }
    </div>
  );
};

export default ModalSkill;
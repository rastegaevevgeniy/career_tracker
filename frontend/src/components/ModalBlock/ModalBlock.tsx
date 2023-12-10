import React from 'react';
import "./ModalBlock.scss";
import { CLOSE_ICON } from '../../utils/constants';
import { closeModal } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import ModalSkill from '../../components/ModalSkill/ModalSkill';
import ModalProgress from '../../components/ModalProgress/ModalProgress';
import {
  Modal,
  SvgIcon,
  Box,
} from '@mui/material';

interface BlockProps {
  children: React.ReactNode;
  title: string;
}

const ModalBlock: React.FC<BlockProps> = ({ children, title }) => {

  interface RootState {
    isSkillsModalOpen: boolean;
    isProgressModalOpen: boolean;
  }

  const dispatch = useDispatch();
  const isSkillsModalOpen = useSelector((state: RootState) => state.isSkillsModalOpen);
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
            <ModalSkill />
          </Box>
        </Modal>
      }

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
            <ModalProgress />
          </Box>
        </Modal>
      }
    </div>
  );
};

export default ModalBlock;
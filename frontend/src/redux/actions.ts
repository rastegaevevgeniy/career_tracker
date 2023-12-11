import { 
  SET_CURRENT_MONTH, 
  OPEN_SKILLS_MODAL, 
  OPEN_PROGRESS_MODAL, 
  CLOSE_MODAL, 
  CLOSE_PROGRESS_MODAL 
} from './reducers';

export const setCurrentMonth = (month: string) => {
  return {
    type: SET_CURRENT_MONTH,
    payload: month,
  };
};

export const openSkillsModal = () => ({
  type: OPEN_SKILLS_MODAL,
});

export const openProgressModal = () => ({
  type: OPEN_PROGRESS_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

export const closeProgressModal = () => ({
  type: CLOSE_PROGRESS_MODAL,
});

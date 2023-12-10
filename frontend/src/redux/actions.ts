import { SET_CURRENT_MONTH, OPEN_MODAL, CLOSE_MODAL } from './reducers';

export const setCurrentMonth = (month: string) => {
  return {
    type: SET_CURRENT_MONTH,
    payload: month,
  };
};

export const openModal = () => ({
  type: OPEN_MODAL,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

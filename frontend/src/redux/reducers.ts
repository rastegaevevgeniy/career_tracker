export interface SalaryData {
  month: string;
  salary: number;
}

export interface RootState {
  //поля для графика
  salaryData: SalaryData[];
  currentMonth: string; 
  //поля для модалок
  isSkillsModalOpen: boolean;
  isProgressModalOpen: boolean;
}

const initialSalaryData: SalaryData[] = [
  { month: 'Январь', salary: 50 },
  { month: 'Февраль', salary: 70 },
  { month: 'Март', salary: 100 },
  { month: 'Апрель', salary: 110 },
  { month: 'Май', salary: 150 },
  { month: 'Июнь', salary: 175 },
  { month: 'Июль', salary: 250 },
];

const initialState: RootState = {
  //поля для графика
  salaryData: initialSalaryData,
  currentMonth: 'Май', // текущий месяц
  //поля для модалок
  isSkillsModalOpen: false,
  isProgressModalOpen: false,
};

export const SET_CURRENT_MONTH = 'SET_CURRENT_MONTH';
export const OPEN_SKILLS_MODAL = 'OPEN_SKILLS_MODAL';
export const OPEN_PROGRESS_MODAL = 'OPEN_PROGRESS_MODAL';
export const CLOSE_MODAL = 'CLOSE_SKILLS_MODAL';
export const CLOSE_PROGRESS_MODAL = 'CLOSE_PROGRESS_MODAL';

type RootAction =
  | { type: typeof SET_CURRENT_MONTH; payload: string }
  | { type: typeof OPEN_SKILLS_MODAL }
  | { type: typeof OPEN_PROGRESS_MODAL }
  | { type: typeof CLOSE_MODAL }
  | { type: typeof CLOSE_PROGRESS_MODAL }

const rootReducer = (state = initialState, action: RootAction): RootState => {
  switch (action.type) {
    //обработчик для графика
    case SET_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };
    //обработчик для модалок
    case OPEN_SKILLS_MODAL:
      return {
        ...state,
        isSkillsModalOpen: true,
      };
    case OPEN_PROGRESS_MODAL:
      return {
        ...state,
        isProgressModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isSkillsModalOpen: false,
        isProgressModalOpen: false,
      };
      case CLOSE_PROGRESS_MODAL:
        return {
          ...state,
          isProgressModalOpen: false,
        };
    default:
      return state;
  }
};

export default rootReducer;

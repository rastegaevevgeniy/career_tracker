export interface SalaryData {
  month: string;
  salary: number;
}

export interface RootState {
  //поля для графика
  salaryData: SalaryData[];
  currentMonth: string; 
  //поля для модалок
  isModalOpen: boolean;
}

const initialSalaryData: SalaryData[] = [
  { month: 'Янв', salary: 50 },
  { month: 'Фев', salary: 70 },
  { month: 'Мар', salary: 100 },
  { month: 'Апр', salary: 110 },
  { month: 'Май', salary: 150 },
  { month: 'Июн', salary: 175 },
  { month: 'Июл', salary: 250 },
];

const initialState: RootState = {
  //поля для графика
  salaryData: initialSalaryData,
  currentMonth: 'Май', // текущий месяц
  //поля для модалок
  isModalOpen: false,
};

export const SET_CURRENT_MONTH = 'SET_CURRENT_MONTH';
export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

type RootAction =
  | { type: typeof SET_CURRENT_MONTH; payload: string }
  | { type: typeof OPEN_MODAL }
  | { type: typeof CLOSE_MODAL };

const rootReducer = (state = initialState, action: RootAction): RootState => {
  switch (action.type) {
    //обработчик для графика
    case SET_CURRENT_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };
    //обработчик для модалок
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default rootReducer;

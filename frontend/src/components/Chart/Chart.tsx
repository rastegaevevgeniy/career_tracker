import React from 'react';
import './Chart.scss'
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ReferenceLine } from 'recharts';
import { Typography } from '@mui/material';

const Chart: React.FC = () => {

  const salaryData = useSelector((state: RootState) => state.salaryData); // Получение данных о месяце из Redux
  const currentMonth = useSelector((state: RootState) => state.currentMonth); // Получение текущего месяца из Redux

  const gradientOffset = () => {
    if (!salaryData) {
      return 0;
    }
    const currentMonthIndex = salaryData.findIndex((data) => data.month === currentMonth);
    if (currentMonthIndex === -1) {
      return 0; // Если текущий месяц не найден, вернуть начальный цвет (зеленый, например)
    }
    const totalMonths = salaryData.length - 1; // Общее количество месяцев, -1 потому что индексация начинается с 0
    return currentMonthIndex / totalMonths; // Вернуть относительный оффсет для текущего месяца
  };


  const off = gradientOffset();


  return (
      <div className="chart-container">
        <Typography variant="h6" component="h3" className="chart-container__title">
          Процесс роста заработной платы
        </Typography>
        <Typography className="chart-container__text">
          Стоимость релевантных вакансий ₽ тыс.
        </Typography>
        <AreaChart width={800} height={270} data={salaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="month" 
            style={{
              fontFamily: 'Yandex Sans Text',
              fontSize: '11px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '12px',
              color: '#1A1B22',
            }}
            tickMargin={8} // Отступ от оси
          />
          <YAxis
            domain={[0, 250]}
            ticks={[50, 100, 150, 200, 250]}
            style={{
              fontFamily: 'Yandex Sans Text',
              fontSize: '11px',
              fontStyle: 'normal',
              fontWeight: 500,
              lineHeight: '12px',
              textAnchor: 'end', // Для правильного выравнивания текста
              color: '#1A1B22',
            }}
            tickMargin={30} // Отступ от оси
          />
          <Tooltip />

          {/* Область до текущего месяца с градиентом */}
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset={off} stopColor="#87CC9E" stopOpacity={1} />
              <stop offset={off} stopColor="#ACCCFF" stopOpacity={1} />
            </linearGradient>
          </defs>

          <Area
            type="monotone" dataKey="salary" stroke="#B5B5B7" fill="url(#splitColor)"
          />

          {currentMonth && <ReferenceLine x={currentMonth} stroke="#B5B5B7" strokeDasharray="3 3" />}
        </AreaChart>
      </div>
  )
}

export default Chart;
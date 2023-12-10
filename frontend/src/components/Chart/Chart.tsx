import React from 'react';
import './Chart.scss'
import { RootState } from '../../redux/reducers';
import { useSelector } from 'react-redux';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ReferenceLine } from 'recharts';

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
        <AreaChart width={800} height={400} data={salaryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 250]} />
          <Tooltip />

          {/* Область до текущего месяца с градиентом */}
          <defs>
            <linearGradient id="splitColor" x1="0" y1="0" x2="1" y2="0">
              <stop offset={off} stopColor="green" stopOpacity={1} />
              <stop offset={off} stopColor="red" stopOpacity={1} />
            </linearGradient>
          </defs>

          <Area
            type="monotone" dataKey="salary" stroke="#8884d8" fill="url(#splitColor)"
          />

          {currentMonth && <ReferenceLine x={currentMonth} stroke="red" strokeDasharray="3 3" label="Current Month" />}
        </AreaChart>
      </div>
  )
}

export default Chart;
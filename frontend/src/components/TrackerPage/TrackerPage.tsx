import React from 'react';
import "./TrackerPage.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";
import CousesBlock from "../CoursesBlock/CoursesBlock";
import ReccomendationsBlock from "../ReccomendationsBlock/ReccomendationsBlock";
import AchiveBlock from "../AchiveBlock/AchiveBlock";
import Chart from "../Chart/Chart";

const TrackerPage: React.FC = () => {
  
  return (
    <div className='tracker-page'>
      <ProgressBlock />
      <CousesBlock />
      <ReccomendationsBlock />
      <AchiveBlock />
      <Chart />
    </div>
  );
}

export default TrackerPage;
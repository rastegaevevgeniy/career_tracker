import React from 'react';
import "./TrackerPage.scss";
import ProgressBlock from "../ProgressBlock/ProgressBlock";
import CousesBlock from "../CoursesBlock/CoursesBlock";
import ReccomendationsBlock from "../ReccomendationsBlock/ReccomendationsBlock";

const TrackerPage: React.FC = () => {
  
  return (
    <div className='tracker-page'>
      <ProgressBlock />
      <CousesBlock />
      <ReccomendationsBlock />
    </div>
  );
}

export default TrackerPage;
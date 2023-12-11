import React from 'react';
import "./StartPage.scss";


const StartPage: React.FC = () => {

  return (
    <div className='startPage'>
      <div className='startPage__image'></div>
      <h1 className='startPage__title'>
        Добро пожаловать в Мастерскую Яндекс
      </h1>
    </div>
  );
}

export default StartPage;
import React, { useEffect, useState } from 'react';
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import ModalSkill from "../ModalSkill/ModalSkill";
import ModalProgress from "../ModalProgress/ModalProgress";
import { YourDataType } from '../../utils/Api/ApiConst';
import { api } from '../../utils/Api/Api';



export default function App() {
  const [dataUser, setDataUser] = useState<YourDataType[] | null>(null);


  const firstUserData = dataUser ? dataUser[0].my_course : null;
  const skillsDataMastered = firstUserData ? firstUserData[0].skills.mastered! : [];
  const skillsDataNotMastered = firstUserData ? firstUserData[0].skills.not_mastered! : [];
  const courseName = firstUserData ? firstUserData[0].name : ''
  const newArray = [courseName]
  const profession = dataUser ? dataUser[0].profession : null;
  const recommendation = profession ? profession[0].recommendation_course.map(el => el.name) : []


  const dataSkills = [
    {
      p: 'Уже усвоено',
      color: { backgroundColor: '#87CC9E', borderRadius: '6px' },
      name: skillsDataMastered
    },
    {
      p: 'Нужно освоить',
      color: { backgroundColor: '#ACCCFF', borderRadius: '6px' },
      name: skillsDataNotMastered
    },
    {
      p: 'Текущий курс',
      color: { backgroundColor: '#FFDDE5', borderRadius: '6px' },
      name: newArray
    },
    {
      p: `Рекомендованные  \nкурсы`,
      color: { backgroundColor: '#DDE0E4', borderRadius: '6px' },
      name: recommendation
    },
  ];

  const dataSkillsProgress = [
    {
      p: 'Пройденные курсы',
      color: { backgroundColor: '#87CC9E', borderRadius: '6px' },
      name: ['Экономика и бизнес-модель продукта']
    },
    {
      p: 'Текущие курсы',
      color: { backgroundColor: '#ACCCFF', borderRadius: '6px' },
      name: newArray
    },
    {
      p: 'Рекомендовано',
      color: { backgroundColor: '#DDE0E4', borderRadius: '6px' },
      name: recommendation
    }
  ];

  useEffect(() => {
    api
      .getInitialTracker()
      .then((data) => {
        // console.log(data);
        setDataUser(data)
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, [])

  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommendations" element={<Main />} />
      </Routes>
      <ModalSkill dataSkills={dataSkills} />
      <ModalProgress dataSkillsProgress={dataSkillsProgress} />
    </div>
  )
}
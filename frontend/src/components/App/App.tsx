import React from 'react';
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import ModalSkill from "../ModalSkill/ModalSkill";
import { Provider } from 'react-redux';
import store from '../../store';

export default function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/recommendations" element={<Main />} />
        </Routes>
        <ModalSkill />
      </div>
    </Provider>
  )
}
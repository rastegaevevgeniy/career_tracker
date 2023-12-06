import React, { useState } from 'react';
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import ModalSkill from "../ModalSkill/ModalSkill"

export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/recommendations" element={<Main />} />
      </Routes>
      <ModalSkill />
    </div>
  )
}
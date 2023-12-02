import React from 'react';
import './App.scss'
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* меню */}
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/recommendations" element={<Main />}/>
      </Routes>
    </div>
  )
}
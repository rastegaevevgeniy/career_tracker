import React from 'react';
import "./Main.scss";
import { useLocation } from "react-router-dom";
import StartPage from "../StartPage/StartPage";
import TrackerPage from "../TrackerPage/TrackerPage";

function Main() {
  const { pathname } = useLocation();

  const startPage = pathname === "/";
  const trackerPage = pathname === "/recommendations";

  return (
    <main className="main">
      {startPage && <StartPage />}
      {trackerPage && <TrackerPage />}
    </main>
  );
}

export default Main;

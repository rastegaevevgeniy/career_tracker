import React from 'react';
import "./Main.scss";
import { useLocation } from "react-router-dom";
import Menu from "../Menu/Menu";
import StartPage from "../StartPage/StartPage";
// import TrackerBlock from "../TrackerBlock/TrackerBlock";

function Main() {
  const { pathname } = useLocation();

  const startPage = pathname === "/";
  // const trackerPage = pathname === "/recommendations";

  return (
    <main className="main">
      <Menu />
      {startPage && <StartPage />}
      {/* {trackerPage && <TrackerBlock />} */}
    </main>
  );
}

export default Main;

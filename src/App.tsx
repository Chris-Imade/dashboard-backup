import React from 'react';
import styles from './App.module.css';
import { Aside, Home } from "./components/index";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className={`${styles.app} lg:overflow-y-hidden`}>
     <div className={styles.left}>
      <Aside />
     </div>
     <div className={styles.right}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
     </div>
    </div>
  );
}

export default App;

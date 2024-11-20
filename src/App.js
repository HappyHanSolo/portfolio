import React, {useState} from "react";
import "./styles/styles.scss";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/Pages/Home/Home";
import CompletedConnectForm from "./components/Pages/CompletedConnectForm/index";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/completedForm" element={<CompletedConnectForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

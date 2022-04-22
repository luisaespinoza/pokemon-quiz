import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Quiz from "./quiz/Quiz"
import Start from "./start/Start"
import Setup from "./setup/Setup"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="start" element={<Start />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="setup" elmennt={<Setup />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './component/header/Header';
import Sypht from './pages/sypht/Sypht.jsx';
import DateCalculator from './pages/date-calculator/DateCalculator.jsx';
import PieLoader from './pages/pie-loader/PieLoader.jsx';

export const BASE_URL = "/Sypht";
export const CALCULATOR_URL = `${BASE_URL}/date-calculator`;
export const PIE_LOADER_URL =`${BASE_URL}/pie-loader`;

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact={true} path={CALCULATOR_URL} component={DateCalculator}/>
        <Route exact={true} path={PIE_LOADER_URL} component={PieLoader}/>
        <Route exact={true} path={BASE_URL} component={Sypht}/>
      </div>
    </Router>
  );
}
   
export default App;

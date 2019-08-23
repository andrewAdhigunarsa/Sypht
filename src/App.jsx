import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './component/header/Header';
import Sypht from './pages/sypht/Sypht.jsx';
import DateCalculator from './pages/date-calculator/DateCalculator.jsx';
import PieLoader from './pages/pie-loader/PieLoader.jsx';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Route exact={true} path="/Sypht/date-calculator" component={DateCalculator}/>
        <Route exact={true} path="/Sypht/pie-loader" component={PieLoader}/>
        <Route exact={true} path="/Sypht" component={Sypht}/>
      </div>
    </Router>
  );
}
   
export default App;

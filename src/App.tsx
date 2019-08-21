import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './component/header/Header';
import Sypht from './pages/sypht/Sypht';
import DateCalculator from './pages/date-calculator/DateCalculator';
import PieLoader from './pages/pie-loader/PieLoader';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Sypht}/>
        <Route path="/date-calculator" component={DateCalculator}/>
        <Route path="/pie-loader" component={PieLoader}/>
      </div>
    </Router>
  );
}
   
export default App;

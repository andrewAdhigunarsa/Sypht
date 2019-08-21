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
        <Route exact path="/" component={Sypht}/>
        <Route path="/date-calculator" component={DateCalculator}/>
        <Route path="/pie-loader" component={PieLoader}/>
      </div>
    </Router>
  );
}
   
export default App;

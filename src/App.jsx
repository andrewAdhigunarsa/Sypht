import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './component/header/Header';
import Sypht from './pages/sypht/Sypht.jsx';
import DateCalculator from './pages/date-calculator/DateCalculator.jsx';
import PieLoader from './pages/pie-loader/PieLoader.jsx';
import Axios from 'axios';

export const BASE_URL = "/Sypht";
export const CALCULATOR_URL = `${BASE_URL}/date-calculator`;
export const PIE_LOADER_URL =`${BASE_URL}/pie-loader`;

class App extends React.Component {

  async fetchToken(){
      try{
          const config = {
            method: "get",
            url: "http://localhost:3003/token",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          };
          const response = await Axios(config);

          if(response.status === 200){
              sessionStorage.setItem(
                "syphtToken",
                JSON.stringify(response.data)
              );
          }else{
            console.log(response.status);
          }

      }catch(e){
        console.log(e)
      }
    }

  componentDidMount(){
    this.fetchToken()
  }

  render(){
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
}
   
export default App;

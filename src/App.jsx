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

class App extends React.Component {

  async fetchToken(){
    try{
        const URL = 'https://login.sypht.com/oauth/token/';
        const body ={
          client_id: `${process.env.REACT_APP_SYPHT_CLIENT_ID}`,
          client_secret: `${process.env.REACT_APP_SYPHT_CLIENT_SECRET}`,
          audience: "https://api.sypht.com",
          grant_type: "client_credentials"
        }
        const options = {
          method:'POST',
          body: JSON.stringify(body),
          header:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        };
        const response = await fetch(URL, options);

        if(response){
            sessionStorage.setItem(
              "syphtToken",
              JSON.stringify(response)
            );
        }else{
          console.log(response);
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

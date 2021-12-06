
import './App.css';
import Header from './components/header/Header';
import HeaderBanner from './components/header/HeaderBaner/HeaderBanner';
import Bascet from './components/main/bascet/bascet';
import HomePage from './components/HomePage';
import RegisterPage from './components/main/LoginForm/forms/reg';

import {  Route, Switch } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getCardsResolve } from './store/selected';


function App() {

  const dispatch = useDispatch();
  dispatch(getCardsResolve(JSON.parse(localStorage.getItem("data2"))));
  
  return (
    
    <Switch>
      <Route>
        <>
          <Header />
          <Switch>
            <Route path="/" exact component={HeaderBanner} />
            <Route path="/characters" exact component={HomePage} />
            <Route path="/basket" component={Bascet} />
            <Route path ="/reg" component={RegisterPage} />
          </Switch>
        </>
      </Route>
    </Switch>






  );
}

export default App;


import Header from './components/header/Header';
import HeaderBanner from './components/header/HeaderBaner/HeaderBanner';
import Basket from './components/main/basket/basket';
import Catalog from './components/main/catalog';
import RegisterPage from './components/main/RegForm/reg'

import User from './components/main/user/User';

import HomePageMobile from './mobile/HomePage/HomePageMobile';
import CatalogMobile from './mobile/catalog/catalogMobile';
import BasketMobile from './mobile/basket/basket';
import Navigation from './mobile/navigation/Navigation';
import UserPageMobile from './mobile/UserPageMobile/UserPageMobile';

import { BrowserView, MobileView } from 'react-device-detect';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './Routes/PrivateRoutes';
import PublicRoutes from './Routes/PublicRoutes';
import { useDispatch } from 'react-redux';
import { isUserLoad, token } from './store/user';
import React, { useEffect } from 'react';

// import FirebaseClass from './firebase/getData';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // FirebaseClass.getCharacters();
    getLoadStatus();
  }, []);

  const getLoadStatus = () => {
    if (localStorage.getItem("idToken") != null) {
      dispatch(isUserLoad(true));
      dispatch(token(localStorage.getItem("idToken")));
    } else {
      dispatch(isUserLoad(false));
    }
  }

  return (
    <>
      <BrowserView>
        <Switch>
          <Route>
            <>
              <React.StrictMode>
                <Header />
                <Switch>
                  <Route path="/" exact render={() => <HeaderBanner />} />
                  <Route path="/characters" render={() => <Catalog />} />
                  <Route path="/basket" component={Basket} />
                  <PublicRoutes path="/reg" component={RegisterPage} />
                  <PrivateRoute path="/userpage" component={User} />
                </Switch>
              </React.StrictMode>
            </>
          </Route>
        </Switch>
      </BrowserView>
      <MobileView>
        <Switch>
          <Route>
            <>
              <Navigation />
              <Switch>
                <Route path="/" exact render={() => <HomePageMobile />} />
                <Route path="/characters" render={() => <CatalogMobile />} />
                <Route path="/basket" render={() => <BasketMobile />} />
                <Route path="/reg" render={() => <RegisterPage />} />
                <Route path="/userpage" component={UserPageMobile} />
              </Switch>
            </>
          </Route>
        </Switch>
      </MobileView>
    </>
  );
}

export default App;


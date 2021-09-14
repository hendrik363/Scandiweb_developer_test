import React from "react";
import { Switch, Route } from 'react-router-dom';

// layouts 
import MainLayout from "./layouts/MainLayout";

// pages
import HomePage from './pages/HomePage/HomePage'
import Womensclothes from './pages/Womenscltohes/Womensclothes';
import Mensclothes from './pages/Mensclothes/Mensclothes';
import KidsClothes from "./pages/Kidsclothes/Kidsclothes";

import './default.scss';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route exact path="/" render={() => (
            <MainLayout>
              <HomePage />
            </MainLayout>
          )} />
          <Route path="/women" render={() => (
            <MainLayout>
              <Womensclothes />
            </MainLayout>
          )} />
          <Route path="/men" render={() => (
            <MainLayout>
              <Mensclothes />
            </MainLayout>
          )} />
          <Route path="/kids" render={() => (
            <MainLayout>
              <KidsClothes />
            </MainLayout>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;

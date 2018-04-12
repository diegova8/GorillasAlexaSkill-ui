import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Home from '../home';
import loginPage from '../../components/loginPage';
import ErrorPage from '../../components/errorPage';

import '../../styles/app.css';

const App = () => (
  <div className="wrapper">
    <Header />
    <main className="app-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login-page" component={loginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </main>
    <Footer />
  </div>
)

export default App

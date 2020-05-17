import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';
import { Context } from './Context';

import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';
import NotFound from './pages/NotFound';

import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />

        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />

        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect noThrow from="/login" to="/" />}

        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </>
  );
};

export default App;

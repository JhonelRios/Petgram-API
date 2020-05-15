import React, { useContext } from 'react';
import { Router } from '@reach/router';
import { Context } from './Context';

import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Details from './pages/Details';
import Favs from './pages/Favs';
import User from './pages/User';
import NotRegisteredUser from './pages/NotRegisteredUser';

import GlobalStyle from './styles/GlobalStyles';

const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Details path="/details/:detailId" />
      </Router>
      {isAuth ? (
        <Router>
          <Favs path="/favs" />
          <User path="/user" />
        </Router>
      ) : (
        <Router>
          <NotRegisteredUser path="/favs" />
          <NotRegisteredUser path="/user" />
        </Router>
      )}
      <NavBar />
    </>
  );
};

export default App;

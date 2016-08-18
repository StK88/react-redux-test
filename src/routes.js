import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Contacts from './pages/Contacts';
import LoginPage from './pages/LoginPage';
import RegistrationPage from './pages/RegistrationPage';

export default function Routes(store) {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="contacts" component={Contacts}/>
      <Route path="register" component={RegistrationPage}/>
      <Route path="login" component={LoginPage}/>
    </Route>
  )
}

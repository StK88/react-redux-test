import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import pageA from './components/pages/pageA';
import pageB from './components/pages/pageB';

export default function Routes(store) {

  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage}/>
      <Route path="pageA" component={pageA}/>
      <Route path="pageB" component={pageB}/>
    </Route>
  )
}

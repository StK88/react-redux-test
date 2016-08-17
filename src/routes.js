import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import pageA from './pages/pageA';
import pageB from './pages/pageB';

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

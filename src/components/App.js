import React from 'react';
import MainMenu from './MainMenu';

const App = ({ children }) => (
  <div className="main-container">
    <MainMenu props={children.props.routes[0]} />
    {children}
  </div>
)

export default App;

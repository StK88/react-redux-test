import React from 'react';
import { Link, IndexLink } from 'react-router';

const MainMenu = (ownProps) => {

  const { childRoutes } = ownProps.props;
  const ACTIVE = { color: 'black' };

  let links = childRoutes.map((r, i) => (
    <Link to={r.path} key={i} className="menu__item" activeStyle={ACTIVE}>{r.component.name}</Link>
  ))

  return (
    <nav className="menu" role="navigation">
      <IndexLink to="/" className="menu__item" activeStyle={ACTIVE}>Home</IndexLink>
      {links}
    </nav>
  )
}

export default MainMenu;

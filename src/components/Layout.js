import React from 'react';
import MainMenu from './MainMenu';

class Layout extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="main-container">
        <MainMenu props={this.props.children.props.routes[0]} />
        {this.props.children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: React.PropTypes.object
}

export default Layout;

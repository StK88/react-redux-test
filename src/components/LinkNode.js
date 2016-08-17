import React, { PropTypes } from 'react';

const LinkNode = ({ active, children, onClick }) => {

  let classNames = active ? 'link--active' : null;

  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      className={classNames}
    >
      {children}
    </a>
  )
}

LinkNode.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default LinkNode

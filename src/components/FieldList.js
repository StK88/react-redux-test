import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let FieldList = ({ fields, toggleChecked, removeItem }) => (
  <ul className="field-list">
    <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
    {fields.map((field) => (

        <li
          className="field-list__item"
          key={field.id}
          {...field}
        >
          <span
            className={classNames('list-item', { 'list-item--active': field.selected })}
            onClick={() => toggleChecked(field.id)}
          >
            {field.text}
          </span>
          <span
            className="field-list__remove-item"
            onClick={(e) => {
            e.stopPropagation();
            removeItem(field.id)
            }}
          >&#10006;</span>
        </li>
      )
    )}
    </ReactCSSTransitionGroup>
  </ul>
)

FieldList.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleChecked: PropTypes.func.isRequired
}

export default FieldList

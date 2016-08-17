import React from 'react';
import { connect } from 'react-redux';
import { addText } from '../actions';
import classNames from 'classnames';

let Form = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
       className="form"
        onSubmit={ e => {
          e.preventDefault();
          if(!input.value.trim()) {
            return
          }
          dispatch(addText(input.value));
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node
          }}
          type="text"
          className="form__input"
          placeholder="Type..."
        />
        <button type="submit" className="form__button">Add</button>
      </form>
    </div>
  )
};


Form = connect()(Form);

export default Form

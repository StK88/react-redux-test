import Immutable from 'immutable';
import { connect } from 'react-redux';
import { toggleField, removeField } from '../actions';
import FieldList from '../components/FieldList';

const sortFields = (fields, sortBy) => {

  switch (sortBy) {
    case 'NEW_ADDED':
      return fields
    case 'LATEST_ADDED':
      return Immutable.fromJS(fields).reverse().toJS();
    case 'A_Z':
      return Immutable.List(fields)
        .sort((a, b) => a.text.localeCompare(b.text))
        .map(x => x).toJS();
    case 'Z_A':
      return Immutable.List(fields)
        .sort((a, b) => b.text.localeCompare(a.text))
        .map(x => x).toJS();
    case 'SELECTED':
      return fields.filter( f => f.selected);
    case 'UNSELECTED':
      return fields.filter( f => !f.selected);
  }
}

const mapStateToProps = (state) => {
  return {
    fields: sortFields(state.fields, state.sortBy)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleChecked: (id) => {
      dispatch(toggleField(id))
    },
    removeItem: (id) => {
      dispatch(removeField(id))
    }
  }
}

const SortFieldList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldList)

export default SortFieldList;

import { connect } from 'react-redux';
import LinkNode from '../components/LinkNode';
import { setSortBy } from '../actions';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.sortBy === state.sortBy
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setSortBy(ownProps.sortBy));
    }
  }
}

const SortLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkNode);

export default SortLink;

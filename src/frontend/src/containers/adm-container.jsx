import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TestContainer from './test-container';
import { Actions } from '../reducers/adm';

function AdmContainer(props) {
  console.log("App", props);
  return <TestContainer />;
}
const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdmContainer);

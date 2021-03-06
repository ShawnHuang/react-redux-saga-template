import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions } from '../reducers/adm';
import Test from '../components/adm/test';

const mapStateToProps = (state) => {
  return {
    text: state.admin.text,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    broadcastMsg: bindActionCreators(Actions.broadcastMsg, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Test);

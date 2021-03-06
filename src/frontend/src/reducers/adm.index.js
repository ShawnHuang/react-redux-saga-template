import { combineReducers } from 'redux';
import AdmReducer from './adm';

export default combineReducers({
  admin: AdmReducer
});


import { combineReducers, Reducer } from 'redux';
import { getType } from 'typesafe-actions';
import { $Call } from 'utility-types';
import { setText } from './root-action';

// tslint:disable-next-line:no-empty-interface
interface IStoreEnhancerState { }
export type RootAction = $Call<typeof setText> ;

export interface IRootState extends IStoreEnhancerState {
  text: string;
}

export const rootReducer: Reducer<IRootState, RootAction> = combineReducers<IRootState, any>({
  text: (state = '', action: RootAction) => {
    switch (action.type) {
      case getType(setText):
        return action.text;
      default:
        return state;
    }
    return state;
  },
});

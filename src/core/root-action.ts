import { createAction } from 'typesafe-actions';

const SET_TEXT = 'SET_TEXT';
export const setText = createAction(
  SET_TEXT,
  (text: string) => ({
    text,
    type: SET_TEXT,
  }),
);

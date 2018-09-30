import { all, takeLatest } from 'redux-saga/effects';

import { Types as TopRatedTypes } from '../ducks/topratedmovie';
import { getTopRatedMovie } from './topratedmovie';

export default function* rootSaga() {
  return yield all([
    takeLatest(TopRatedTypes.GET_REQUEST, getTopRatedMovie),
  ]);
}

import { all, takeLatest } from 'redux-saga/effects';

import { Types as TopRatedTypes } from '../ducks/topratedmovie';
import { getTopRatedMovie } from './topratedmovie';

import { Types as PopularMovieTypes } from '../ducks/popularmovie';
import { getPopularMovie } from './popularmovie';

export default function* rootSaga() {
  return yield all([
    takeLatest(TopRatedTypes.GET_REQUEST, getTopRatedMovie),
    takeLatest(PopularMovieTypes.GET_REQUEST, getPopularMovie),
  ]);
}

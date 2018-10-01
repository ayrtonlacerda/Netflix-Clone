import { put, call } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PopularMActions } from '../ducks/popularmovie';

export function* getPopularMovie() {
  try {
    const response = yield call(api.post, '/movie/popular?api_key=b9db7b5b3d4aeb27928b58e1cf7beae0');

    yield put(PopularMActions.getPMsuccess(response.data.results))
    console.tron.log(response)
    console.tron.log(response.data.results)
  } catch (err) {
    yield put(PopularMActions.getPMfailuire('Não foi possivel carregar filmes'))
  }
}

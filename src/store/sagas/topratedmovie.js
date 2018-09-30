import api from '../../services/api';
import { call, put } from 'redux-saga/effects';

import { Creators as TRMActions } from '../ducks/topratedmovie';

export function* getTopRatedMovie() {
  try {
    const response = yield call(
      api.get, '/movie/top_rated?api_key=b9db7b5b3d4aeb27928b58e1cf7beae0');

    yield put(TRMActions.getTRMsuccess(response.data));
    console.tron.log(response.data);
  } catch (err) {
    yield put(TRMActions.getTRMfailure('Não foi possivel busca filmes'));
  }
}

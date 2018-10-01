import { combineReducers } from 'redux';

import theratedM from './topratedmovie';
import popularM from './popularmovie';

export default combineReducers({
  theratedM,
  popularM,
});

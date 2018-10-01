export const Types = {
  GET_REQUEST: 'topratedmovie/GET_REQUEST',
  GET_SUCCESS: 'topratedmovie/GET_SUCCESS',
  GET_FAILURE: 'topratedmovie/GET_FAILURE',
};

const initialState = {
  data: [],
  erro: null,
  content: false,
};

export default function theratedM(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return state;
    case Types.GET_SUCCESS:
      return { ...state, data: action.payload.data, erro: null, content: true };
    case Types.GET_FAILURE:
      return { ...state, erro: action.payload.erro, content: false };
    default:
      return state;
  }
}
// TRM = top rated movie
export const Creators = {
  getTRMrequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getTRMsuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data }
  }),

  getTRMfailure: error => ({
    type: Types.GET_FAILURE,
    payload: { error }
  }),

};

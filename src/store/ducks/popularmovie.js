export const Types = {
  GET_REQUEST: 'popularmovie/REQUEST',
  GET_SUCCESS: 'popularmovie/SUCCESS',
  GET_FAILURE: 'popularmovie/FAILURE',
};

const initialState = {
  data: [],
  erro: null,
  content: false,
};

export default function popuparM(state = initialState, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return state;
    case Types.GET_SUCCESS:
      return { ...state, content: true, data: action.payload };
    case Types.GET_FAILURE:
      return { ...state, content: false, erro: action.payload };
    default:
      return state;
  }
}

export const Creators = {
  getPMrequest: () => ({
    type: Types.GET_REQUEST,
  }),

  getPMsuccess: data => ({
    type: Types.GET_SUCCESS,
    payload: { data },
  }),

  getPMfailuire: erro => ({
    type: Types.GET_FAILURE,
    payload: { erro },
  })
};

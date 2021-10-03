import ACTION from '../actions/actionTypes';

const initialState = {
  superheroes: [],
  superheroData: {},
  isFetching: false,
  successMessage: null,
  error: null,
  params: {
    limit: 5,
    offset: 0,
  },
  isEdit: false,
  isDeleted: false
};

function heroesReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION.SUPERHEROES_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    }
    case ACTION.CREATE_SUPERHERO_SUCCESS: {
      return {
        superheroData: {},
        successMessage: 'Superhero was successfully created',
        isFetching: false,
        error: false,
      };
    }
    case ACTION.GET_SUPERHEROES_SUCCESS: {
      return {
        ...state,
        superheroes: action.data,
        isFetching: false,
        error: false,
      }
    }
    case ACTION.GET_SUPERHERO_SUCCESS: {
      return {
        ...state,
        superheroData: action.data,
        isFetching: false,
        error: false
      }
    }
    case ACTION.UPDATE_SUPERHERO_SUCCESS: {
      return {
        ...state,
        successMessage: 'Superhero has been successfully modified',
        isFetching: false,
        error: false,
      }
    }
    case ACTION.DELETE_SUPERHERO_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isDeleted: true,
        error: false,
      }
    }
    case ACTION.SUPERHEROES_REQUEST_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    }
    case ACTION.CLEAR_NOTIFICATION: {
      return {
        error: null,
        successMessage: null,
      };
    }
    case ACTION.CHANGE_HERO_INFO_MODE: {
      return {
        ...state,
        isEdit: !state.isEdit,
      }
    }
    default: {
      return state;
    }
  }
}
export default heroesReducer;

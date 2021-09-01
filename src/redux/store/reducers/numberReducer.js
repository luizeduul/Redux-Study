import { CHANGE_MAX_VALUE, CHANGE_MIN_VALUE} from '../actions/actionTypes';

const initialState = {
  min: 1,
  max: 10
}

export default function numbersReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MIN_VALUE:
      return {
        ...state,
        min: action.payload
      }

    case CHANGE_MAX_VALUE:
      return {
        ...state,
        max: action.payload
      }

    default: return state;
  }
}
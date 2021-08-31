/* eslint-disable import/no-anonymous-default-export */
const initialState = {
  min: 1,
  max: 10
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_MIN_VALUE':
      return {
        ...state,
        min: action.payload
      }

    case 'CHANGE_MAX_VALUE':
      return {
        ...state,
        max: action.payload
      }

    default: return state;
  }
}
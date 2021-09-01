import { CHANGE_MAX_VALUE, CHANGE_MIN_VALUE } from './actionTypes';

export function changeMinValue(newNumber) {
  return {
    type: CHANGE_MIN_VALUE,
    payload: newNumber
  }
}

export function changeMaxValue(newNumber) {
  return {
    type: CHANGE_MAX_VALUE,
    payload: newNumber
  }
}
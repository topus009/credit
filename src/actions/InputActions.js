import {
  TOGGLE_SELECT,
  SELECT_TYPE,
  HANDLE_INPUT,
} from '../constants/App';

export function toggle_select() {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_SELECT,
    });
  }
}

export function select_type(text) {
  return (dispatch) => {
    dispatch({
      type: SELECT_TYPE,
      payload: text,
    });
  }
}

export function handle_input(name,event) {
  const number = event.target.value.replace(/\D/g, '');
  return (dispatch) => {
    dispatch({
      type: HANDLE_INPUT,
      payload: [
        name,
        number,
      ],
    });
  }
}
import {
  CHECK_STEP_1,
} from '../constants/App';

export function check_step_1() {
  return (dispatch) => {
    dispatch({
      type: CHECK_STEP_1,
    });
  }
}

export function check_step_2() {
  return (dispatch) => {
    dispatch({
      // type: CHECK_STEP_2,
    });
  }
}
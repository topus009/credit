import {
  CHECK_STEP_1,
  HANDLE_RANGE,
  GO_TO_STEP_3,
  CANCEL,
} from '../constants/App';

export function check_step_1() {
  return (dispatch) => {
    dispatch({
      type: CHECK_STEP_1,
    });
  }
}

export function handle_range(type,value) {
  return (dispatch) => {
    dispatch({
      type: HANDLE_RANGE,
      payload: [type,value],
    });
  }
}

export function go_to_step_3() {
  return (dispatch) => {
    dispatch({
      type: GO_TO_STEP_3,
    });
  }
}

export function cancel() {
  return (dispatch) => {
    dispatch({
      type: CANCEL,
    });
  }
}
// import { 
//     DELETE,
// } from '../constants/App';

export function deleteTask(day, id) {
  return dispatch => {
    dispatch({
      // type: DELETE,
      payload: {
        day,
        id,
      },
    });
  }
}

export function deleteTask1(day, id) {
  return dispatch => {
    dispatch({
      // type: DELETE,
      payload: {
        day,
        id,
      },
    });
  }
}
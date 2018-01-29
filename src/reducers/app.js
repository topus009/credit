// import {
//   DELETE,
// } from '../constants/App';

const initialState = {
  step: 1,
};

export default function app(state = initialState, action) {
//   const { payload } = action;
  switch (action.type) {
    // case DELETE:
    //     return {
    //         ...state,
    //         tasks: tasksDelete,
    //     }
    default:
      return {...state};
  }
}

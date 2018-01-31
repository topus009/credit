import {
  TOGGLE_SELECT,
  SELECT_TYPE,
  HANDLE_INPUT,
  CHECK_STEP_1,
} from '../constants/App';
import check_step_1 from '../helpers/check_step_1';

const initialState = {
  step: 2,
  input: {
    visible: false,
    text: '',
  },
  credit: {
    price: '',
    time: '',
  },
};

export default function app(state = initialState, action) {
  const {payload} = action;
  const {
    // step,
    input,
    credit,
  } = state;
  switch (action.type) {
    case TOGGLE_SELECT:
      return {
        ...state,
        input: {
          ...input,
          visible: !input.visible
        },
      }
    case SELECT_TYPE:
      return {
        ...state,
        input: {
          ...input,
          text: payload,
        },
      }
    case HANDLE_INPUT:
      return {
        ...state,
        credit: {
          price: payload[0] === 'price' ? payload[1] : credit.price,
          time: payload[0] === 'time' ? payload[1] : credit.time,
        },
      }
    case CHECK_STEP_1:
      console.warn('1111111111111');
      return {
        ...state,
        step: check_step_1(input.text, credit.price, credit.time) ? 2 : state.step,
      }
    default:
      return {...state};
  }
}

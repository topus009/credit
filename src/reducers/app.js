import {
  TOGGLE_SELECT,
  SELECT_TYPE,
  HANDLE_INPUT,
  CHECK_STEP_1,
  HANDLE_RANGE,
  GO_TO_STEP_3,
  CANCEL,
} from '../constants/App';
import check_step_1 from '../helpers/check_step_1';
import validate_credit_time from '../helpers/validate_credit_time';
import calc_pay_first from '../helpers/calc_pay_first';
import calc_pay_per_month from '../helpers/calc_pay_per_month';
import calc_estimate from '../helpers/calc_estimate';

const initialState = {
  step: 1,
  input: {
    visible: false,
    text: '',
  },
  credit: {
    price: '',
    time: '',
  },
  pay: {
    pay_first: '',
    pay_per_month: '',
  },
  estimate: '',
};

export default function app(state = initialState, action) {
  const {payload} = action;
  const {
    input,
    credit,
    pay,
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
      return {
        ...state,
        step: (check_step_1(input.text,credit.price,credit.time)
        && validate_credit_time(input.text,credit.time)) ? 2 : state.step,
        pay: {
          pay_first: credit.price !== '' ? calc_pay_first(credit.price) : '',
          pay_per_month: credit.price !== '' ? calc_pay_per_month(credit.price) : '',
        },
      }
    case HANDLE_RANGE:
      return {
        ...state,
        pay: {
          ...pay,
          [payload[0]]: [payload[1]],
        },
      }
    case GO_TO_STEP_3:
      return {
        ...state,
        step: 3,
        estimate: calc_estimate(credit.price,credit.time,pay.pay_first,pay.pay_per_month),
      }
    case CANCEL:
      return {
        step: 1,
        input: {
          visible: false,
          text: '',
        },
        credit: {
          price: '',
          time: '',
        },
        pay: {
          pay_first: '',
          pay_per_month: '',
        },
        estimate: '',
      }
    default:
      return {...state};
  }
}

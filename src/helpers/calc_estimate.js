const calc_estimate = (price,time,pay_first,pay_per_month) => {
  const RESULT = 120 / (((pay_first + (6 * pay_per_month)) * 10000) / (price * time));
  return Math.ceil(RESULT);
}

export default calc_estimate;
const check_step_1 = (select,price,time) => {
  let valid = false;
  if (select !== '' && price !== '' && time !== '') valid = true;
  return valid;
}

export default check_step_1;
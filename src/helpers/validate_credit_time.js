const validate_credit_time = (type_of_credit,time) => {
  let valid = false;
  if (time >= 6) valid = true;

  if (type_of_credit === 'недвижимость') {
    if (time > 120) valid = false;
  }

  if (type_of_credit === 'авто') {
    if (time > 60) valid = false;
  }
  return valid;
}

export default validate_credit_time;
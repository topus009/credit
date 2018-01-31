import React from 'react';
import {connect} from 'react-redux';

const SideStep2 = (props) => {
  const {
    input,
    credit,
    pay,
  } = props;

  const {
    text,
  } = input;
  const {
    price,
    time,
  } = credit;
  const {
    pay_first,
    pay_per_month,
  } = pay;

  return (
    <div className='side_step_2'>
      <div className='step2_title'>выбранная программа
        <div className='step2_text'>{`Новая программа по ${text}`}</div>
      </div>
      <div className='step2_title'>параметры
        <div className='step2_text'>{`Сумма займа - ${price} р.`}</div>
        <div className='step2_text'>{`Срок займа - ${time} мес.`}</div>
      </div>
      <div className='step2_title'>выбранная стратегия
        <div className='step2_text'>{`Первоначальный взнос - ${pay_first} р.`}</div>
        <div className='step2_text'>{`Ежемесячный взнос - ${pay_per_month} р.`}</div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const {
    input,
    credit,
    pay,
  } = state.app;
  return {
    input,
    credit,
    pay,
  }
};

export default connect(mapStateToProps)(SideStep2);

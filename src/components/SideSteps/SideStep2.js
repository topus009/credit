import React from 'react';

const SideStep2 = (props) => {
  // const {
  //   check_step_1,
  // } = props;

  let price = '123 000';
  let time = 120;
  let pay_first = '9 000';
  let pay_per_month = '3 000';

  return (
    <div className='side_step_2'>
      <div className='step2_title'>выбранная программа
        <div className='step2_text'>Новая программа по недвижимости</div>
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

export default SideStep2;
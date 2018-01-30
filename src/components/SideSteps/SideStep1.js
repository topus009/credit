import React from 'react';
import Input from './../../reuse/Input';
import Btn from './../../reuse/Btn';

const SideStep1 = (props) => {
  const {
    check_step_1,
  } = props;

  return (
    <div className='side_step_1'>
      <Input
        type='select'
        placeholder='программа'
        values={['авто','недвижимость']}
      />
      <Input
        type='input'
        input_name='price'
        placeholder='Сумма займа, руб.'
      />
      <Input
        type='input'
        input_name='time'
        placeholder='Срок займа, мес.'
      />
      <Btn
        title='далее'
        type='aqua'
        handleClick={check_step_1}
      />
    </div>
  )
};

export default SideStep1;
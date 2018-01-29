import React from 'react';
import Input from './../../reuse/Input';
import Btn from './../../reuse/Btn';

const SideStep1 = () => {
  return (
    <div className='side_step_1'>
      <Input
        type='select'
        placeholder='программа'
        values={['авто','недвижимость']}
      />
      <Input
        type='input'
        placeholder='Сумма займа, руб.'
      />
      <Input
        type='input'
        placeholder='Срок займа, руб.'
      />
      <Btn
        title='далее'
        type='aqua'
      />
    </div>
  )
};

export default SideStep1;
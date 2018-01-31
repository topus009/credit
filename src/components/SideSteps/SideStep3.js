import React from 'react';
import SideStep2 from './SideStep2';

const SideStep3 = (props) => {
  return (
    <div>
      <SideStep2 />
      <div className='side_step_3'>
        <div className='side_step_3_title'>расходы заемщика</div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Членский взнос 8.4 % - 7 588 р.</span>
        </div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Оценка:</span>
          В размере по фактическим затратам. Уточняйте в своем регионе.
        </div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Нотариальные услуги:</span>
          В размере по фактическим затратам. Уточняйте в своем регионе.
        </div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Почтовые отправления:</span>
          В размере по фактическим затратам. Уточняйте в своем регионе.
        </div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Затраты на регистрацию залога:</span>
          В размере по фактическим затратам. Уточняйте в своем регионе.
        </div>
        <div className='side_step_3_article'>
          <span className='side_step_3_big'>Страхование:</span>
          В размере по фактическим затратам. Уточняйте в своем регионе.
        </div>
      </div>
    </div>
  )
};

export default SideStep3;
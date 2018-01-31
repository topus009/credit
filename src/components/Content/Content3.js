import React from 'react';
import Btn from '../../reuse/Btn';

const Content3 = () => {
  return (
    <div className='content_3'>
      <div className='content_3_estimate_title'>Примерное время ожидания составит:</div>
      <div className='content_3_circle'>
        <div className='content_3_circle_content'>
          <div className='content_3_circle_number'>10</div>
          <div className='content_3_circle_text'>месяцев</div>
        </div>
      </div>
      <div className='content_3_estimate_title'>Рекомендации для уменьшения срока ожидания:</div>
      <div className='content_3_recomendations'>
        <div>- Уменьшите сумму и срок займа;</div>
        <div>- Увеличьте первоначальный и ежемесячный взносы</div>
        <div>- Учавствуйте в специальных акциях для Пайщиков.</div>
      </div>
      <div className='content_3_bnt_block'>
        <Btn
          title='перерасчет'
          type='grey'
        />
        <Btn
          title='сохранить в pdf'
          type='crimson'
        />
      </div>
    </div>
  )
};

export default Content3;
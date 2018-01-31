import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Btn from '../../reuse/Btn';
import * as appActionsTypes from '../../actions/AppActions';
// import trigger_print from '../../helpers/trigger_print';

const Content3 = (props) => {
  const {
    estimate,
    appActions,
  } = props;
  const {
    cancel,
  } = appActions;

  return (
    <div className='content_3'>
      <div className='content_3_estimate_title'>Примерное время ожидания составит:</div>
      <div className='content_3_circle'>
        <div className='content_3_circle_content'>
          <div className='content_3_circle_number'>{estimate}</div>
          <div className='content_3_circle_text'>{estimate > 1 ? 'месяца' : 'месяц'}</div>
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
          handleClick={cancel}
        />
        <Btn
          title='сохранить в pdf'
          type='crimson'
          // handleClick={trigger_print}
        />
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  const {
    estimate,
  } = state.app;
  return {
    estimate,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActionsTypes, dispatch),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Content3);
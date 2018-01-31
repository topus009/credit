import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ReactSimpleRange from 'react-simple-range';
import Pie from '../Pie';
import Btn from '../../reuse/Btn';
import * as appActionsTypes from '../../actions/AppActions';

const Content2 = (props) => {
  const {
    credit,
    pay,
    appActions,
  } = props;

  const {
    price,
  } = credit;
  const {
    pay_first,
    pay_per_month,
  } = pay;
  const {
    handle_range,
    go_to_step_3,
    cancel,
  } = appActions;

  return (
    <div className='content_2'>

      <div className='conent_section'>
        <Pie
          color='#32C4D1'
          value={pay_first}
        />
        <div className='pie_article'>
          <div className='pie_title'>Первоначальный взнос</div>
          <div className='pie_title'>{`${pay_first} p.`}</div>
        </div>
        <div className='range_block'>
          <div className='range_title'>Сумма</div>
          <div className='range'>
            <div className='range_value'>{pay_first}</div>
            <ReactSimpleRange
              min={0}
              max={+price}
              step={+price / 10}
              value={+pay_first}
              trackColor='#32C4D1'
              sliderColor='#D9E0F4'
              onChange={(x) => {handle_range('pay_first',x.value)}}
            >
              <div
                className='customRangeThumb'
                style={{borderColor: 'transparent transparent #32C4D1 transparent'}}
              >
              </div>
            </ReactSimpleRange>
          </div>
        </div>
        <Btn
          title='перерасчет'
          type='grey'
          handleClick={cancel}
        />
      </div>

      <div className='conent_section'>
        <Pie
          color='#EC7D31'
          value={pay_per_month}
        />
        <div className='pie_article'>
          <div className='pie_title'>Ежемесячный взнос</div>
          <div className='pie_title'>{`${pay_per_month} p.`}</div>
        </div>
        <div className='range_block'>
          <div className='range_title'>Сумма</div>
          <div className='range'>
            <div className='range_value'>{pay_per_month}</div>
            <ReactSimpleRange
              min={0}
              max={+price}
              step={+price / 10}
              value={+pay_per_month}
              trackColor='#EC7D31'
              sliderColor='#D9E0F4'
              onChange={(x) => {handle_range('pay_per_month',x.value)}}
            >
            <div
              className='customRangeThumb'
              style={{borderColor: 'transparent transparent #EC7D31 transparent'}}
            >
            </div>
            </ReactSimpleRange>
          </div>
        </div>
        <Btn
          title='рассчитать'
          type='aqua'
          handleClick={go_to_step_3}
        />
      </div>

    </div>
  )
};

const mapStateToProps = (state) => {
  const {
    credit,
    pay,
  } = state.app;
  return {
    credit,
    pay,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    appActions: bindActionCreators(appActionsTypes, dispatch),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Content2);
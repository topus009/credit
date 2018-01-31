import React from 'react';
import ReactSimpleRange from 'react-simple-range';
import Pie from '../Pie';
import Btn from '../../reuse/Btn';

const Content2 = () => {
  return (
    <div className='content_2'>

      <div className='conent_section'>
        <Pie />
        <div className='pie_article'>
          <div className='pie_title'>Первоначальный взнос</div>
          <div className='pie_title'>{'9 000 p.'}</div>
        </div>
        <div className='range_block'>
          <div className='range_title'>Сумма</div>
          <div className='range'>
            <div className='range_value'>9000</div>
            <ReactSimpleRange
              min={0}
              max={10000}
              spep={1000}
              value={3000}
              // defaultValue
              // sliderSize
              // thumbSize
              // sliderColor
              // trackColor
              // thumbColor
              // onChange
            >
              <div className='customRangeThumb'></div>
            </ReactSimpleRange>
          </div>
        </div>
        <Btn
          title='перерасчет'
          type='grey'
        />
      </div>

      <div className='conent_section'>
        <Pie />
        <div className='pie_article'>
          <div className='pie_title'>Ежемесячный взнос</div>
          <div className='pie_title'>{'3 000 р.'}</div>
        </div>
        <div className='range_block'>
          <div className='range_title'>Сумма</div>
          <div className='range'>
            <div className='range_value'>9000</div>
            <ReactSimpleRange
              min={0}
              max={10000}
              spep={1000}
              value={3000}
              // defaultValue
              // sliderSize
              // thumbSize
              // sliderColor
              // trackColor
              // thumbColor
              // onChange
            >
              <div className='customRangeThumb'></div>
            </ReactSimpleRange>
          </div>
        </div>
        <Btn
          title='рассчитать'
          type='aqua'
        />
      </div>

    </div>
  )
};

export default Content2;
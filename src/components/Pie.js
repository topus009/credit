import React, {Component} from 'react';
import {connect} from 'react-redux';
import PieChart from 'react-minimal-pie-chart';

const Pie = (props) => {
  const {
    color,
    credit,
    value,
  } = props;

  const data = [
    { value: (value / credit.price) * 100, key: 1, color },
    { value: ((credit.price - value) / credit.price) * 100, key: 2, color: '#E9EDF0'},
  ];

  return (
    <div className='pie_block'>
      <PieChart
        data={data}
        lineWidth={50}
        paddingAngle={2}
        radius={48}
        startAngle={-90}
        totalValue={100}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    credit,
  } = state.app;
  return {
    credit,
  }
};

export default connect(mapStateToProps)(Pie);
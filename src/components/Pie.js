import React from 'react';

const Pie = () => {
  return (
    <div className='pie_block'>
      <div className='pie' data-start='0' data-value='100'></div>
      <div className='pie big' data-start='100' data-value='260'></div>
      <div className='overflow'></div>
    </div>
  )
};

export default Pie;
import React from 'react';

const Btn = (props) => {
  const {
    title,
    type,
    handleClick,
  } = props;

  const styles = {
    grey: {
      backgroundColor: '#DDE3E9',
      color: '#585D61',
    },
    aqua: {
      backgroundColor: '#7AD9E0',
      color: '#fff',
    },
    crimson: {
      backgroundColor: '#E8596C',
      color: '#fff',
    },
  };

  return (
    <div
      className='btn'
      style={styles[type]}
      onClick={handleClick}
    >
      {title}
    </div>
  )
};

export default Btn;
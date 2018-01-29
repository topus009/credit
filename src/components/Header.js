import React from 'react';

const Header = ({step}) => {
  const headerData = [
    ['программа', 'выбор параметров'],
    ['стратегия', 'взносы по программе'],
    ['итог', 'расчет ожидания'],
  ];

  const li = headerData.map((e,i) => {
    return (
      <li key={'header_' + i} className={(i + 1) === step ? 'active' : ''}>
        <div className='text_wrapper'>
          <div className='title'>{e[0]}</div>
          <div className='annotation'>{e[1]}</div>
        </div>
        <span className='number'>{i + 1}</span>
      </li>
    )
  });

  return (
    <ul className='header'>{li}</ul>
  )
};

export default Header;

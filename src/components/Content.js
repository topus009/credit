import React from 'react';
import Content1 from './Content/Content1';
import Content2 from './Content/Content2';
import Content3 from './Content/Content3';

const Content = (props) => {
  const {
    step,
  } = props;

  return (
    <div className='content'>
      {
        (() => {
          switch (step) {
            case 1:
              return <Content1 />;
            case 2:
              return <Content2 />;
            case 3:
              return <Content3 />;
            default:
              return null;
          }
      })()
      }
    </div>
  )
};

export default Content;
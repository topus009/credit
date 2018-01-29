import React from 'react';
import SideStep1 from './SideSteps/SideStep1';
import SideStep2 from './SideSteps/SideStep2';
import SideStep3 from './SideSteps/SideStep3';

const SideBar = ({step}) => {
  return (
    <div className='side_bar'>
      {
        (() => {
          switch (step) {
            case 1:
              return <SideStep1 />;
            case 2:
              return <SideStep2 />;
            case 3:
              return <SideStep3 />;
            default:
              return null;
          }
      })()
      }
    </div>
  )
};

export default SideBar;
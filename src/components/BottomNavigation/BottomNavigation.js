import React from 'react';

import { FiHome } from 'react-icons/fi';
import { BsFillLightningFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './BottomNavigation.css';

const BottomNavigation = (props) => {
  var IorA = navigator.userAgent.toLowerCase();
  console.log(IorA);
  if (IorA.indexOf('android') !== -1) {
    console.log('안드로이드네');
  } else if (IorA.indexOf('iphone') !== -1) {
    console.log('아이폰이네');
  } else {
    console.log('웹이네');
  }

  return (
    <div className='BottomNavigation'>
      <div
        className={`BottomNavi-wrapper ${
          IorA.indexOf('android') !== -1
            ? 'Android'
            : IorA.indexOf('iphone') !== -1
            ? 'iPhone '
            : 'Web'
        }
        
        `}
      >
        <Link
          to='/'
          className={`BottomNavi-wrapper__ButtonContainer 
        ${props.activatedButton === 'home' ? 'active' : null}
        
        `}
        >
          <button className='BottomNavi-Button'>
            <FiHome
              style={{
                fontSize: '1.55rem',
                marginRight: '0.75rem',
                marginBottom: '0.15rem',
              }}
              className='BottomNavi-ButtonIcon'
            />
            <span>홈</span>
          </button>
        </Link>
        <Link
          to='/events'
          className={`BottomNavi-wrapper__ButtonContainer activatedButton
        ${props.activatedButton === 'events' ? 'active' : null}`}
        >
          <button className='BottomNavi-Button'>
            <BsFillLightningFill
              style={{
                fontSize: '1.55rem',
                marginRight: '0.65rem',
                marginBottom: '0.1rem',
              }}
              className='BottomNavi-ButtonIcon-Event'
            />
            <span>이벤트&할인</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavigation;

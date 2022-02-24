import React from 'react';
import MainTitleBgIcon from './imgs/mainTitleBg.svg';

export const Grants: React.FC = () => {
  return (
    <div className="Grants">
      <div className="Grants__mainTitle">
        <img src={MainTitleBgIcon} alt="Main Title" />
        <h1>Grants</h1>
      </div>
    </div>
  )
}
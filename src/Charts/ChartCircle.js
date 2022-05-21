import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const DemoRingProgress = () => {
  const config = {
    height: 60,
    width: 60,
    autoFit: false,
    percent: 0.65,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};
 export default DemoRingProgress
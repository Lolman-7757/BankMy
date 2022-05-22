import React from 'react';
import { RingProgress } from '@ant-design/plots';

const DemoRingProgress = () => {
  const config = {
    height: 70,
    width: 70,
    autoFit: false,
    percent: 0.6212,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};
export default DemoRingProgress
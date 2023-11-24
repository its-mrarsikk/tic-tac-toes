import React from 'react';
import slideshow from '../rc/slideshow';
import Menu from './Menu';

function MainFrame() {
  return <Menu runningBar={slideshow.map((src) => <img alt="" src={src} />)} />;
}

export default MainFrame;

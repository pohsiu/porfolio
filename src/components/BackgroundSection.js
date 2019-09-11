import React from 'react';


const BackgroundSection = props => {
  const { selectedProjectIndex } = props;
  const src = selectedProjectIndex % 2 === 0 ? './images/bg1.jpg' : './images/bg2.jpg';
  return (
    <div className={props.className}>
      <img style={{ width: '100%', height: '100%' }} src={src} alt="cover" />
    </div>
  );
}

export default BackgroundSection;
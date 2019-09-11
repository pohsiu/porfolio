import React, { useRef, useEffect } from 'react';


const srcs = [
  './images/bg1.jpg',
  './images/bg2.jpg'
]

const BackgroundSection = props => {
  const { selectedProjectIndex, setBgRef } = props;
  const divRef = useRef(null);
  useEffect(() => {
    setBgRef(divRef.current);
  }, [divRef])

  return (
    <div ref={divRef} className={props.className}>
      <img src={srcs[0]} alt="cover" />
    </div>
  );
}

export default BackgroundSection;
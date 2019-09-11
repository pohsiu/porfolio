import React, { useRef, useEffect } from 'react';
// import * as THREE from 'three';


const srcs = [
  './images/bg1.jpg',
  './images/bg2.jpg'
]

const BackgroundSection = props => {
  const { selectedProjectIndex } = props;
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const divRef = useRef(null);

  useEffect(() => {
    // console.log(divRef, img1Ref, img2Ref);
  }, []);

  return (
    <div ref={divRef} className={props.className}>
      <img ref={img1Ref} style={{ width: '100%', height: '100%' }} src={srcs[0]} alt="cover" />
      <img ref={img2Ref} style={{ width: '100%', height: '100%' }} src={srcs[1]} alt="cover" />
    </div>
  );
}

export default BackgroundSection;
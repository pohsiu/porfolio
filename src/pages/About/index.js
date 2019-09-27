import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scene from '../../components/Scene';
import getImgPath from '../../utils/getImgPath';

const imgPath = getImgPath();

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    position: 'relative',
    '--large-viewport': 1440,
    flexDirection: 'column',
    overflow: 'auto',
  },
  background: {
    height: '100%',
    display: 'flex',
    flexShrink: 0,
  },
  content: {
  },
}));

const imgs = [
  `${imgPath}/bg1.jpg`,
  `${imgPath}/bg1.jpg`,
]
const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Scene 
        image1={imgs[0]} 
        image2={imgs[1]}
        className={classes.background}
      />
      <div className={classes.content}>
        About
      </div>
    </div>
  );
}

export default About;

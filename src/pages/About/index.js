import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Scene from '../../components/Scene';
import getImgPath from '../../utils/getImgPath';

const imgPath = getImgPath();

const useStyles = makeStyles(theme => ({
  app: {
    display: 'block',
    // flex: 1,
    width: '100%',
    // height: '100vh',
    position: 'relative',
    '--large-viewport': 1440,
    // flexDirection: 'column',
    overflow: 'auto',
  },
  background: {
    
  },
  parallex: {
    minHeight: '100vh',
    // display: 'table',
    /* Create the parallax scrolling effect */
    backgroundImage: `url(${imgPath}/bg1.jpg)`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: 'transparent',
  },
  content: {
    height: 1000,
  },
  tlWrapper: {
    width: '100%',
    float: 'left',
    position: 'relative',
  },
  heroFixed: {
    opacity: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
    height: '100vh',
    marginLeft: '50%',
    zIndex: 1,
    transform: 'translateX(-50%)',
    width: '100vw',
  },
  heroVisual: {
    filter: 'blur(0)',
    transform: 'scale(1)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'filter .5s cubic-bezier(1,0,0,1) .5s,transform .5s cubic-bezier(1,0,0,1) .5s,-webkit-filter .5s cubic-bezier(1,0,0,1) .5s,-webkit-transform .5s cubic-bezier(1,0,0,1) .5s',
  },
  heroWrap: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    zIndex: 1,
    maxWidth: 1440,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {
    position: 'relative',
    zIndex: 1,
    overflowX: 'auto',
    background: 'linear-gradient(transparent,transparent 100vh,#2a2f36 100.001vh,#2a2f36)'
  },
  outerContainer: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
  },
  heroFilled: {
    position: 'relative',
    top: '-6.5rem',
    left: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translateX(-50%)',
  },
  fullWidth: {
    display: 'block',
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
    height: 1000,
    overflowY: 'auto',
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
      <div className={classes.tlWrapper} style={{ zIndex: 1, opacity: 1 }}>
        <div className={classes.heroFixed} style={{ display: 'block', backgroundColor: 'rgb(255, 145, 145)'}}>
          <div className={classes.heroVisual} />
          <div className={classes.heroWrap}>
            <h1>About Me</h1>
          </div>
        </div>
        <div className={classes.outer}>
          <div className={classes.outerContainer}>
            <nav>NAV BAR</nav>
            <div style={{ opacity: 1 }}>
              <div className={classes.heroFilled} />
              <div className={classes.fullWidth}>
                <div>
                  This is the content below the fullWidth part ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

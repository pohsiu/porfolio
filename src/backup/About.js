import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import getPath from '../../utils/getPath';

const imgPath = getPath('images');

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    // flex: 1,
    width: '100%',
    // height: '100vh',
    position: 'relative',
    // flexDirection: 'column',
    overflow: 'auto',
  },
  tlWrapper: {
    width: '100%',
    float: 'left',
    position: 'relative',
    background: '#2a2f36',
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
    width: 'calc(100vw - 36px)',
    backgroundColor: 'rgb(255, 145, 145)',
  },
  heroVisual: {
    filter: 'blur(0)',
    transform: 'scale(1)',
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'filter .5s cubic-bezier(1,0,0,1) .5s,transform .5s cubic-bezier(1,0,0,1) .5s,-webkit-filter .5s cubic-bezier(1,0,0,1) .5s,-webkit-transform .5s cubic-bezier(1,0,0,1) .5s',
  },
  visualContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundImage: 'radial-gradient(circle farthest-corner at 38% 0,#ffb8b8 32%,#ff9191 90%)',
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
    overflowX: 'hidden',
    background: 'linear-gradient(transparent,transparent 100vh,#2a2f36 100.001vh,#2a2f36)'
  },
  outerContainer: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
  },
  filledTop: {
    position: 'relative',
    top: '-6.5rem',
    left: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translateX(-50%)',
  },
  pageContent: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
    height: 1000,
    paddingTop: 24,
  },

}));

const imgs = [
  `${imgPath}/bg1.jpg`,
  `${imgPath}/bg1.jpg`,
]
const About = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.tlWrapper} style={{ zIndex: 1, opacity: 1 }}>
        <div className={classes.heroFixed} style={{ display: 'block' }}>
          <div className={classes.heroVisual}>
            <div className={classes.visualContainer}>
              
            </div>
          </div>
          <div className={classes.heroWrap}>
            <h1>About Me</h1>
          </div>
        </div>
        <div className={classes.outer}>
          <div className={classes.outerContainer}>
            <nav>NAV BAR</nav>
            <div style={{ opacity: 1 }}>
              <div className={classes.filledTop} />
              <div className={classes.pageContent}>
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

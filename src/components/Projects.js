import React, { useRef, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import classNames from 'clsx';

const useStyles = makeStyles(theme => ({
  project: {
    display: 'inline-block',
    position: 'relative',
    height: '100%',
    minWidth: '35rem',
    transition: 'opacity .2s ease-in-out, background .2s ease-in-out',
    whiteSpace: 'normal',
    overflow: 'hidden',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    cursor: 'none',
  },
  projectIsHover: {
    borderLeft: '0.5px #9da7b3 solid',
    borderRight: '0.5px #9da7b3 solid',
  },
  projectLink: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '0 4.5rem 8rem',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    textDecoration: 'none',
    userSelect: 'none',
  },
  projectLinkIsHover: {

  },
  scrollDiv: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'transparent',
    display: 'block',
  },
  scrollBar: {
    backgroundColor: '#dc4133',
    position: 'relative',
    display: 'block',
    top: -1,
    height: 4,
  },
}))

const Project = props => {
  const  classes = useStyles();
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <div className={classNames(classes.project, {[classes.projectIsHover]: isHover })} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <a className={classNames(classes.projectLink, {[classes.projectLinkIsHover]: isHover })} href={'/'}>
        <h3>
          <span>Product</span>
        </h3>
        <h2>
          <span>Spacetime</span>
        </h2>
        <Slide direction="up" in={isHover} mountOnEnter unmountOnExit>
          <div>
            <p>
              <span>We run a product that serves distributed teams</span>
            </p>
            <h4>
              <span>View Case Study</span>
            </h4>
          </div>
        </Slide>
      </a>
    </div>
  )
}

const ScrollBar = props => {
  const classes = useStyles();
  const { style } = props;
  return (
    <div className={classes.scrollDiv}>
      <div className={classes.scrollBar} style={style} />
    </div>
  )
}

const Projects = props => {
  const classes = useStyles();
  const projectsRef = useRef(null);
  const [currentTransform, setCurrentTransform] = useState(0);
  const onWheelEvent = useCallback((event) => {
    const { deltaY } = event;
    projectsRef.current.scrollBy(deltaY, 0);
    setCurrentTransform((v) => {
      const newValue = v + deltaY;
      if (newValue < 0) {
        return 0;
      }
      if (newValue > (projectsRef.current.clientWidth - 374)) {
        return (projectsRef.current.clientWidth - 374);
      }
      return newValue;
    });
  }, [projectsRef]);
  return (
    <div ref={projectsRef} className={props.className} onWheel={onWheelEvent} >
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <ScrollBar style={{ transform: `translateX(${currentTransform}px)`, width: 374 }}/>
    </div>
  );
}

export default Projects;
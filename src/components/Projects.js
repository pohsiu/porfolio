import React, { useRef, useCallback, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import classNames from 'clsx';
import HoverEffect from '../hover';

const projectLists = [
  {
    title: "SpaceTime",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "Blue Diamond",
    subtitle: "Platform Design",
    description: "We redesigned and rebuilt the Blue Diamond website from the ground-up.",
  },
  {
    title: "SpaceTime",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "SpaceTime",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
  {
    title: "SpaceTime",
    subtitle: "Product",
    description: "We run a product that serves distributed teams",
  },
]
const useStyles = makeStyles(theme => ({
  project: {
    display: 'inline-block',
    position: 'relative',
    height: '100%',
    width: '40%',
    minWidth: '35rem',
    transition: 'opacity .2s ease-in-out, background .2s ease-in-out',
    whiteSpace: 'normal',
    overflow: 'hidden',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    cursor: 'none',
    paddingBottom: 48,
    padding: '0 4.5rem 8rem',
  },
  projectIsHover: {
    borderLeft: '0.2px #9da7b3 solid',
    borderRight: '0.2px #9da7b3 solid',
  },
  projectLink: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
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

const srcs = [
  './images/bg1.jpg',
  './images/bg2.jpg'
]

const Project = props => {
  const  classes = useStyles();
  const { mouseOver, mouseOut } = props;
  const [isHover, setIsHover] = useState(false);
  const { bgRef } = props;
  const onMouseOver = useCallback(() => {
    mouseOver();
    setIsHover(true);
  }, [mouseOver]);

  const onMouseOut = useCallback(() => {
    mouseOut();
    setIsHover(false);
  }, [mouseOut]);

  const { description, title, subtitle } = props;
  const color = isHover ? 'primary' : 'secondary';
  return (
    <div className={classNames(classes.project, {[classes.projectIsHover]: isHover })} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <a className={classNames(classes.projectLink, {[classes.projectLinkIsHover]: isHover })} href={'/'}>
        <Typography variant="h5" color={color} gutterBottom>{subtitle}</Typography>
        <Typography variant="h1" component="h2" color={color} gutterBottom>{title}</Typography>
        <Slide direction="up" in={isHover} mountOnEnter unmountOnExit>
          <div>
            <Typography variant="subtitle1" color={color} gutterBottom>{description}</Typography>
            <Typography variant="h6" color={color} gutterBottom>View Case Study -></Typography>
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

  const { setSelectedProjectIndex, bgRef } = props;
  const mouseOver = useCallback((current) => () => {
    setSelectedProjectIndex(current);
  }, [setSelectedProjectIndex]);

  const mouseOut = useCallback(() => {
    setSelectedProjectIndex(undefined);
  }, [setSelectedProjectIndex]);

  return (
    <div ref={projectsRef} className={props.className} onWheel={onWheelEvent} >
      {projectLists.map((each, index) => 
        <Project
          bgRef={bgRef}
          key={`pro${index}`}
          mouseOut={mouseOut}
          mouseOver={mouseOver(index)}
          title={each.title}
          subtitle={each.subtitle}
          description={each.description}
        />)}
      <ScrollBar style={{ transform: `translateX(${currentTransform}px)`, width: 374 }}/>
    </div>
  );
}

export default Projects;
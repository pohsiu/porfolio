
import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'clsx';
import { Link } from "react-router-dom";
import Forward from '@material-ui/icons/ArrowForward';
import BrushA from '../Brush/TypeA';
import BrushB from '../Brush/TypeB';

const useStyles = makeStyles(theme => ({
  project: {
    display: 'inline-block',
    position: 'relative',
    height: '100%',
    width: '40%',
    minWidth: '40rem',
    transition: 'opacity .2s ease-in-out, background .2s ease-in-out',
    whiteSpace: 'normal',
    overflow: 'hidden',
    boxSizing: 'border-box',
    verticalAlign: 'top',
    cursor: 'none',
    padding: '0 4.5rem 8rem',
    paddingBottom: 120,
    borderRight: '1px hsla(0,0%,100%,.05) solid',
    '&:first-child': {
      minWidth: '66vw',
      width: '66%',
      [theme.breakpoints.down('sm')]: {
        minWidth: '100vw',
        width: '100%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      minWidth: '100vw',
      width: '100%',
    },
  },
  noBorder: {
    borderRight: 'none',
  },
  projectHover: {
    background: 'rgba(0,0,0, 0.25)',
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
  '@keyframes brush': {
    '0%': { strokeDashoffset: 1500 },
    '100%': { strokeDashoffset: 0 },
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 84,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 64,
    }
  },
  withSvg: {
    position: 'relative',
    zIndex: 1,
    '& svg': {
      position: 'absolute',
      top: '50%',
      left: 0,
      transform: 'translate(-10%, -50%)',
      width: '120%',
      zIndex: 1,
      maxWidth: 300,
    },
    '& path': {
      strokeDasharray: 1500,
      strokeDashoffset: 0,
      animation: '$brush .8s cubic-bezier(.7,.22,1,.68) .5s',
    }
  },
  icon: {
    paddingLeft: 8,
    alignSelf: 'center',
    color: theme.palette.primary.main,
  }
}))

const renderTitle = (classes, first, title, titles) => {
  if (first) {
    return (
      <Typography 
        variant="h1" component="h2" color='secondary' className={classes.title}>
        {titles[0]}
        <div className={classes.withSvg}>
          <div style={{ position: 'relative', zIndex: 2 }}>{titles[1]}</div>
          <BrushA />
        </div>
        {titles[2]}
        <div className={classes.withSvg}>
          <div style={{ position: 'relative', zIndex: 2 }}>{titles[3]}</div>
          <BrushB />
        </div>
        
      </Typography>
    )
  }
  return (
    <Typography 
      variant="h1" component="h2" color='secondary' className={classes.title}>
      {title}
    </Typography>
  )
}

const Project = props => {
  const  classes = useStyles();
  const { mouseOver, mouseOut } = props;
  const [isHover, setIsHover] = useState(false);
  
  const onMouseOver = useCallback(() => {
    mouseOver();
    setIsHover(true);
  }, [mouseOver]);

  const onMouseOut = useCallback(() => {
    mouseOut();
    setIsHover(false);
  }, [mouseOut]);
  const { description, title, subtitle, sectionIndex, titles, first } = props;
  return (
    <div 
      className={
        classNames(
          classes.project, 
          { 
            [classes.projectHover]: isHover,
            [classes.noBorder]: !!sectionIndex,
          }
      )}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOut}>
      <Link to={props.url} className={classNames(classes.projectLink, {[classes.projectLinkIsHover]: isHover })}>
        {subtitle && <Typography variant="h5" color='secondary'>{subtitle}</Typography>}
        {renderTitle(classes, first, title, titles)}
        <Slide direction="up" in={isHover} mountOnEnter unmountOnExit>
          <div>
            <Typography variant="subtitle1" color='secondary'>{description}</Typography>
            <Typography variant="h6" color='secondary' style={{ display: 'flex' }}>
              Explore More
              <Forward className={classes.icon}/>
            </Typography>
          </div>
        </Slide>
      </Link>
    </div>
  )
}

export default Project;

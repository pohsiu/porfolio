
import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'clsx';
import { Link } from "react-router-dom";

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
    borderRight: '1px #9da7b3 solid',
    '&:first-child': {
      minWidth: '66vw',
      width: '66%',
      [theme.breakpoints.down('xs')]: {
        minWidth: '100vw',
        width: '100%',
      },
    },
    [theme.breakpoints.down('xs')]: {
      minWidth: '100vw',
      width: '100%',
    },
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
}))

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

  const { description, title, subtitle } = props;
  return (
    <div className={classNames(classes.project)} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
      <Link to={props.url} className={classNames(classes.projectLink, {[classes.projectLinkIsHover]: isHover })}>
        {subtitle && <Typography variant="h5" color='primary'>{subtitle}</Typography>}
        <Typography variant="h1" component="h2" color='primary'>{title}</Typography>
        <Slide direction="up" in={isHover} mountOnEnter unmountOnExit>
          <div>
            <Typography variant="subtitle1" color='primary'>{description}</Typography>
            <Typography variant="h6" color='primary'>Explore More -> </Typography>
          </div>
        </Slide>
      </Link>
    </div>
  )
}

export default Project;

import React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getPath from '../../utils/getPath';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getPath('images')}/bg4.jpg)`,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-3rem',
  },
  projectRoot: {
  },
  textBlockBoundary: {
    maxWidth: '50%',
    lineHeight: 1.5,
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
  blockClass: {
    position: 'relative',
    display: 'block',
    minHeight: 600,
    paddingLeft: 120,
    paddingTop: 120,
    boxSizing: 'border-box',
  },
  blockOne: {
    backgroundColor: theme.palette.background.one,
  },
  blockTwo: {
    backgroundImage: `linear-gradient(to right, ${lighten(theme.palette.background.three, 0.8)}, ${theme.palette.background.three})`,
  },
  blockNumber: {
    '-webkit-text-stroke': `1px ${theme.palette.background.main}`,  
    '-webkit-text-fill-color': 'transparent',
    position: 'absolute',
    fontSize: '260px',
  },
  numberOne: {
    bottom: '10%',
    right: -80,
    transform: 'rotateY(180deg)',
  },
  numberTwo: {
    top: '10%',
    left: -40,
  },
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.projectRoot}>
      <div className={clsx(classes.blockClass, classes.blockOne)}>
        <div className={classes.textBlockBoundary}>
          <Typography variant='h3' color='primary'>{props.title || 'Project Title'}</Typography>
          <Typography variant='subtitle' color='primary'>{props.subtitle || 'Project Title'}</Typography>
          <Typography variant='body1' color='primary'>{props.description || 'Project Title'}</Typography>
        </div>
        <Typography className={clsx(classes.blockNumber, classes.numberOne)} variant='h1'>{'01'}</Typography>
      </div>
      <div className={clsx(classes.blockClass, classes.blockTwo)}>
      <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'02'}</Typography>
      </div>
    </div>
  )
}

const Projects = (props) => {
  const classes = useStyles();
  return (
    <Page title="Projects" parallaxClass={classes.parallaxClass}>
      <div className={classes.pageContent}>
        <Project title="d'Octo Ears" subtitle='A Sign Language Translation Matching Platform' description='The application can support user who are hard of hearing get assistant of translation from sign
language association.' />
      </div>
    </Page>
  );
}

export default Projects;

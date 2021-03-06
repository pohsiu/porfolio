import React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getPath from '../../utils/getPath';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getPath('images')}/bg5.jpg)`,
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
    [theme.breakpoints.down('sm')]: {
      maxWidth: '90%',
    },
  },
  boundaryTwo: {
    maxWidth: '30%',
  },
  boundaryThree: {
    float: 'right',
    paddingTop: 92,
    marginRight: 140,
  },
  description: {
    lineHeight: 2,
    paddingTop: 12,
  },
  blockClass: {
    position: 'relative',
    display: 'block',
    minHeight: 800,
    paddingLeft: 120,
    paddingTop: 120,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.one,
  },
  blockOne: {
    backgroundColor: theme.palette.background.one,
  },
  blockTwo: {
    backgroundImage: `linear-gradient(to right, ${lighten(theme.palette.background.three, 0.8)}, ${theme.palette.background.three})`,
  },
  blockThree: {
    height: 800,
  },
  blockFive: {
    backgroundImage: `linear-gradient(to right, ${lighten(theme.palette.background.five, 0.2)}, ${lighten(theme.palette.background.five, 0.8)})`,
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
  numberThree: {
    top: '10%',
    right: -40,
  },
  bodyTwo: {
    paddingTop: 60,
    // paddingLeft: 12,
    // color: 
  },
  bodyThree: {
    paddingTop: 60,
    lineHeight: 1.6,
  },
  titleTwo: {
    paddingTop: 88,
    fontWeight: 100,
  },
  titleThree: {
    
    fontWeight: 100,
  },
}));

/*
System Highlights:
Responsibe web design and css library: bootstrap.
Line-bot notification: implement with python.
*/
const Project = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.projectRoot}>
      <div className={clsx(classes.blockClass, classes.blockOne)}>
        <div className={classes.textBlockBoundary}>
          <Typography variant='subtitle2' style={{ color: 'black', fontWeight: 'bold' }}>{'Intros.'}</Typography>
          <Typography variant='h3' color='primary'>{props.title || 'Project Title'}</Typography>
          <Typography className={classes.description} variant='body1' color='primary'>{props.description || 'Project Title'}</Typography>
        </div>
        <Typography className={clsx(classes.blockNumber, classes.numberOne)} variant='h1'>{'01'}</Typography>
        <div style={{ border: '1px solid black', width: 700, height: 420, marginLeft: 80, marginTop: 24, color: 'black' }}>Login Screen Maybe</div>
      </div>
      <div className={clsx(classes.blockClass, classes.blockTwo)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'02'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>LineBot</strong>} Notification</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}> 
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'Integrate linebot sdk with python backend support to realize realtime notification'}</Typography>
        </div>
      </div>
      <div className={clsx(classes.blockClass, classes.blockThree)}>
        <Typography className={clsx(classes.blockNumber, classes.numberThree)} variant='h1'>{'03'}</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryThree)}> 
          <Typography variant='h3' color='primary' className={classes.titleThree}>{<strong>Top 3</strong>} recommandation</Typography>
          <Typography variant='body1' color='primary' className={classes.bodyThree}>{'Accomplished video/audio recording feature by WebRTC media server. User can lunch a video communication and dial general telecom via sip. Third party open source library usage: janus-gateway.'}</Typography>
        </div>
      </div>
      <div className={clsx(classes.blockClass)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'04'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>Audio</strong>} interpretation</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}> 
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'Realtime audio to text transferring via google speechRecognition and websocket.'}</Typography>
        </div>
      </div>
      <div className={clsx(classes.blockClass, classes.blockFive)}>
        <Typography className={clsx(classes.blockNumber, classes.numberThree)} variant='h1'>{'05'}</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryThree)}> 
          <Typography variant='h3' color='primary' className={classes.titleThree}>RWD {<strong>Implementation</strong>}</Typography>
          <Typography variant='body1' color='primary' className={classes.bodyThree}>{'Build responsive web design effect by material-ui and media-query.'}</Typography>
          
          <div
            style={{ 
              border: '1px solid black', width: 320, height: 540, color: 'black',
              position: 'absolute', top: '20%', left: 80,
            }}>Mobile Screen 1</div>
          <div style={{ 
              border: '1px solid black', width: 320, height: 540, color: 'black',
              position: 'absolute', top: '10%', left: 280,
            }}>Mobile Screen 2</div>
          
        </div>
      </div>
      <div className={clsx(classes.blockClass)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'06'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>Other</strong>} detials</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}> 
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'SPA website implementation: react, react-router. Website frontend data management: redux, react-redux, redux-saga.'}</Typography>
        </div>
      </div>
    </div>
  )
}

const Meals = (props) => {
  const classes = useStyles();
  return (
    <Page
      title="Meals"
      spanTitle="WebRTC media server"
      spanDetail="Matching sign language service prodivers and users"
      parallaxClass={classes.parallaxClass}
      >
      <div className={classes.pageContent}>
        <Project
          title="Meal Ordering"
          description='A sign language translation service matching platform. The application can support user who are hard of hearing get assistant of translation from sign
language association.' />
      </div>
    </Page>
  );
}

export default Meals;

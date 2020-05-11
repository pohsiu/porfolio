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
  },
  blockFour: {
    paddingBottom: 64,
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
  realtimeImg: { 
    width: 300,
    height: 400,
    position: 'absolute',
    top: '40%',
    right: '15%',
    boxShadow: '0 1rem 2rem rgba(0, 0, 0, .2)'
  },
  blockThreePics: {
    marginTop: 48,
    paddingRight: 24,
    display: 'inline-block',
  },
  blockFourPics: {
    marginTop: 48,
    paddingLeft: 64,
    display: 'inline-block',
  },
  picClass: {
    width: 700, height: 420,
  },
  sipPicClass: {
    paddingLeft: 24,
    width: 260, height: 420,
  },
  rwdPic1: { 
    width: 320, height: 540,
    position: 'absolute', top: '30%', left: 480,
  },
  rwdPic2: {
    width: 320, height: 540,
    position: 'absolute', top: '8%', left: 360,
  },
  rwdPic3: {
    width: 320, height: 540,
    position: 'absolute', top: '20%', left: 80,
  }
}));

/*
System Highlights:
Realtime message communication: websocket, socket.io.
Integration of WebRTC and Sip: janus-gateway.
Realtime Media/Audio recording through WebRTC: WebRTC media server, janus-gateway.
Realtime sip audio to text transferring: Google SpeechRecgnition, websocket, socket.io.

Other details:
SPA website implementation: react, react-router.
Responsibe web design effect: media-query, material-ui library.
Website frontend data management: redux, react-redux, redux-saga.
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
        <img alt='landing' style={{ width: 700, height: 420, marginLeft: 80, marginTop: 24, boxShadow: '0 1rem 2rem rgba(0, 0, 0, .2)' }} src={process.env.PUBLIC_URL + '/works/ears/landing.png'} />
      </div>
      <div className={clsx(classes.blockClass, classes.blockTwo)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'02'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>Realtime</strong>} message</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}>
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'Realize realtime message communication for each video call via websocket and socket.io library.'}</Typography>
        </div>
        <img alt='realtime' className={classes.realtimeImg} src={process.env.PUBLIC_URL + '/works/ears/realtime_msg.png'} />
      </div>
      <div className={clsx(classes.blockClass, classes.blockThree)}>
        <Typography className={clsx(classes.blockNumber, classes.numberThree)} variant='h1'>{'03'}</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryThree)}> 
          <Typography variant='h3' color='primary' className={classes.titleThree}>{<strong>Integration</strong>} of WebRTC & Sip</Typography>
          <Typography variant='body1' color='primary' className={classes.bodyThree}>{'Accomplished video/audio recording feature by WebRTC media server. User can lunch a video communication and dial general telecom via sip. Third party open source library usage: janus-gateway.'}</Typography>
        </div>
        <div className={classes.blockThreePics}>
          <img alt='webrtcandsip' className={classes.picClass} src={process.env.PUBLIC_URL + '/works/ears/webrtcAndSip.png'} />
          <img alt='sip1' className={classes.sipPicClass} src={process.env.PUBLIC_URL + '/works/ears/sip1.png'} />
          <img alt='sip2' className={classes.sipPicClass} src={process.env.PUBLIC_URL + '/works/ears/sip2.png'} />
        </div>
      </div>
      <div className={clsx(classes.blockClass, classes.blockFour)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'04'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>Audio</strong>} interpretation</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}> 
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'Realtime audio to text transferring via google speechRecognition and websocket.'}</Typography>
        </div>
        <div className={classes.blockFourPics}>
          <img alt='stt1' className={classes.picClass} src={process.env.PUBLIC_URL + '/works/ears/stt1.png'} />
          <img alt='stt2' className={classes.sipPicClass} src={process.env.PUBLIC_URL + '/works/ears/stt2.png'} />
        </div>
      </div>
      <div className={clsx(classes.blockClass, classes.blockFive)}>
        <Typography className={clsx(classes.blockNumber, classes.numberThree)} variant='h1'>{'05'}</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryThree)}> 
          <Typography variant='h3' color='primary' className={classes.titleThree}>RWD {<strong>Implementation</strong>}</Typography>
          <Typography variant='body1' color='primary' className={classes.bodyThree}>{'Build responsive web design effect by material-ui and media-query.'}</Typography>
          
          <img alt='rwd1' className={classes.rwdPic1} src={process.env.PUBLIC_URL + '/works/ears/rwd1.png'} />
          <img alt='rwd2' className={classes.rwdPic2} src={process.env.PUBLIC_URL + '/works/ears/rwd2.png'} />
          <img alt='rwd3' className={classes.rwdPic3} src={process.env.PUBLIC_URL + '/works/ears/rwd3.png'} />
          
        </div>
      </div>
      <div className={clsx(classes.blockClass)}>
        <Typography className={clsx(classes.blockNumber, classes.numberTwo)} variant='h1'>{'06'}</Typography>
        <Typography variant='h3' color='primary' className={classes.titleTwo}>{<strong>Other</strong>} detials</Typography>
        <div className={clsx(classes.textBlockBoundary, classes.boundaryTwo)}> 
          <Typography variant='body1' color='primary' className={classes.bodyTwo}>{'SPA website implementation: react, react-router. Website frontend data management: redux, react-redux, redux-saga.'}</Typography>
        </div>
        <div style={{ padding: 64 }}>
          <img alt='other1' className={classes.picClass} src={process.env.PUBLIC_URL + '/works/ears/other1.png'} />
          <img alt='other2' className={classes.picClass} src={process.env.PUBLIC_URL + '/works/ears/other2.png'} />
          <img alt='other3' className={classes.picClass} src={process.env.PUBLIC_URL + '/works/ears/other3.png'} />
        </div>
      </div>
    </div>
  )
}

const Ears = (props) => {
  const classes = useStyles();
  return (
    <Page
      title="Ears"
      spanTitle="WebRTC media server"
      spanDetail="Matching sign language service prodivers and users"
      parallaxClass={classes.parallaxClass}
      >
      <div className={classes.pageContent}>
        <Project
          title="d'Octo Ears"
          description='A sign language translation service matching platform. The application can support user who are hard of hearing get assistant of translation from sign
language association.' />
      </div>
    </Page>
  );
}

export default Ears;

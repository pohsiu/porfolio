import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSection from './components/TestScene';
import Projects from './components/Projects';

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100vh',
    position: 'relative',
    '--large-viewport': 1440,
  },
  background: {
    width: '100%',
    display: 'flex',
  },
  projects: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'scroll',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: -15,
    cursor: 'none',
  },
}));

const projectMap = {
  'section1': {
    pre: './images/bg2.jpg',
    image: './images/bg1.jpg',
  },
  'section2': {
    pre: './images/bg3.jpg',
    image: './images/bg2.jpg',
  },
  'section3': {
    pre: './images/bg1.jpg',
    image: './images/bg3.jpg',
  },
  'section4': {
    pre: './images/bg2.jpg',
    image: './images/bg1.jpg',
  },
  'section5': {
    pre: './images/bg3.jpg',
    image: './images/bg2.jpg',
  },
  'section6': {
    pre: './images/bg1.jpg',
    image: './images/bg3.jpg',
  },
}

const projects = [
  'section1', 'section2', 'section3', 'section4', 'section5', 'section6'
]


function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}
function App() {
  const classes = useStyles();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(undefined);
  return (
    <div className={classes.app}>
      <BackgroundSection
        className={classes.background}
        selectedProjectIndex={selectedProjectIndex}
      />
      <Projects className={classes.projects} setSelectedProjectIndex={setSelectedProjectIndex} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSection from './components/BackgroundSection';
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

function App() {
  const classes = useStyles();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(undefined);
  const [bgRef, setBgRef] = useState(null);
  return (
    <div className={classes.app}>
      <BackgroundSection setBgRef={setBgRef} className={classes.background} selectedProjectIndex={selectedProjectIndex} />
      <Projects bgRef={bgRef} className={classes.projects} setSelectedProjectIndex={setSelectedProjectIndex} />
    </div>
  );
}

export default App;

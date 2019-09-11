import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSection from './components/BackgroundSection';
import Projects from './components/Projects';

const useStyles = makeStyles(theme => ({
  app: {
    display: 'flex',
    flex: 1,
    width: '100%',
    '--large-viewport': 1440,
  },
  background: {

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
  return (
    <div className={classes.app}>
      <BackgroundSection className={classes.background} />
      <Projects className={classes.projects} />
    </div>
  );
}

export default App;

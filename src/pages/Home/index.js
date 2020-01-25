import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSection from '../../components/BackgroundSection';
import Sections from '../../components/Sections';
import Narbar from '../../components/Navbar';

const useStyles = makeStyles(theme => ({
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
  navContainer: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'tranlateX(-50%)',
    maxWidth: 1440,
  }
}));

const LandingPage = (props) => {
  const classes = useStyles();
  const [sectionIndex, setSectionIndex] = useState(undefined);
  return (
    <React.Fragment>
      <BackgroundSection
        className={classes.background}
        sectionIndex={sectionIndex}
      />
      <Sections className={classes.projects} setSectionIndex={setSectionIndex} />
      <div className={classes.navContainer}>
        <Narbar />
      </div>
    </React.Fragment>
  );
}

export default LandingPage;

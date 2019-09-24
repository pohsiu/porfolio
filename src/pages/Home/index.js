import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundSection from '../../components/BackgroundSection';
import Sections from '../../components/Sections';

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
    </React.Fragment>
  );
}

export default LandingPage;

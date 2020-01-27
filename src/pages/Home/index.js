import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
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
  fixedDiv: {
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  navContainer: {
    display: 'flex',
    margin: '0 auto',
    maxWidth: 1440,
    verticalAlign: 'baseline',
  },
  selectNull: {
    backgroundColor: theme.palette.background.main,
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
      <Sections className={clsx(classes.projects, { [classes.selectNull]: !sectionIndex })} setSectionIndex={setSectionIndex} />
      <div className={classes.fixedDiv}>
        <div className={classes.navContainer}>
          <Narbar />
        </div>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;

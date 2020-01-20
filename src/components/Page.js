import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// TODO: put reused navbar in here
const useStyles = makeStyles(({ palette }) => ({
  root: {
    display: 'block',
    width: '100%',
    position: 'relative',
    overflow: 'auto',
  },
  tlWrapper: {
    width: '100%',
    float: 'left',
    position: 'relative',
    background: palette.background.main,
  },
  heroFixed: {
    opacity: 1,
    position: 'fixed',
    top: 0,
    bottom: 0,
    height: '100vh',
    marginLeft: '50%',
    zIndex: 1,
    transform: 'translateX(-50%)',
    width: 'calc(100vw - 36px)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  heroWrap: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    zIndex: 1,
    maxWidth: 1440,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outer: {
    position: 'relative',
    zIndex: 1,
    overflowX: 'hidden',
    background: `linear-gradient(transparent,transparent 100vh, ${palette.background.main} 100.001vh, ${palette.background.main})`
  },
  outerContainer: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
  },
  filledTop: {
    position: 'relative',
    top: '-6.5rem',
    left: '50%',
    width: '100vw',
    height: '100vh',
    transform: 'translateX(-50%)',
  },
  pageContent: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
    height: 1000,
    paddingTop: 24,
  },

}));

const Page = (props) => {
  const classes = useStyles();
  const { parallaxClass, outerClass, titleClass } = props;
  return (
    <div className={classes.root}>
      <div className={classes.tlWrapper} style={{ zIndex: 1, opacity: 1 }}>
        <div className={clsx(classes.heroFixed, parallaxClass)} style={{ display: 'block' }}>
          <div className={clsx(classes.heroWrap, titleClass)}>
            <h1>{props.title}</h1>
          </div>
        </div>
        <div className={clsx(classes.outer, outerClass)}>
          <div className={classes.outerContainer}>
            <nav>NAV BAR</nav>
            <div style={{ opacity: 1 }}>
              <div className={classes.filledTop} />
              <div className={classes.pageContent}>
                {props.children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

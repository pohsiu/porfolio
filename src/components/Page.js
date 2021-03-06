import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import BGIcon from './Svgs/BGIcon';
import Navbar from './Navbar';
// TODO: put reused navbar in here
const useStyles = makeStyles(({ palette }) => ({
  "@keyframes bgAnimation": {
    "0%": {
      opacity: 0,
      '-webkit-filter': 'blur(10px)',
    },
    "50%": {
      opacity: 0.5,
      '-webkit-filter': 'blur(5px)',
    },
    "100%": {
      opacity: 1,
      '-webkit-filter': 'blur(0px)',
    },
  },
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
    maxHeight: 682,
    zIndex: 1,
    width: 'calc(100vw - 12px)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPositionX: '40%',
    backgroundPositionY: '40%',
    animation: '$bgAnimation .5s ease-in',
    // marginLeft: '50%',
    // transform: 'translateX(-50%)',
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
    background: `linear-gradient(transparent,transparent 682px, ${palette.background.main} 683px, ${palette.background.main})`,
    width: 'calc(100vw - 12px)',
  },
  outerContainer: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
    verticalAlign: 'baseline',
  },
  filledTop: {
    position: 'relative',
    top: '-6.5rem',
    left: '50%',
    width: '100vw',
    height: '100vh',
    maxHeight: 682,
    transform: 'translateX(-50%)',
  },
  pageContent: {
    width: '100%',
    margin: '0 auto',
    maxWidth: 1440,
    minHeight: 800,
    paddingTop: 24,
    color: palette.secondary.main,
  },
  workType: {
    position: 'absolute',
    bottom: 0,
    right: 24,
    width: '100%',
    marginBottom: '5rem',
    paddingBottom: '4rem',
    textAlign: 'right',
    listStyleType: 'none',
    lineHeight: 2,
    borderBottom: `1px solid ${palette.secondary.main}`,
    fontSize: '.88rem',
    color: palette.secondary.main,
  },
  titleContainer: {
    position: 'relative',
  },
  title: {
    position: 'absolute',
    top: '6.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#000',
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  BGIcon: {
    color: palette.secondary.main,
    width: 320,
    height: 320,
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
            <div className={classes.titleContainer}>
              <BGIcon className={classes.BGIcon} />
              <h1 className={clsx(classes.title, titleClass)}>{props.title}</h1>
            </div>
            <ul className={classes.workType}>
              <li><span>{props.spanTitle || 'Product'}</span></li>
              <li><span>{props.spanDetail || 'Internal Venture'}</span></li>
            </ul>
          </div>
        </div>
        <div className={clsx(classes.outer, outerClass)}>
          <div className={classes.outerContainer}>
            <Navbar />
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

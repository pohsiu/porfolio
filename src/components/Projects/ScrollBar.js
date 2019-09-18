import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  scrollDiv: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'transparent',
    display: 'block',
  },
  scrollBar: {
    backgroundColor: '#dc4133',
    position: 'relative',
    display: 'block',
    top: -1,
    height: 4,
  },
}))

const ScrollBar = props => {
  const classes = useStyles();
  const { style } = props;
  return (
    <div className={classes.scrollDiv}>
      <div className={classes.scrollBar} style={style} />
    </div>
  )
}

export default ScrollBar;

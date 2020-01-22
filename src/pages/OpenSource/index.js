import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getPath from '../../utils/getPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getPath('images')}/bg5.jpg)`,
  },
}));

const OpenSource = (props) => {
  const classes = useStyles();
  return (
    <Page title="Open Source" parallaxClass={classes.parallaxClass}>
      <div>OpenSource</div>
    </Page>
  );
}

export default OpenSource;

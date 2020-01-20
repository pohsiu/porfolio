import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg2.jpg)`,
  },
}));

const Experience = (props) => {
  const classes = useStyles();
  return (
    <Page title="Experience" parallaxClass={classes.parallaxClass}>
      <div>
        OpenSource
      </div>
    </Page>
  );
}

export default Experience;

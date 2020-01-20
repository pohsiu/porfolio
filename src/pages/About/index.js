import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg1.jpg)`,
  },
  titleClass: {
    color: theme.palette.secondary.main,
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Page title="About Me" parallaxClass={classes.parallaxClass} titleClass={classes.titleClass}>
      <div>This is about me content Below</div>
    </Page>
  );
}

export default About;

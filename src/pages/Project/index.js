import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg4.jpg)`,
  },
  titleClass: {
    // color: theme.palette.secondary.main,
  },
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <Page title="Project" parallaxClass={classes.parallaxClass} titleClass={classes.titleClass}>
      <div>This is Project content Below</div>
    </Page>
  );
}

export default Project;

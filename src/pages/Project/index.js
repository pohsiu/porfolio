import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getPath from '../../utils/getPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getPath('images')}/bg4.jpg)`,
  },
}));

const Project = (props) => {
  const classes = useStyles();
  return (
    <Page title="Project" parallaxClass={classes.parallaxClass}>
      <div>This is Project content Below</div>
    </Page>
  );
}

export default Project;

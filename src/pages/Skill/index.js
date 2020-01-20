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
const Skill = (props) => {
  const classes = useStyles();
  return (
    <Page title="Skill" parallaxClass={classes.parallaxClass} titleClass={classes.titleClass}>
      <div>This is Skill content Below</div>
    </Page>
  );
}

export default Skill;

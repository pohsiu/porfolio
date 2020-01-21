import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg3.jpg)`,
  },
}));
const Skill = (props) => {
  const classes = useStyles();
  return (
    <Page title="Skill" parallaxClass={classes.parallaxClass}>
      <div>This is Skill content Below</div>
    </Page>
  );
}

export default Skill;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg1.jpg)`,
  },
}));

const About = (props) => {
  const classes = useStyles();
  return (
    <Page title="About Me" parallaxClass={classes.parallaxClass}>
      <div>
        <Typography variant="h3" color={'Secondary'} gutterBottom>About Me ...</Typography>
        <Typography variant="h5" color={'Secondary'} >Dimension Eight Artificial Intelligence, Software Engineer</Typography>
        <Typography variant="h5" color={'Secondary'} >NCCU, Manament Information System, Master</Typography>
        <Typography variant="h5" color={'Secondary'} >NUK, Information Management, Bachelor</Typography>
        <Typography variant="h5" color={'Secondary'} >Institute For Information Industry, Digital Service Innovation Lab, Intern</Typography>
        <div>
          <div>Resume</div>
          <div>Git</div>
          <div>LinkenIn</div>
          <div>Medium</div>
        </div>
      </div>
    </Page>
  );
}

export default About;

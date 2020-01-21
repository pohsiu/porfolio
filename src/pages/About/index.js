import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Page from '../../components/Page';
import getImgPath from '../../utils/getImgPath';
const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getImgPath()}/bg1.jpg)`,
  },
  pageContent: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '-3rem',
    paddingLeft: 48,
    paddingRight: 48,
  },
  sectionDiv: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    paddingRight: 24,
  },
  columnDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowDiv: {
    display: 'flex',
    flexDirection: 'row',
    
  },
  rowDiv: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 48,
    minHeight: 80,
    paddingBottom: 32,
    marginBottom: 56,
    borderBottom: '1px solid #3c434d',
  },
  detail: {
    boxSizing: 'border-box',
    width: '50%',
    paddingRight: '5%',
    lineHeight: 2,
    whiteSpace: 'pre-line',
  },
  position: {
    lineHeight: 1.25,
  }
}));

const ContentSecion = (props) => {
  const classes = useStyles();
  const { details, position, period, isFirst, ...others } = props;
  return (
    <div className={classes.sectionDiv} {...others}>
      <div>
        {isFirst && <Typography variant="body2" color={'Secondary'} gutterBottom>Experience</Typography>}
        <Typography variant="body2" color={'Secondary'} gutterBottom>{period}</Typography>
      </div>
      <div>
        <Typography className={classes.position} variant="h3" color={'Secondary'} >{position}</Typography>
        <div className={classes.rowDiv}>
          {details && details.map(({ text }, index) => 
            (<Typography key={index.toString()} className={classes.detail} variant="body2" color={'Secondary'} >{text}</Typography>
          ))}
        </div>
      </div>
    </div>
  )
}

const About = (props) => {
  const classes = useStyles();
  return (
    <Page title="About Me" parallaxClass={classes.parallaxClass}>
      <div className={classes.pageContent}>
        <div className={classes.columnDiv}>
          <ContentSecion 
            isFirst
            period={'From 2017 to present'}
            position={'Dimension Eight Artificial Intelligence, Software Engineer'}
            details={[
              { text: 'Companies everywhere are realizing the benefit of being able to provide a flexible work environment and source employees from anywhere. Many tech companies, such as InVision, Buffer, Customer.io, and Zapier boast fully remote teams, with more companies joining this group every day.' },
              { text: 'Dimension Eight Artificial Intelligence, Software Engineer' }]}
          />
          <ContentSecion
            period={'From 2016 to 2017'}
            position={'Substitude Military Service'}
            details={[
              { text: 'Implement a website for meal ordering purpose aim to hhahahahahahah Implement a website for meal ordering purpose aim to hhahahahahahah Implement a website for meal ordering purpose aim to hhahahahahahah' },
              { text: '50+ users/day'}]}
          />
          <ContentSecion
            period={'From 2014 to 2016'}
            position={'NCCU, Manament Information System, Master'}
            // details={['Paper, R, php Oracle']}
          />
          <ContentSecion
            period={'From 2014/7 to 2014/12'}
            position={'Institute For Information Industry, Digital Service Innovation Lab, Intern'}
            details={[
              { text: 'Implement a crawler to fetch amazon website product details, customer reviews and prices etc. with python. \n Automize weekly report with php, replacing the manual way of serveral steps.'},
              { text: 'python, php, MySQL'}
            ]}
          />
          <ContentSecion
            period={'From 2010 to 2014'}
            position={'NUK, Information Management, Bachelor'}
            details={[
              { text: 'Award:' },
              { text: 'Award:' }]}
          />
          
        </div>
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

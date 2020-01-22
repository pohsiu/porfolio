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
  rowsDiv: {
    borderBottom: '1px solid #3c434d',
    marginTop: 48,
    minHeight: 80,
    paddingBottom: 32,
    marginBottom: 56,
    display: 'flex',
    flexDirection: 'column',
  },
  rowDiv: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: 120,
    marginBottom: 24,
    '&:last-child': {
      marginBottom: 0,
    }
  },
  detail: {
    boxSizing: 'border-box',
    width: '50%',
    paddingRight: '10%',
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
        <div className={classes.rowsDiv}>
          
          {details && details.map(({ text, withRight, title, description }, index) => 
            {
              if(withRight) {
                return (
                  <div className={classes.rowDiv}>
                    <Typography className={classes.detail} variant="body2" color={'Secondary'} >
                      {text}
                    </Typography>
                    <div className={classes.detail} >
                      <Typography variant="h3" color={'Secondary'}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color={'Secondary'} style={{ marginTop: 12, color: 'rgba(255, 255, 255, 0.6)' }}>
                        {description}
                      </Typography>
                    </div>
                  </div>
                )
              }
              return (
                <div className={classes.rowDiv} ket={index.toString()}>
                  <Typography className={classes.detail} variant="body2" color={'Secondary'} >
                    {text}
                  </Typography>
                </div>)
            }
          )}
        </div>
      </div>
    </div>
  )
}

const About = (props) => {
  const classes = useStyles();
  return (
    <Page title="About Me"
      parallaxClass={classes.parallaxClass}
      spanTitle="Louis Hsiao, a person who loved doing somethings weird."
      spanDetail="Hobbies: Volleyball, Jogging, Hiking, Table games and America TV series."
      >
      <div className={classes.pageContent}>
        <div className={classes.columnDiv}>
          <ContentSecion 
            isFirst
            period={'From 2017 to present'}
            position={'Dimension Eight Artificial Intelligence, Software Engineer'}
            details={[
              { text: 'WebRTC framework library integration. Dedicated to modulizing reusable components and data visulization.\nHands on docker and nodejs to develop RESTful api.\nIn charge of mobile version POC products. Opensource projects contribution in npm. ',
                withRight: true,
                title: 'Tools',
                description: 'react, material-ui, react-router, redux, redux-saga, nodejs, TypeScript, React-Native, docker, webrtc, '}]}
          />
          <ContentSecion
            period={'From 2016 to 2017'}
            position={'Substitude Military Service'}
            details={[
              { text: 'Implement a website for meal ordering purpose aim to minize human cost of daily job. For improving user experience, the website was integrated the RWD by bootstrap and line-bot notification.',
                withRight: true,
                title: '50+',
                description: 'Users and using the website'}]}
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
              { text: 'Implement a crawler to fetch amazon website product details, customer reviews and prices etc. with python. \n Automize weekly report with php, replacing the manual way of serveral steps.',
                withRight: true,
                title: 'Tools',
                description: 'python, php, MySQL'}
            ]}
          />
          <ContentSecion
            period={'From 2010 to 2014'}
            position={'NUK, Information Management, Bachelor'}
            details={[
              { text: '2013 ICT Innovative Services Contest\nLocation-based chatting and discussing application(Android).',
                withRight: true,
                title: 'Award',
                description: 'Second Place Of Group NGIS' },
              { text: '2013 Graduate Project Competition of NUKIM\nLocation-based chatting and discussing application(Android).',
                withRight: true,
                title: 'Award',
                description: 'First Place' },
            ]}
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

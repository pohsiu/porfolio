import React, { useCallback } from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Page from '../../components/Page';
import getPath from '../../utils/getPath';
import IconButton from '@material-ui/core/IconButton';
import Resume from '../../components/Svgs/Resume';
import Medium from '../../components/Svgs/Medium';
import LinkedIn from '../../components/Svgs/LinkedIn';
import Github from '../../components/Svgs/Github';
import SkillDomain from './SkillDomain';

const useStyles = makeStyles(theme => ({
  parallaxClass: {
    backgroundImage: `url(${getPath('images')}/bg6.jpg)`,
    
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
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
      gridRowGap: '1rem',
    }
  },
  columnDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  borderAtBottom: {
    borderBottom: '1px solid #3c434d',
  },
  rowsDivInColumn: {
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
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  detail: {
    boxSizing: 'border-box',
    width: '50%',
    paddingRight: '10%',
    lineHeight: 2,
    whiteSpace: 'pre-line',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      whiteSpace: 'normal',
      paddingBottom: 32,
    }
  },
  extraDetial: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  position: {
    lineHeight: 1.25,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36,
    },
  },
  iconDiv: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: lighten(theme.palette.icon.main, 0.7),
    }
  },
  icon: {
    width: 48,
    height: 48,
    color: theme.palette.icon.main,
  },
}));

const skillsMap = {
  Programming: [
    {
      name: 'JS',
      color: '#E18C1A',
      percentage: '80',
    },
    {
      name: 'CSS',
      color: '#1778A6',
      percentage: '60',
    },
    {
      name: 'HTML',
      color: '#B64967',
      percentage: '80',
    },
    {
      name: 'nodejs',
      color: '#476E74',
      percentage: '70',
    },
    {
      name: 'python',
      color: '#504069',
      percentage: '70',
    },
  ],
  Framework: [
    {
      name: 'React',
      color: 'rgb(125, 210, 240)',
      percentage: '90',
    },
    {
      name: 'Django',
      color: 'rgb(29, 59, 46)',
      percentage: '70',
    },
  ],
  CSSLibrary: [
    {
      name: 'Material-UI',
      color: 'rgb(53, 129, 197)',
      percentage: '80',
    },
    {
      name: 'Bootstrap',
      color: 'rgb(56, 43, 82)',
      percentage: '70',
    },
    {
      name: 'SASS',
      color: 'rgb(165, 93, 129)',
      percentage: '60',
    },
  ],
  Others: [
    {
      name: 'WebRTC',
      color: 'rgb(247, 206, 71)',
      percentage: '60',
    },
  ]
}
// TODO: RWD implement
const ContentSection = (props) => {
  const classes = useStyles();
  const { details, position, period, isFirst, ...others } = props;
  return (
    <div className={classes.sectionDiv} {...others}>
      <div>
        {isFirst && <Typography variant="body2" color={'secondary'} gutterBottom>Experience</Typography>}
        <Typography variant="body2" color={'secondary'} gutterBottom>{period}</Typography>
      </div>
      <div>
        <Typography className={classes.position} variant="h3" color={'secondary'} >{position}</Typography>
        <div className={clsx(classes.rowsDivInColumn, classes.borderAtBottom)}>
          
          {details && details.map(({ text, withRight, title, description }, index) => 
            {
              if(withRight) {
                return (
                  <div className={classes.rowDiv} key={index.toString()}>
                    <Typography className={classes.detail} variant="body2" color={'secondary'} >
                      {text}
                    </Typography>
                    <div className={classes.detail} >
                      <Typography className={classes.position} variant="h3" color={'secondary'}>
                        {title}
                      </Typography>
                      <Typography variant="body2" color={'secondary'} style={{ marginTop: 12, color: 'rgba(255, 255, 255, 0.6)' }}>
                        {description}
                      </Typography>
                    </div>
                  </div>
                )
              }
              return (
                <div className={classes.rowDiv} key={index.toString()}>
                  <Typography className={classes.detail} variant="body2" color={'secondary'} >
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
  const onClickIcon = useCallback((url) => () => window.open(url, "_blank"), []);
  return (
    <Page title="About Me"
      parallaxClass={classes.parallaxClass}
      spanTitle="Louis Hsiao, a person who loved doing somethings weird."
      spanDetail="Hobbies: Volleyball, Jogging, Hiking, Table games and America TV series."
      >
      <div className={classes.pageContent}>
        <div className={classes.columnDiv}>
          <ContentSection 
            isFirst
            period={'From 2017/12 to 2020/03'}
            position={'Dimension Eight Artificial Intelligence, Software Engineer'}
            details={[
              { text: 'WebRTC framework library integration. Dedicated to modulizing reusable components and data visulization.\nHands on docker and nodejs to develop RESTful api.\nIn charge of mobile version POC products. Opensource projects contribution in npm. ',
                withRight: true,
                title: 'Tools',
                description: 'react, material-ui, react-router, redux, redux-saga, nodejs, TypeScript, React-Native, docker, webrtc, '}]}
          />
          <ContentSection
            period={'From 2016 to 2017'}
            position={'Substitude Military Service'}
            details={[
              { text: 'Implement a website for meal ordering purpose aim to minize human cost of daily job. For improving user experience, the website was integrated the RWD by bootstrap and line-bot notification.',
                withRight: true,
                title: '50+',
                description: 'Users and using the website'}]}
          />
          <ContentSection
            period={'From 2014 to 2016'}
            position={'NCCU, Manament Information System, Master'}
            details={[
              { text: 'The Study of Order Decisions under Indirect Selling Model of an Electronic Component Distributor-taking ABC Company as an Example',
                withRight: true,
                title: 'Thesis Domain',
                description: 'Supply Chain Management, Decision Making'},
              { text: 'Analysis of relationship between dengue and spraying rate',
                withRight: true,
                title: 'Tools',
                description: 'R computing'},
              { text: 'Sceneryfactory recommendation System, using open data as data source to create sceneryfactory’s map of taiwan and recommend scenery at random',
                withRight: true,
                title: 'Tools',
                description: 'php, oracle, opendata'}
              ]}
          />
          <ContentSection
            period={'From 2014/7 to 2014/12'}
            position={'Institute For Information Industry, Digital Service Innovation Lab, Intern'}
            details={[
              { text: 'Implement a crawler to fetch amazon website product details, customer reviews and prices etc. with python. \n Automize weekly report with php, replacing the manual way of serveral steps.',
                withRight: true,
                title: 'Tools',
                description: 'python, php, MySQL'}
            ]}
          />
          <ContentSection
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
          <div className={classes.sectionDiv} style={{ paddingBottom: 64 }}>
            <Typography variant="subtitle1" color={'secondary'} gutterBottom>Skills</Typography>
            <div>
              {Object.keys(skillsMap).map(domainName => 
                <SkillDomain 
                  domain={domainName}
                  skills={skillsMap[domainName]}
                />)}
            </div>
          </div>
        </div>
        <div className={classes.sectionDiv}>
          <div />
          <div className={clsx(classes.columnDiv, classes.borderAtBottom)} style={{ paddingBottom: 64 }}>
            <div className={classes.rowDiv}>
              <div className={clsx(classes.detail, classes.extraDetial)}>
                <div>
                  <IconButton className={classes.iconDiv} onClick={onClickIcon(`${getPath('resume')}/Resume.pdf`)}>
                    <Resume className={classes.icon} />
                  </IconButton>
                </div>
                <Typography variant='h5' style={{ paddingLeft: 48 }}>Resume</Typography>
              </div>
              <div className={clsx(classes.detail, classes.extraDetial)}>
                <div>
                  <IconButton className={classes.iconDiv} onClick={onClickIcon("https://github.com/pohsiu")}>
                    <Github className={classes.icon} />
                  </IconButton>
                </div>
                <Typography variant='h5' style={{ paddingLeft: 48 }}>Github</Typography>
              </div>
            </div>
            <div className={classes.rowDiv}>
              <div className={clsx(classes.detail, classes.extraDetial)}>
                <div>
                  <IconButton className={classes.iconDiv} onClick={onClickIcon("https://www.linkedin.com/in/hsiao-louis-7434377a/")}>
                    <LinkedIn className={classes.icon} />
                  </IconButton>
                </div>
                <Typography variant='h5' style={{ paddingLeft: 48 }}>LinkedIn</Typography>
              </div>
              <div className={clsx(classes.detail, classes.extraDetial)}>
                <div>
                  <IconButton className={classes.iconDiv} onClick={onClickIcon("https://medium.com/@pohsiu0709")}>
                    <Medium className={classes.icon} />
                  </IconButton>
                </div>
                <Typography variant='h5' style={{ paddingLeft: 48 }}>Medium</Typography>
              </div>
            </div>
          </div>
        </div>
          
        
      </div>
    </Page>
  );
}

export default About;

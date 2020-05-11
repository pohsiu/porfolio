import React from 'react';
import { makeStyles, lighten } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  skillSet: {
    marginTop: 24,
    width: '100%', 
    backgroundColor: '#ffffff',
    height: 60,
    position:'relative',
    borderRadius: 10,
    '&:last-child': {
      marginBottom: 24,
    },
    [theme.breakpoints.down('sm')]: {
      height: 45,
    },
  },
  skillTitle: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    position:'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 160,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '30%',
      fontSize: 16,
    },
  },
  skillFill: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    height: '100%',
  },
  skillPercent: {
    color: '#000000',
    position:'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  domainClass: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 32,
    }
  }
}));

const Skill = (props) => {

  const classes = useStyles();
  const { color, percentage, name } = props;
  return (
    <div className={classes.skillSet}>
      <div className={classes.skillFill} style={{ backgroundColor: lighten(color, 0.7), width: `${percentage}%` }}/>
      <Typography className={classes.skillTitle} variant="h5" color={'secondary'} style={{ backgroundColor: color }}>{name}</Typography>
      <Typography className={classes.skillPercent} variant="h5" color={'secondary'}>{`${percentage}%`}</Typography>
    </div>
  );
}

const SkillDomain = (props) => {
  const { domain, skills } = props;
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h4" className={classes.domainClass} color={'secondary'}>{domain}</Typography>
      <div>
        {skills.map((skill, index) => (
          <Skill
            key={`${domain}-${index}`}
            percentage={skill.percentage}
            color={skill.color}
            name={skill.name}
          />))}
      </div>
    </React.Fragment>
  )
}

export default SkillDomain;
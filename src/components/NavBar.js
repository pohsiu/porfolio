import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const lists = [
  'about',
  'work',
  'skill',
]
const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div>
      {lists.map(list => (
        <Link className={classes.link}>
          {list}
        </Link>
      ))}
    </div>
  )
}

export default NavBar;
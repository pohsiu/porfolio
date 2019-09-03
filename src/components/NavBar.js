import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from "react-router-dom";

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
          <RouterLink to={`/${list}`}>
            {list}
          </RouterLink>
        </Link>
      ))}
    </div>
  )
}

export default NavBar;
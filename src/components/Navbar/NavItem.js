import React from 'react';
import { Link } from "react-router-dom";
import clxs from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  smNavItem: {
    fontSize: '2.5rem',
    listStyleType: 'none',
    width: '100vw',
  },
  navItem: {
    position: 'relative',
    padding: '0 2.25rem',
    cursor: 'pointer',
    transition: 'transform .2s cubic-bezier(.59,.11,.64,1.38)',
    '&:hover': {
      transform: 'translateY(-30%)',
    },
    '&:active': {
      transitionDuration: '.02s',
      transform: 'translateY(2%)',
    }
  },
  navLink: {
    display: 'inline-block',
    position: 'relative',
    height: '1.3rem',
    margin: '-.5rem',
    padding: 0,
    zIndex: 20,
    textAlign: 'center',
    color: '#fff',
    textDecoration: 'none',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  smNavLink: {
    height: '100%',
    transition: 'transform .2s cubic-bezier(.59,.11,.64,1.38)',
    '&:hover': {
      color: theme.palette.secondary.one,
      transform: 'translate(-2px, -2px)',
    },
    '&:active': {
      transitionDuration: '.02s',
      transform: 'translate(1px, 1px)',
    }
  },
  navLinkBg: {
  },
  navEffect: {
  },
}));
const NavItem = (props) => {
  const classes = useStyles();
  const { isSm, href, ...others } = props;
  return (
    <li className={clxs(classes.navItem, { [classes.smNavItem]: isSm })} {...others}>
      <Link className={clxs(classes.navLink, { [classes.smNavLink]: isSm })} to={props.href}>
        <span className={classes.navEffect}>
          {props.children}
        </span>
      </Link>
    </li>
  )
}

export default NavItem;
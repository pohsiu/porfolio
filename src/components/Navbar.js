import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  navRoot: {

  },
  logoHome: {

  },
  navItems: {
    display: 'flex',
    paddingLeft: '5rem',
    flex: 'auto',
    listStyleType: 'none',
    justifyContent: 'space-between',
    alignItems: 'center',
    clear: 'both',
  },
  navItem: {
    position: 'relative',
    padding: '0 2.25rem',
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
  },
  navEffect: {

  },
}))

const NavItem = (props) => {
  const classes = useStyles();
  return (
    <li className={classes.navItem}>
      <a className={classes.navLink} href={props.href}>
        <span className={classes.navEffect}>
          {props.children}
        </span>
      </a>
    </li>
  )
}
const Navbar = (props) => {
  const classes = useStyles();
  return (
    <nav className={classes.navRoot} {...props}>
      <a className={classes.logoHome} href='/'>
        H
      </a>
      <ul className={classes.navItems}>
        <NavItem>Project</NavItem>
        <NavItem>Skill</NavItem>
        <NavItem>Open Source</NavItem>
      </ul>
    </nav>
  )
}

export default Navbar
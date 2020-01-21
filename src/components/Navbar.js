import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  navRoot: {
    minHeight: '6.5rem',
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 48,
  },
  navWrapper: {
    zIndex: 100,
    display: 'flex',
    alignItems: 'flex-end',
  },
  logoHome: {
    display: 'flex',
    width: '2.5rem',
    height: '2.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    border: '2px solid #ffffff',
    color: '#ffffff',
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
    cursor: 'pointer',
    transition: 'transform .2s cubic-bezier(.59,.11,.64,1.38)',
    '&:hover': {
      // TODO: add hover effect
      transform: 'translateY(-50%)',
    },
  },
  navLinkBg: {
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
      <div className={classes.navWrapper}>
        <a className={classes.logoHome} href='/'>
          <HomeIcon />
        </a>
        <ul className={classes.navItems}>
          <NavItem href='/about/'>About</NavItem>
          <NavItem href='/skill/'>Skill</NavItem>
          <NavItem href='/project/'>Project</NavItem>
          <NavItem href='/opensource'>Open Source</NavItem>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
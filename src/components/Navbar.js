import React, { useState } from 'react';
import { makeStyles, darken } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clxs from 'clsx';

const useStyles = makeStyles(theme => ({
  "@keyframes moveInLeft": {
    '0%': {
      opacity: 0,
      transform: 'translateX(100px)', /* animated in x direction */
    },
    '80%': {
      opacity: 0.6,
      transform: 'translateX(-10px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translate(0)',
    }
  },
  "@keyframes fadeIn": {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    }
  },
  "@keyframes fadeOut": {
    '0%': {
      opacity: 1,
    },
    '100%': {
      opacity: 0,
    }
  },
  navRoot: {
    minHeight: '6.5rem',
    display: 'flex',
    flexDirection: 'row',
  },
  navWrapper: {
    paddingLeft: 48,
    zIndex: 100,
    display: 'flex',
    alignItems: 'flex-end',
  },
  smNavWrapper: {
    paddingLeft: 48,
    paddingTop: 60,
    zIndex: 100,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '5.5rem 1fr',
    width: '100vw',
  },
  isOpenWrapper: {
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    animationName: '$fadeIn',
    animationDuration: '.6s',
  },
  
  menu: {
    display: 'flex',
    color: 'white',
    justifyContent: 'flex-end',
    paddingRight: 48,
    paddingTop: '0.5rem',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      color: darken(theme.palette.secondary.main, 0.3),
    }
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
  smNavItems: {
    pointerEvents: 'all',
    position: 'fixed',
    top: '7.5rem',
    display: 'block',
    left: 0,
    paddingInlineStart: 0,
    lineHeight: 1.6,
  },
  smNavItem: { // TODO: fadeIn one by one in order,
    animationName: '$moveInLeft',
    animationDuration: '.6s',
    animationTimingFunction: 'ease-in',
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
      // TODO: add hover effect
      transform: 'translateY(-30%)',
    },
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
  },
  navLinkBg: {
  },
  navEffect: {
  },
}))

const useWidth = () => {
  const theme = useTheme();
  const keys = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

const NavItem = (props) => {
  const classes = useStyles();
  const { isSm, href, ...others } = props;
  return (
    <li className={clxs(classes.navItem, { [classes.smNavItem]: isSm })} {...others}>
      <a className={clxs(classes.navLink, { [classes.smNavLink]: isSm })} href={props.href}>
        <span className={classes.navEffect}>
          {props.children}
        </span>
      </a>
    </li>
  )
}

const Navbar = (props) => {
  const classes = useStyles();
  const width = useWidth();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const onMenuClick = () => {
    const newCondition = !isMenuOpen
    setMenuOpen(newCondition);
  }
  if (width === 'xs' || width === 'sm') {
    // TODO: fadeOut ul animation
    return (
      <nav className={
        clxs(classes.navRoot, 
          { 
            [classes.isOpenWrapper]: isMenuOpen,
          })} {...props}>
        <div className={classes.smNavWrapper}>
          <a className={classes.logoHome} href='/'>
            <HomeIcon />
          </a>
          <div className={classes.menu} onClick={onMenuClick}>{isMenuOpen ? 'Close' : 'Menu'}</div>
          {isMenuOpen && <ul className={clxs(classes.smNavItems)}> 
            <NavItem href='/about/' isSm >About</NavItem>
            <NavItem href='/skill/' isSm >Skill</NavItem>
            <NavItem href='/project/' isSm >Project</NavItem>
            <NavItem href='/opensource' isSm >Open Source</NavItem>
          </ul>}
        </div>
      </nav>
    );
  }
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

export default Navbar;
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles, darken } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import clxs from 'clsx';
import NavItem from './NavItem';
import { useWidth } from '../../hooks';

const useStyles = makeStyles(theme => ({
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
    width: 'calc(100vw - 48px)',
  },
  isOpenWrapper: {
    height: '100vh',
    backgroundColor: theme.palette.background.main,
    transition: 'backgroundColor .6s ease-in',
  },
  menu: {
    paddingRight: 48,
    paddingTop: '0.5rem',
  },
  menuBtnClass: {
    textAlign: 'right',
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
    paddingInlineStart: '20px',
    lineHeight: 1.6,
  },
}))



const SMNavItems = (props) => {
  const classes = useStyles();
  const { checked, onMenuClick, ...others } = props;
  return (
    <ul className={clxs(classes.smNavItems)} {...others}> 
      <Grow in={checked} {...(checked ? { timeout: 200 } : {})}><NavItem onClick={onMenuClick} href='/about/' isSm >About</NavItem></Grow>
      <Grow in={checked} {...(checked ? { timeout: 600 } : {})}><NavItem onClick={onMenuClick} href='/ears/' isSm >Ears</NavItem></Grow>
      <Grow in={checked} {...(checked ? { timeout: 800 } : {})}><NavItem onClick={onMenuClick} href='/meals/' isSm >Meals</NavItem></Grow>
      {/* <Grow in={checked} {...(checked ? { timeout: 1200 } : {})}><NavItem href='/opensource/' isSm >Open Source</NavItem></Grow> */}
    </ul>
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
          <Link className={classes.logoHome} to='/'>
            <HomeIcon />
          </Link>
          <div className={classes.menu} onClick={onMenuClick}>
            <Typography className={classes.menuBtnClass} variant='body2' color='secondary'>{isMenuOpen ? 'Close' : 'Menu'}</Typography>
          </div>
          {<SMNavItems checked={isMenuOpen} onMenuClick={onMenuClick}/>}
        </div>
      </nav>
    );
  }
  return (
    <nav className={classes.navRoot} {...props}>
      <div className={classes.navWrapper}>
        <Link className={classes.logoHome} to='/'>
          <HomeIcon />
        </Link>
        <ul className={classes.navItems}>
          <NavItem href='/about/'>About</NavItem>
          <NavItem href='/ears/'>Ears</NavItem>
          <NavItem href='/meals/'>Meals</NavItem>
          {/* <NavItem href='/opensource/'>Open Source</NavItem> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
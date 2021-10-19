import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  hex: {
    margin: (props) => 0.025*props.size,
    transition: '0.2s',
    '&:hover': {
      transform: 'translateZ(0) scale(1.015)',
    },
  },
  hexTop: {
    width: 0,
    borderBottom: (props) => `${props.size / 2}px solid ${props.color}`,
    borderLeft: (props) => `${Math.floor(props.size / 2 * 1.735 )}px solid transparent`,
    borderRight: (props) => `${Math.floor(props.size / 2 * 1.735 )}px solid transparent`,
  },
  hexBody: {
    width: (props) => `${Math.floor(props.size * 1.735)}px`,
    height: (props) => `${props.size}px`,
    backgroundColor: (props) => `${props.color}`,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  hexBottom: {
    width: 0,
    borderTop: (props) => `${props.size / 2}px solid ${props.color}`,
    borderLeft: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
    borderRight: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  header: {
    fontSize: (props) => props.size * 0.15,
    width: '70%',
    lineHeight: (props) => 1.1 - props.size*0.001,
    fontFamily: 'Cinzel',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5
  },
  body: {
    fontSize: (props) => (props.size * 0.085 >= 12.5 ? props.size * 0.085 : 12.5),
    fontFamily: 'serif',
    width: '85%',
    lineHeight: '16px',
    letterSpacing: '1px',
    marginTop: '6px',
    color: '#efeee9',
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5,
    [theme.breakpoints.up('xs')]: {
      lineHeight: (props) => 0.85 + props.size*0.002,
      letterSpacing: (props) => 0.8 + props.size*0.005,
      marginTop: '6px',
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: (props) => 0.82 + props.size*0.002,
      letterSpacing: (props) => 0.7 + props.size*0.005,
      marginTop: '10px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: (props) => 1.2 + props.size*0.002,
      letterSpacing: (props) => 1.2 + props.size*0.004,
      marginTop: '16px',
    },
  },
  readMore: {
    fontSize: (props) => (props.size * 0.08 >= 12.5 ? props.size * 0.08 : 12.5),
    lineHeight: (props) => 1.4 - props.size*0.001,
    fontFamily: 'Cinzel',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    position: 'absolute',
    bottom: (props) => -props.size * 0.28,
    textDecoration: 'none',
  }
}));

export default function Hexagon(props) {
  const classes = useStyles(props);
  console.log(2.5 - props.size*0.005);
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect push to={props.link}/>
  }
  if (props.link) {
    return (
      <div className={classes.hex}>
        <div 
          className={classes.hexTop} 
          onClick={() => setRedirect(true)}
          role="link"
          onKeyDown={() => setRedirect(true)}
          tabIndex={0}
        />
        <div 
          className={classes.hexBody}
          onClick={() => setRedirect(true)}
          role="link"
          onKeyDown={() => setRedirect(true)}
          tabIndex={0}
        >
          <div className={classes.header}>
            {props.header}
          </div>
          <div className={classes.body}>
            {props.body}
          </div>
          {props.link && <NavLink alt="Read More About Plan" className={classes.readMore} exact to={props.link}>View Plan →</NavLink>}
        </div>
        <div 
          className={classes.hexBottom}
          onClick={() => setRedirect(true)}
          role="link"
          onKeyDown={() => setRedirect(true)}
          tabIndex={0}
        />
      </div>
    );
  }
  return (
      <div className={classes.hex}>
        <div className={classes.hexTop} />
        <div className={classes.hexBody}>
          <div className={classes.header}>
            {props.header}
          </div>
          <div className={classes.body}>
            {props.body}
          </div>
          {props.link && <NavLink alt="Read More About Plan" className={classes.readMore} exact to={props.link}>View Plan →</NavLink>}
        </div>
        <div className={classes.hexBottom}>
        </div>
      </div>
  );
}
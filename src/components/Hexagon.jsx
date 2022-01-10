import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { NavLink, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  hex: {
    margin: (props) => props.size * 0.04,
    transition: '0.2s',
    '&:hover': {
      transform: 'translateZ(0) scale(1.03)',
    },
  },
  header: {
    fontSize: (props) => props.ourServices ? props.size * 0.25 : props.size * 0.15,
    marginTop: (props) => props.ourServices ? "-18px" : "-5px",
    width: '70%',
    lineHeight: (props) => 1.1 - props.size * 0.0015,
    fontFamily: 'Cinzel',
    color: (props) => props.text,
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5
  },
  hr: {
    marginTop: (props) => props.ourServices ? "2px": "8px",
  },
  body: {
    fontSize: (props) => (props.size * 0.085 >= 12.0 ? props.size * 0.085 : 12),
    fontFamily: 'serif',
    width: (props) => props.ourServices ? '92%' : '85%',
    lineHeight: '16px',
    letterSpacing: '1px',
    marginTop: (props) => props.ourServices ? "-8px" : "6px",
    color: (props) => props.text,
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5,
    [theme.breakpoints.up('xs')]: {
      lineHeight: (props) => 0.85 + props.size * 0.002,
      letterSpacing: (props) => 0.8 + props.size * 0.005,
      marginTop: '-4px',
    },
    [theme.breakpoints.up('sm')]: {
      lineHeight: (props) => 0.82 + props.size * 0.002,
      letterSpacing: (props) => 0.7 + props.size * 0.005,
      marginTop: '10px',
    },
    [theme.breakpoints.up('md')]: {
      lineHeight: (props) => 1.2 + props.size * 0.002,
      letterSpacing: (props) => 1.2 + props.size * 0.004,
      marginTop: '16px',
    },
  },
  readMore: {
    fontSize: (props) => (props.size * 0.08 >= 12.5 ? props.size * 0.08 : 12.5),
    lineHeight: (props) => 1.4 - props.size * 0.001,
    fontFamily: 'Cinzel',
    color: (props) => props.text,
    position: 'absolute',
    bottom: (props) => -props.size * 0.32,
    textDecoration: 'none',
  },
  hexagon: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: (props) => `${Math.floor(props.size * 1.735)}px`,
    height: (props) => `${Math.floor(props.size)}px`,
    background: (props) => props.color,
    margin: (props) => `${Math.floor(props.size / 2 * 1.0)}px auto`,
    "&:before": {
      content: '""',
      position: "absolute",
      borderLeft: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
      borderRight: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
      bottom: "100%",
      borderBottom: (props) => `${Math.floor(props.size / 2 * 1.0017)}px solid ${props.color}`,
      
    },
    "&:after": {
      content: "''",
      position: "absolute",
      borderLeft: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
      borderRight: (props) => `${Math.floor(props.size / 2 * 1.735)}px solid transparent`,
      top: "100%",
      borderTop: (props) => `${Math.floor(props.size / 2 * 1.0017)}px solid ${props.color}`,
      zIndex: -1,
    }
  },
}));

export default function Hexagon(props) {
  const classes = useStyles(props);
  const [redirect, setRedirect] = useState(false);
  if (redirect) {
    return <Redirect push to={props.link} />
  }
  if (props.link) {
    return (
      <div className={classes.hex}
      onClick={() => setRedirect(true)}
      role="link"
      onKeyDown={() => setRedirect(true)}
      tabIndex={0}
      >
        <div className={classes.hexagon}>
          <div className={classes.header}>
            {props.header}
            {props.header && <hr className={classes.hr} />}
          </div>
          <div className={classes.body}>
            {props.body}
          </div>
          {props.link && <span className={classes.readMore}>View →</span>}
        </div>
      </div>

    );
  }
  return (
    <div className={classes.hex}>
      <div className={classes.hexagon}>
        <div className={classes.header}>
          {props.header}
          {props.header && <hr className={classes.hr}/>}
        </div>
        <div className={classes.body}>
          {props.body}
        </div>
      </div>
    </div>
  );
}
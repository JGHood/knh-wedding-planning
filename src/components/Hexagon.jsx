import { makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
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
    color: '#c6a739',
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5
  },
  body: {
    fontSize: (props) => props.size * 0.085,
    fontFamily: 'serif',
    width: '85%',
    lineHeight: (props) => 1.5 - props.size*0.001,
    letterSpacing: '0.8px',
    marginTop: '16px',
    color: '#efeee9',
    textAlign: 'center',
    position: 'relative',
    top: (props) => -props.size / 5
  },
  readMore: {
    fontSize: (props) => props.size * 0.08,
    lineHeight: (props) => 1.4 - props.size*0.001,
    fontFamily: 'Cinzel',
    color: '#c6a739',
    textAlign: 'center',
    position: 'absolute',
    bottom: (props) => -props.size * 0.25,
    textDecoration: 'none',
  }
});

export default function Hexagon(props) {
  const classes = useStyles(props);
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
          {props.link && <NavLink className={classes.readMore} exact to={props.link}>Read More</NavLink>}
        </div>
        <div className={classes.hexBottom}>
        </div>
      </div>
  )
}
import { Button, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  outline: {
    borderRadius: '8px',
    borderWidth: '4px',
    color: 'white',
    borderColor: theme.palette.secondary.main,
    border: 'solid',
    textTransform: 'none',
    letterSpacing: '4px',
    fontSize: (props) => props.size,

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  solid: {
    borderRadius: '8px',
    borderWidth: '4px',
    borderColor: theme.palette.secondary.main,
    border: 'solid',
    color: theme.palette.primary.main,
    textTransform: 'none',
    letterSpacing: '4px',
    backgroundColor: theme.palette.secondary.main,

    '&:hover': {
      backgroundColor: '#C0B273',
      borderColor: '#C0B273',
    },
  },
  solidOutline: {
    borderRadius: '8px',
    borderWidth: '4px',
    borderColor: theme.palette.primary.main,
    border: 'solid',
    color: theme.palette.primary.main,
    textTransform: 'none',
    backgroundColor: theme.palette.secondary.main,

    '&:hover': {
      backgroundColor: '#C0B273',
      borderColor: theme.palette.primary.main,
    },
  },
  green: {
    borderRadius: '0px',
    borderWidth: '0px',
    borderColor: theme.palette.primary.main,
    border: 'solid',
    color: theme.palette.common.white,
    textTransform: 'none',
    letterSpacing: '4px',
    backgroundColor: theme.palette.primary.main,

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
  black: {
    color: theme.palette.common.white,
    borderRadius: '0px',
    letterSpacing: '0px',
    backgroundColor: 'black',
    fontSize: '14px',

    [theme.breakpoints.up('sm')]: {
      padding: '7px 35px',
    },

    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
  },
  navLinkSolid: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
  navLinkOutline: {
    color: 'white',
    textDecoration: 'none',
  },
}));
export default function GBWButton(props) {
  const classes = useStyles(props);
  if (props.variety === "solid") {
    if (props.to) {
      return (
        <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.solid}><NavLink className={classes.navLinkSolid} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.solid}>{props.children}</Button></Typography>
    )
  }
  if (props.variety === "outline") {
    if (props.to) {
      return (
        <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.outline}><NavLink className={classes.navLinkOutline} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.outline}>{props.children}</Button></Typography>
    )
  }
  if (props.variety === "green") {
    if (props.to) {
      return (
        <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.green}><NavLink className={classes.navLinkOutline} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography {...props} variant="button"><Button type={props.type ? props.type : 'button'} className={classes.green}>{props.children}</Button></Typography>
    )
  }
  if (props.variety === "solidOutline") {
    if (props.to) {
      return (
        <Typography {...props}><Button type={props.type ? props.type : 'button'} className={classes.solidOutline}><NavLink className={classes.navLinkOutline} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography {...props}><Button type={props.type ? props.type : 'button'} className={classes.solidOutline}>{props.children}</Button></Typography>
    )
  }
  if (props.variety === "black") {
    if (props.to) {
      return (
        <Typography {...props} variant="body1"><Button type={props.type ? props.type : 'button'} className={classes.black}><NavLink className={classes.navLinkOutline} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography {...props} variant="body1"><Button type={props.type ? props.type : 'button'} className={classes.black}>{props.children}</Button></Typography>
    )
  }
  return (
    <Typography {...props}><Button type={props.type ? props.type : 'button'}>{props.children}</Button></Typography>
  )
}
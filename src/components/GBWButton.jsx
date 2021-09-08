import { Button, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  outline: {
    borderRadius: '8px',
    borderWidth: '4px',
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
      backgroundColor: '#ab9121',
      borderColor: '#ab9121',
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
  if (props.type === "solid") {
    if (props.to) {
      return (
        <Typography variant="button"><Button className={classes.solid}><NavLink className={classes.navLinkSolid} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography variant="button"><Button className={classes.solid}>{props.children}</Button></Typography>
    )
  }
  if (props.type === "outline") {
    if (props.to) {
      return (
        <Typography variant="button"><Button className={classes.outline}><NavLink className={classes.navLinkOutline} exact to={props.to}>{props.children}</NavLink></Button></Typography>
      )
    }
    return (
      <Typography variant="button"><Button className={classes.outline}>{props.children}</Button></Typography>
    )
  }
  return (
    <Typography variant="button"><Button>{props.children}</Button></Typography>
  )
}
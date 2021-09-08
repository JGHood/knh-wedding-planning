
import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';
import Environment from '../../images/values/Environment.svg';
import Excellence from '../../images/values/Excellence.svg';
import Inclusive from '../../images/values/Inclusive.svg';
import Fun from '../../images/values/Fun.svg';
import Budget from '../../images/values/Budget.svg';

function getBackgroundColor(color) {
  switch (color) {
    case 'outer': return '#c5cabb';
    case 'middle': return '#9faa92';
    case 'inner': return '#7a8b6a';
    default: return '#c5cabb';
  }
}
const useStyles = makeStyles((theme) => ({
  value: {

    backgroundColor: (props) => getBackgroundColor(props.color),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '30px',
    flexBasis: 0,
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      height: '420px',
    },
  },
  header: {
    fontFamily: 'Cinzel',
    textAlign: 'center',
    marginBottom: '0px',
    fontWeight: '500',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '12px',
          },
  },
  headerContainer: {
    display: 'flex',
    height: '47px',
    alignItems: 'center',
  },
  body: {
    fontFamily: 'serif',
    textAlign: 'center',
  },
  icon: {
    height: '50px',
    marginBottom: '5px',
    [theme.breakpoints.up('sm')]: {
      height: '80px',
      marginBottom: '30px',
    },
  },
}));


export default function Value(props) {
  const classes = useStyles(props);
  function GetCorrectIcon(icon) {
    switch(icon) {
      case 'environment': return <img className={classes.icon} src={Environment} alt='earth with trees' />
      case 'excellence': return <img className={classes.icon} src={Excellence} alt='thumbs up'/>
      case 'inclusivity': return <img className={classes.icon} src={Inclusive} alt='two people hugging' />
      case 'fun': return <img className={classes.icon} src={Fun} alt='party favor'/>
      case 'budget': return <img className={classes.icon} src={Budget} alt='budget sheet'/>
      default: return <img className={classes.icon} src={Environment} alt='earth with trees' />
    }
   }
  return (
    <div className={classes.value}>
      {GetCorrectIcon(props.icon)}
      <div className={classes.headerContainer}>
        <Typography className={classes.header} variant="h3">{props.header}</Typography>
      </div>
      <Typography className={classes.body} variant="body1">{props.children}</Typography>
    </div>
  )
}
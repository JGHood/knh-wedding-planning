import { makeStyles } from '@material-ui/core/styles';
import MeetKristen from '../../images/MeetKristen.svg';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

var ArborL = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FArbor%2FArbor-L.jpg?alt=media&token=9d56a145-c5c5-436a-b7df-e6077605aa56";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    marginTop: '40px',
    width: '100%',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  textContainer: {
    width: '100%',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    height: '250px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontSize: '12px',
    padding: '16px',
    paddingTop: '0',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      padding: '24px',
      height: '410px',
      fontSize: '20px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '250px',
    fontSize: '20px',
    display: 'flex',
    padding: '24px',
    alignItems: 'center',
    background: `url(${ArborL}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '410px',
      width: '40%',
    },
  },
  text: {
    lineHeight: '20px',
    marginTop: '50px',
    paddingLeft: '24px',
    [theme.breakpoints.up('sm')]: {
      lineHeight: '28px',
    },

  },
  textBox: {
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
  },
  readMore: {
    fontFamily: 'Cinzel',
    paddingLeft: '12px',
    color: theme.palette.secondary.main,
    marginTop: '5px',
    textDecoration: 'none',
  }
}));
export default function QuoteBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.imageContainer}>
      </div>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
          <Typography variant="body1" className={classes.text}>
          Text coming soon!
          </Typography>
          <div className={classes.readMore}>
          <Typography variant="body1"><NavLink className={classes.readMore} exact to="/about">Read More About Kristen →</NavLink></Typography>
          </div>
        </span>
      </div>
      <div>
      </div>
    </div>

  )
}
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
    backgroundColor: '#344F1F',
    color: 'white',
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
      width: '48%',
      minWidth: '48%',
      marginLeft: '2%',
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
      marginRight: '2%',
      height: '410px',
    },
  },
  meetKristen: {
    marginTop: '0px',
    position: 'relative',
    top: '60px',
    height: '55px',
    [theme.breakpoints.up('sm')]: {
      height: '120px',
      top: '40px',
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
export default function MeetKristenBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.imageContainer}>
      </div>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
        <img className={classes.meetKristen} alt="Meet Kristen" src={MeetKristen} />
          <Typography variant="body1" className={classes.text}>
          Meet owner and lead planner of Green Bee Weddings, based out of Denver, Colorado. 
          Kristen is passionate, talented, driven, and brings a smile to everything she does. 
          With her background in environmental sociology and education ...
          </Typography>
          <div className={classes.readMore}>
          <Typography variant="body1"><NavLink className={classes.readMore} exact to="/about">Read More →</NavLink></Typography>
          </div>
        </span>
      </div>
      <div>
      </div>
    </div>

  )
}
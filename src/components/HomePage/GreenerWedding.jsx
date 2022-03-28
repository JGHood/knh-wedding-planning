import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";

var Vase = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FVase.webp?alt=media&token=511d037b-cf39-4f9a-8808-3793d4e3f334";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '60px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  innerContainer: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
    marginBottom: '60px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  textContainer: {
    width: '100%',
    backgroundColor: theme.palette.bg.main,
    alignItems: 'center',
    padding: '24px',
    paddingBottom: 0,
    paddingTop: '15px',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      minWidth: '60%',
      height: '420px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '200px',
    fontSize: '20px',
    padding: '24px',
    alignItems: 'center',
    background: `url(${Vase}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: '420px',
    },
  },
  textBox: {
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
    width: '100%',
  },
  learn: {
    display: 'inline-block',
    paddingTop: '10px',
    paddingLeft: '55px',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
      paddingLeft: '35px',
    },
  },
  areYou: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    letterSpacing: '2px',
  },
  head: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width: '100%',
    fontFamily: 'Cinzel'
  },
  greener: {
    color: theme.palette.primary.main
  },
  p: {
    paddingBottom: '10px',
    letterSpacing: '1px',
    lineHeight: '22px',
    fontFamily: 'serif',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    marginBottom: '30px',
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    fontFamily: 'Cinzel',
    marginRight: '20px',
    width: '40%',
    minHeight: '80px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  nav: {
    color: theme.palette.common.white,
    textDecoration: 'none',
  },
  accent: {
    minHeight: '20px',
    backgroundColor: theme.palette.tertiary.main,
    marginTop: '40px',
    display: 'flex',
    alignSelf: 'center',
    width: '90%',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  }
}));
export default function GreenerWedding() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bannerContainer}>
              <div className={classes.accent} />
        <div className={classes.innerContainer}>
        <div className={classes.textContainer}>
          <span className={classes.textBox}>
            <Typography variant="h3" className={classes.areYou}>
              Are you wanting to make
            </Typography>
            <Typography variant="h2" className={classes.head}>
              <b>your wedding <span className={classes.greener}>greener?</span></b>
            </Typography>
            <hr />
            <Typography variant="body1" className={classes.p}>
              You've come to the right place! Here at Green Bee Weddings, we specialize in planning and coordinating beautiful, memorable, and stress-free weddings with an emphasis on reducing waste and supporting our local community.
            </Typography>
            <Typography variant="body1" className={classes.p}>
              You don't have to compromise your dream wedding for being eco-friendly and we're here to help. Check out our services below and drop us a line to chat more!
            </Typography>
            <Typography variant="body1" className={classes.p}>
              In the meantime, grab your copy of the <b>free</b> Green Wedding Guide down below!
            </Typography>
          </span>
          <div className={classes.btnGroup}>
            <Button to="/contact" className={classes.btn}><NavLink className={classes.nav} to="contact">Request Free Consultation</NavLink></Button>
            <Button to="/green-wedding-guide" className={classes.btn}><NavLink className={classes.nav} to="green-wedding-guide">Green Wedding Guide</NavLink></Button>
          </div>
        </div>
        <div className={classes.imageContainer}>
        </div>
        </div>
      </div>
    </>

  )
}
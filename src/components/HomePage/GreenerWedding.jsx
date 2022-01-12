import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GBWButton from '../GBWButton';

var CoupleBouquet = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FCoupleBouquet.webp?alt=media&token=897a55c7-9e05-4e87-a10b-b0191aec28d3";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    width: '100%',
    display: 'flex',
    marginBottom: '60px',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
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
      height: '460px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '200px',
    fontSize: '20px',
    padding: '24px',
    alignItems: 'center',
    background: `url(${CoupleBouquet}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: '460px',
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
    width:'100%',
    letterSpacing: '2px',
  },
  head: {
    textAlign: 'center',
    textTransform: 'uppercase',
    width:'100%',
    fontFamily: 'Cinzel'
  },
  greener: {
    color: theme.palette.primary.main
  },
  p: {
    paddingBottom: '10px',
    letterSpacing: '1px',
    lineHeight: '22px',
  },
  btnGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  btn: {
    fontFamily: 'Cinzel !important',
    marginRight: '20px',
    width: '200px',
    minHeight: '200px',
  },
  accent: {
    minHeight: '20px',
    backgroundColor: theme.palette.tertiary.main,
    marginTop: '40px',
  }
}));
export default function GreenerWedding() {
  const classes = useStyles();
  return (
    <>
          <div className={classes.accent} />
    <div className={classes.bannerContainer}>
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
          In the meantime, grab your copy of the Green Wedding Guide down below!
          </Typography>
        </span>
        <div className={classes.btnGroup}>
          <GBWButton className={classes.btn} variety="green">Get In Touch</GBWButton>
          <GBWButton className={classes.btn} variety="green">Green wedding Guide</GBWButton>
        </div>
      </div>
      <div className={classes.imageContainer}>
      </div>
      <div>
      </div>
    </div>
    </>

  )
}
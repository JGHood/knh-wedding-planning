import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GBWButton from '../GBWButton';

var CoupleBouquet = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FCoupleBouquet.webp?alt=media&token=897a55c7-9e05-4e87-a10b-b0191aec28d3";
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
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    height: '200px',
    display: 'flex',
    alignItems: 'center',

    padding: '24px',
    paddingRight: '48px',
    paddingTop: '15px',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      width: '50%',
      minWidth: '50%',
      height: '410px',
      fontSize: '20px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '200px',
    fontSize: '20px',
    display: 'flex',
    padding: '24px',
    alignItems: 'center',
    background: `url(${CoupleBouquet}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '410px',
    },
  },
  weAre: {
    marginRight: '3px',
    fontFamily: 'Smooch',
    fontSize: '48px',
    position: 'relative',
    top: '37px',
    [theme.breakpoints.up('sm')]: {
      top: '45px',
    },
  },
  text: {
    marginLeft: '55px',
    lineHeight: '20px',
    textIndent: '80px',
    letterSpacing: '1.7px',
    [theme.breakpoints.up('sm')]: {
      lineHeight: '28px',
      textIndent: '80px',
    },

  },
  textBox: {
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
  },
  learn: {
    display: 'inline-block',
    paddingTop: '10px',
    paddingLeft: '55px',
    [theme.breakpoints.up('sm')]: {
      display: 'inline',
      paddingLeft: '35px',
    },
  }
}));
export default function HomeBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
          <Typography className={classes.weAre}>
            We are
          </Typography>
          <Typography variant="body1" className={classes.text}>
            dedicated to celebrating your unique love story while giving back to our community and planet through stress-free planning and coordination.
            <GBWButton to="about" variant="body1" className={classes.learn} variety="black">Learn How</GBWButton>
          </Typography>

        </span>
      </div>
      <div className={classes.imageContainer}>
      </div>
      <div>
      </div>
    </div>

  )
}
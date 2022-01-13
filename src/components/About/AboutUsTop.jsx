import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

var TwirlingCouple = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FTwirling%20Couple.webp?alt=media&token=36b11451-4340-44db-9701-e1fddcccbdf7";
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
      height: '350px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '200px',
    fontSize: '20px',
    padding: '24px',
    alignItems: 'center',
    background: `url(${TwirlingCouple}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: '350px',
    },
  },
  textBox: {
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
    width: '100%',
  },
  head: {
    textTransform: 'uppercase',
    width:'100%',
    fontFamily: 'Cinzel',
    letterSpacing: '3px',
  },
  greener: {
    color: theme.palette.primary.main
  },
  smallHead: {
    letterSpacing: '2px',
    lineHeight: '22px',
    fontFamily: 'serif'
  },
  header: {
    minHeight: '20px',
    backgroundColor: theme.palette.tertiary.main,
    marginTop: '40px',
    padding: '40px 20px 5px 30px'
  }, 
  p: {
    padding: '15px 30px'
  }
}));
export default function AboutUsTop() {
  const classes = useStyles();
  return (
    <>
          <div className={classes.header}>
            <Typography variant="body1" className={classes.smallHead}>
                Green Bee is changing
            </Typography>
            <Typography variant="h2" className={classes.head}>
                The Way Weddings Work.
            </Typography>
          </div>
    <div className={classes.bannerContainer}>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
          <Typography variant="h3" className={classes.p}>
          You don’t need to sacrifice having a fun, memorable, and affordable wedding for being ethical and sustainable. 
          </Typography>
          <Typography variant="h3" className={classes.p}>
          We are thrilled to bring your ideas to life while working together to reduce waste, support local business, and positively impact our community.
          </Typography>
        </span>
      </div>
      <div className={classes.imageContainer}>
      </div>
      <div>
      </div>
    </div>
    </>

  )
}
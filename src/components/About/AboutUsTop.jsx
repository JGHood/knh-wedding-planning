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
      height: '600px',
    },
  },
  imageContainer: {
    color: 'white',
    height: '300px',
    fontSize: '20px',
    padding: '24px',
    alignItems: 'center',
    background: `url(${TwirlingCouple}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      minHeight: '600px',
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
    padding: '4px 30px'
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
          <Typography variant="body1" className={classes.p}>
              You don’t need to sacrifice having a fun, memorable, and affordable wedding for being ethical and sustainable! We are thrilled to bring your ideas to life while working together to reduce waste, support local business, and positively impact our community.
          </Typography>
          <Typography variant="h4" className={classes.p}>
              <b>What is sustainable wedding planning?</b>
          </Typography>
          <Typography variant="body1" className={classes.p}>
              As sustainable wedding planners, we focus on all core tenants of sustainability: social, economic, and environmental. We do this in many ways, such as:
              <ol>
                <li>Partnering with local businesses to keep money local and offer better prices to couples</li>
                <li>Partnering with like-minded venues and vendors who implement their own sustainable practices</li>
                <li>Reducing enviromental impact by offering planet-friendly twists on classic wedding traditions</li>
                <li>Managing event waste streams efficiently with venues and vendors to ensure we're recycling and composting where we can</li>
                <li>Minimizing waste by finding sustainably sourced or reusable alternatives to common decoration items</li>
                <li>Tracking the carbon footprint of travel of wedding guests</li>
                <li>Seeking out local, minority owned vendors to spread out your event's economic impact</li>
              </ol>
              While your vision will always come first, these and countless other sustainable methods we use reduce the impact of your wedding, allowing you to focus fully on your day of celebration while knowing you're celebrating the planet and your community, too!
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
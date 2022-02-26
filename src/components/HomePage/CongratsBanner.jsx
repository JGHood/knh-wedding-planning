import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GBWButton from '../GBWButton';

var KristenHeadshot = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FKristenHeadshot.webp?alt=media&token=74f6224d-2e86-4cd6-b685-42b4f19fecce";
const useStyles = makeStyles((theme) => ({
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '200px',
  },
  innerContainer: {
    width: '90%',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      width: '100%',
    }
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
      width: '100%',
      paddingLeft: '40%',
    },
  },
  imageContainer: {
    alignItems: 'center',
    background: `url(${KristenHeadshot}) no-repeat center center`,
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
      height: 0,
      paddingBottom: '25%',
      borderRadius: '0px',
      borderWidth: '4px',
      borderColor: theme.palette.tertiary.main,
      border: 'solid',
      fontSize: '20px',
      padding: '24px',
      position: 'absolute',
      top: '-40px',
      left: '40px',
      zIndex: 1,
    },
    [theme.breakpoints.up('xl')]: {
      width: '15%',
      paddingBottom: '15%',
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
    letterSpacing: '2.5px',
    width: '100%',
    fontFamily: 'Smooch'
  },
  greener: {
    color: theme.palette.primary.main
  },
  p: {
    padding: '40px 20px',
    letterSpacing: '1px',
    lineHeight: '22px',
  },
  signature: {
    textAlign: 'right',
    letterSpacing: '2.5px',
    width: '100%',
    fontFamily: 'Smooch',
    paddingRight: '20px',
  },
  sig: {
    textAlign: 'right',
    letterSpacing: '1px',
    width: '100%',
  }
}));
export default function CongratsBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.innerContainer}>
      <div className={classes.imageContainer}>
      </div>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
          <Typography variant="h2" className={classes.head}>
            Congratulations on your Engagement!
          </Typography>
          <hr />
          <Typography variant="h6" className={classes.p}>
            This next stage in your life is an exciting and beautiful one as your relationship evolves, but can also be stressful and overwhelming with planning the wedding that comes along with it.
            At Green Bee, we're excited to help make the process as smooth as possible so that you can focus on what matters.
          </Typography>
          <Typography variant="h2" className={classes.signature}>
            - Kristen
          </Typography>
          <Typography variant="body1" className={classes.sig}>
            Founder + Lead Planner
          </Typography>
        </span>
      </div>
      </div>
    </div>
  )
}
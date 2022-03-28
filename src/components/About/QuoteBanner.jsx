import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { Typography } from '@material-ui/core';

var KristenHeadshot = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FKristenHeadshot.webp?alt=media&token=74f6224d-2e86-4cd6-b685-42b4f19fecce";
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
    height: '180px',
    fontSize: '20px',
    display: 'flex',
    padding: '24px',
    alignItems: 'center',
    background: `url(${KristenHeadshot}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      height: '410px',
      width: '40%',
    },
  },
  text: {
    fontFamily: 'Montserrat',
    lineHeight: '20px',
    marginTop: '20px',
    paddingLeft: '24px',
    color: theme.palette.common.black,
    [theme.breakpoints.up('sm')]: {
      lineHeight: '28px',
    },
  },
  head: {
    color: theme.palette.common.black,
    fontFamily: "Cinzel",
  },
  textBox: {
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
    },
  },
}));
export default function QuoteBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.imageContainer}>
      </div>
      <div className={classes.textContainer}>
      <Typography variant="h2" className={classes.head}>
          About Kristen, Owner
      </Typography>
        <span className={classes.textBox}>
          <Typography variant="body1" className={classes.text}>
            Meet owner and lead planner of Green Bee Weddings, based out of Denver, Colorado. Kristen is passionate, talented, driven, and brings a smile to everything she does. With her background in environmental sociology and education, she is eager to capture your love story in a way that respects our planet and community.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Kristen started Green Bee as a sustainable wedding planner with a vision of helping couples celebrate not only their love, but their community and planet, too. As we grow increasingly conscious of our personal impacts on the world,
            Kristen saw that she could use her background to help passionate couples plan their celebrations through a sustainable lens, allowing them to focus fully on their special day.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            When not doing wedding stuff, Kristen can be found in the mountains on a snowboard, on a hike with her dog Ollie and husband James, or playing video games with friends.
          </Typography>
        </span>
      </div>
      <div>
      </div>
    </div>

  )
}
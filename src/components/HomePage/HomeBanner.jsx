import { makeStyles } from '@material-ui/core/styles';
import WeAre from '../../images/WeAre.svg';

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
    height: '200px',
    display: 'flex',
    alignItems: 'center',

    padding: '24px',
    paddingRight: '48px',
    paddingTop: '0',
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      width: '48%',
      minWidth: '48%',
      marginRight: '2%',
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
    background: `url(${ArborL}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '2%',
      height: '410px',
    },
  },
  weAre: {
    marginTop: '0px',
    position: 'relative',
    top: '38px',
    height: '80px',
    [theme.breakpoints.up('sm')]: {
      height: '100px',
      top: '50px',
    },
  },
  text: {
    marginLeft: '50px',
    lineHeight: '20px',
    textIndent: '50px',
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
}));
export default function HomeBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.textContainer}>
        <span className={classes.textBox}>
          <img className={classes.weAre} alt="We are" src={WeAre} />
          <div className={classes.text}>
            dedicated to celebrating your unique love story while giving back to our community and planet through stress-free planning and coordination.
          </div>
        </span>
      </div>
      <div className={classes.imageContainer}>
      </div>
      <div>
      </div>
    </div>

  )
}
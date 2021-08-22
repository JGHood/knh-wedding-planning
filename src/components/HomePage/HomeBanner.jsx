import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bannerContainer: {
    marginTop: '40px',
    width: '45%',
  },
  textContainer: {
    backgroundColor: '#344F1F',
    color: 'white',
    height: '430px',
    fontSize: '20px',
    padding: '24px',
    display: 'flex',
    alignItems: 'center'
  },

});

export default function HomeBanner() {
  const classes = useStyles();
  return (
    <div className={classes.bannerContainer}>
      <div className={classes.textContainer}>
        We are dedicated to celebrating your unique love story while
        giving back to our community and planet through stress-free planning and coordination.
      </div>
      <div>

      </div>
    </div>

  )
}
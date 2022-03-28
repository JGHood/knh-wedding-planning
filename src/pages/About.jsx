
import { makeStyles, Typography } from '@material-ui/core';
import Value from '../components/About/Value';
import AboutUsTop from '../components/About/AboutUsTop';
import QuoteBanner from '../components/About/QuoteBanner';
import {Helmet} from "react-helmet";

const PaperSigning = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FPaper%20Signing.webp?alt=media&token=ba62169e-f884-4306-8b68-36bba544e335";
const useStyles = makeStyles((theme) => ({
  valuesContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  valuesHeader: {
    fontFamily: 'Cinzel',
    margin: '40px',
    color: theme.palette.primary.main,
  },
  values: {
    width: '100%',
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  },
  button: {
    marginTop: '50px',
    marginBottom: '50px',
  },
  header: {
    display: 'flex',
    height: '200px',
    fontSize: '20px',
    padding: '24px',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    background: `url(${PaperSigning}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
      height: '300px',
  }
  },
  head: {
    fontFamily: 'Cinzel',
  }
}));
export default function About() {
  const classes = useStyles();
  return (
    <>
    <Helmet>
      <title>Our Values - Colorado's Top Sustainable Wedding Planners</title>
      <meta name="description" content="Green Bee holds true to its core values to help you plan your dream wedding with sustainability in mind." />
    </Helmet>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.head}>About Us</Typography>
      </div>
      <AboutUsTop />
      <div className={classes.valuesContainer}>
        <Typography className={classes.valuesHeader} variant="h2"> Green Bee Values </Typography>
        <div className={classes.values}>
          <Value
            color="outer"
            icon="environment"
            header="Environmental & Social Integrity"
          >
            We pride ourselves in giving
            our best work 100% of the time and
            are always looking for ways to improve
            and innovate.
          </Value>
          <Value
            color="middle"
            icon="excellence"
            header="Excellence"
          >
            We pride ourselves in giving our best work 100% of the time and are always looking for ways to improve and innovate.
          </Value>
          <Value
            color="inner"
            icon="inclusivity"
            header="Inclusivity"
          >
            We welcome all--regardless of race, sexuality, gender, or ability. We firmly believe that we cannot build a sustainable community together without everyone involved.
          </Value>
          <Value
            color="middle"
            icon="fun"
            header="Fun"
          >
            We know that planning a wedding is stressful above all else. We’re here to empower you to take on this huge milestone and ultimately have the time of your life celebrating your love.
          </Value>
          <Value
            color="outer"
            icon="budget"
            header="Budget-Focused"
          >
            We meet you where you’re at and help you prioritize what you want most at your wedding.
          </Value>
        </div>
        {/*<GBWButton
          variety="solid"
          to="/guide"
        >Download your FREE Green <br /> Wedding Guide
        </GBWButton>*/}
        <QuoteBanner />
      </div>
    </>
  )
}

import Button from '@material-ui/core/Button';
import { makeStyles, Typography } from '@material-ui/core';
import Value from '../components/About/Value';
import AboutUs from '../images/AboutUs.svg';
import GBWButton from '../components/GBWButton';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: '#decf8d',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
  },
  headerLogo: {
    height: '160px',
    [theme.breakpoints.up('sm')]: {
      height: '280px',
    },
    margin: '20px',
  },
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
  }
}));
export default function About() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <img className={classes.headerLogo} alt="Header logo reading 'About Us'" src={AboutUs} />
      </div>
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
        <GBWButton
          type="solid"
          to="/guide"
        >Download your FREE Green <br /> Wedding Guide</GBWButton>
      </div>
    </>
  )
}
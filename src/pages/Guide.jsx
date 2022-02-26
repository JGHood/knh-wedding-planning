import { useEffect } from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import { Helmet } from "react-helmet";
import GreenGuide from '../pdf/GreenWeddingGuide_GreenBeeWeddings.pdf';

const TableBouquet = 'https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FTableBouquet.webp?alt=media&token=76669535-3cd6-460e-9b6b-c02b51698cd3';
const useStyles = makeStyles((theme) => ({
  page: {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyItems: 'center',
  alignItems: 'center',
  },
  head: {
    fontFamily: 'Cinzel',
    textAlign: 'center',
    marginTop: '50px',
    marginBottom: '40px',
  },
  header: {
    background: `url(${TableBouquet}) no-repeat center center`,
    backgroundSize: 'cover',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      backgroundAttachment: 'fixed',
      height: '300px',
  }
  },
  estimateParagraph: {
    width: '95%',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    },
    textAlign: 'center',
  },
  badge: {
    marginTop: '40px',
    [theme.breakpoints.up('sm')]: {
      width: '50%'
    },
    backgroundColor: theme.palette.SeaFoamGreen.main,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '30px',
    marginBottom: '40px',
  },
  badgeHead: {
    marginTop: '5px',
    fontFamily: 'Smooch',
    marginBottom: '15px',
  },
  btn: {
    border: `4px solid ${theme.palette.tertiary.main}`,
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: theme.palette.tertiary.main,
   },
  }
}));
export default function Guide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Free Green Wedding Guide - Plan Your Sustainable Wedding</title>
        <meta name="description" content="Green Bee Sustainable Wedding's free green wedding guide will help you plan your dream wedding while being concious of our environment." />
      </Helmet>
      <div className={classes.header}>
      </div>
      <div className={classes.page}>
        <Typography variant="h3" className={classes.head}>Looking To Make Your Wedding More Green?</Typography>
        <Typography variant="body1" className={classes.estimateParagraph}>The Green Bride Guide estimates that each wedding produces an average of 400lbs of trash. Multiply that by the estimated 2.3 million weddings in the US each year, and you've got almost <b>1 billion pounds of trash.</b></Typography>
        <div className={classes.badge}>
        <Typography variant="h2" className={classes.badgeHead}>We Can Do Better.</Typography>
        <Typography variant="body1" className={classes.estimateParagraph}>I've gathered our best tips, tricks, ideas, and inspiration for planning a wedding that will help you reduce waste, minimize your carbon footprint, and support your local community while planning and celebrating your love.</Typography>
        </div>  
        <Button href={GreenGuide} className={classes.btn}>Download Now</Button>
      </div>
    </>
  )
}

import { makeStyles, Typography } from '@material-ui/core';
import AboutUsTop from '../components/About/AboutUsTop';
import { Helmet } from "react-helmet";

const PaperSigning = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FPaper%20Signing.webp?alt=media&token=ba62169e-f884-4306-8b68-36bba544e335";
const useStyles = makeStyles((theme) => ({
}));
export default function Guide() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Free Green Wedding Guide - Plan Your Sustainable Wedding</title>
        <meta name="description" content="Green Bee Sustainable Wedding's free green wedding guide will help you plan your dream wedding while beeing concious of our environment!" />
      </Helmet>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.head}>About Us</Typography>
      </div>
      <AboutUsTop />
    </>
  )
}
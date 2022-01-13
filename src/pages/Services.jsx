import { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ServicesTable from '../components/ServicesPage/ServicesTable';
import ServicesAccordion from '../components/ServicesPage/ServicesAccordion';
import { useLocation } from 'react-router';
import { Typography } from '@material-ui/core';
import { Helmet } from "react-helmet";

const GreenTableSetting = "https://firebasestorage.googleapis.com/v0/b/knh-wedding-planning.appspot.com/o/carousel-images%2FGreenTableSetting.jpg?alt=media&token=ddd670a7-3498-4d3f-b5b1-7afcb8a16998";
const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
    paragraph: {
        textAlign: 'center',
        marginTop: '16px',
    },
    text: {
        marginTop: '24px',
        marginBottom: '16px',
        fontStyle: 'italic'
    },
    difference: {
        marginTop: '80px',
        width: '90%',
        [theme.breakpoints.up('sm')]: {
            width: '40%',
        },
        textAlign: 'center',
    },
    changing: {
        fontFamily: 'serif',
        letterSpacing: 0.8,
        lineHeight: 2,
        marginTop: 20,
    },
    header: {
        display: 'flex',
        fontSize: '20px',
        height: '200px',
        padding: '24px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        background: `url(${GreenTableSetting}) no-repeat center center`,
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


export default function Services() {
    const classes = useStyles();
    const location = useLocation();
    useEffect(() => {
        if (window.location.hash === "#compare") {
            const compare = document.getElementById('compare');
            window.scroll({ top: compare.offsetTop, behavior: 'smooth' });
        }
    }, [location]);
    return (
        <>
            <Helmet>
                <title>Colorado Wedding Planning Prices- Green Bee Sustainable Weddings</title>
                <meta name="description" content="Green Bee focuses on all aspects of sustainability, including economic. We seek to provide a high value to best utilize your wedding budget!" />
            </Helmet>
            <div className={classes.header}>
                <Typography variant="h1" className={classes.head}>Services</Typography>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.paragraph}>
                    <Typography className={classes.text} variant="body2">
                        Click on the packages below to expand for more information!
                    </Typography>
                    <Typography className={classes.text} variant="body2">
                        Scroll down for a comparison chart of all plans.
                    </Typography>
                </div>
                <ServicesAccordion />
                <ServicesTable />
                <div className={classes.difference}>
                    <Typography variant="h3">
                        <em>
                            What's the difference between a wedding planner
                            and a wedding coordinator?
                        </em>
                    </Typography>
                    <Typography variant="body1" className={classes.changing}>
                        We’re changing the way weddings work. You don’t need to sacrifice
                        your unique style for having an ethical, sustainable wedding--or
                        vice versa. With over 4 years of event and conference planning,
                        I am thrilled to bring your love story to life in your wedding while
                        helping you reduce waste, support local business,
                    </Typography>
                </div>
            </div>
        </>
    );
}
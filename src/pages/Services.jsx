import { useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ServicesTable from '../components/ServicesPage/ServicesTable';
import ServicesAccordion from '../components/ServicesPage/ServicesAccordion';
import { useLocation } from 'react-router';
import OurServices from '../images/OurServices.svg';
import GBWButton from '../components/GBWButton';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    flexContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column"
    },
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
            <div className={classes.header}>
                <img className={classes.headerLogo} alt="Our Services" src={OurServices} />
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
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Typography, makeStyles } from '@material-ui/core';
import GBWButton from './GBWButton';

const useStyles = makeStyles((theme) => ({
    footer: {
        marginTop: '64px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#7a8b6a',
        paddingTop: '36px',
        
    },
    socialMediaIcons: {
        marginRight: "0.5rem",
    },
    iconContainer: {
        marginTop: '16px',
    },
    emailLink: {
        color: 'black',
        transition: '0.2s',
        '&:hover': {
           color: theme.palette.secondary.main,
        },
    },
    styledLink: {
        color: 'black',
        textDecoration: 'none',
        marginBottom: 0,
        marginLeft: '8px',
        marginRight: '8px',
        paddingTop: '8px',
        paddingBottom: '11px',
        fontFamily: 'Cinzel',
        fontSize: '21px',
        transition: '0.2s',
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    copyright: {
        marginTop: '32px',
    }
}));
export default function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Typography>405.657.0535</Typography>
            <Typography><a className={classes.emailLink} href="mailto:kristen@greenbeewed.com">kristen@greenbeewed.com</a></Typography>
            <div className={classes.iconContainer}>
                <a className={classes.styledLink} aria-label="Link to Pinterest Board" rel="noreferrer" href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons} /></a>
                <a className={classes.styledLink} aria-label="Link to Facebook Page" rel="noreferrer" href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons} /></a>
                <a className={classes.styledLink} aria-label="Link to Instagram Page" rel="noreferrer" href="https://www.instagram.com" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons} /></a>
            </div>
            <GBWButton type="outline" to="/contact">Book a free meet + greet!</GBWButton>
            <Typography className={classes.copyright}>© 2021 Green Bee Weddings</Typography>
        </div>
    )
}

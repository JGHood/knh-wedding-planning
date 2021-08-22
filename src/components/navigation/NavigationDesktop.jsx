import { useContext } from 'react';
import NavLink from 'react-router-dom/NavLink';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { signOut } from '../../firebase';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/Logo.svg';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { AuthContext } from '../../Authentication';

export default function NavigationDesktop() {
    const smallDesktop = useMediaQuery('(max-width:980px)');
    const { isAuthenticated } = useContext(AuthContext);
    const theme = useTheme();
    const useStyles = makeStyles({
        socialMediaIcons: {
            marginRight: "0.5rem",
            "&:hover": {
                color: 'blue',
            },
        },
        styledLink: {
            color: 'white',
            textDecoration: 'none',
            marginBottom: 0,
            marginLeft: '8px',
            marginRight: '8px',
            paddingTop: '8px',
            paddingBottom: '11px',
            fontFamily: 'Cinzel',
            fontSize: '21px',
        },
        styledLinkActive: {
            color: theme.palette.secondary.main,
            paddingBottom: '8px',
            paddingTop: '8px',
            borderBottom: '5px',
            borderBottomStyle: 'solid',
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
        },
        linkContainer: {
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '15px',
            paddingBottom: '15px',
        }
    });
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ marginBottom: 0, paddingBottom: 0 }}>
            <Toolbar style={{ marginBottom: 0, paddingBottom: 0 }}>
                <div className={classes.headerContainer}>
                <div className={classes.linkContainer}>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/'>HOME</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/services'>SERVICES</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/about'>ABOUT</NavLink>
                </div>

                <img alt="logo of a plant and a bee" src={Logo} style={{ height: "120px", margin: "20px" }} />

                <div className={classes.linkContainer}>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/gallery'>GALLERY</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/blog'>BLOG</NavLink>
                    <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/contact'>CONTACT</NavLink>
                    {/*{!isAuthenticated && <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive}  to='/signin'><Typography variant="p">SIGN IN</Typography></NavLink>}
                        {isAuthenticated && <NavLink className={classes.styledLink} onClick={() => {signOut(); window.location.reload()}} to="/"><Typography variant="p">SIGN OUT</Typography></NavLink>}*/}

                </div>
                </div>
            </Toolbar>
        </AppBar>
    )
}
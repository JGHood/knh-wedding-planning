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
    const smallDesktop = useMediaQuery('(max-width:1280px)');
    const {isAuthenticated} = useContext(AuthContext);
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
    fontSize: '16px',
    }, 
    styledLinkActive: {
        color: theme.palette.secondary.main,
        paddingBottom: '15px',
        borderBottom: '5px',
        borderBottomStyle: 'solid',
    }
        });
    const classes = useStyles();
    return (
        <AppBar position="static" style={{marginBottom:0, paddingBottom:0}}>
            <Toolbar style={{marginBottom:0, paddingBottom:0}}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item lg={3} >
                        <div>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons}></PinterestIcon></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.twitter.com" target="_blank"><TwitterIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.instagram.com" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                        </div>
                    </Grid>
                    <Grid
                        container
                        item
                        lg={6}
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid 
                            item 
                            xs={5}
                            container
                            direction="row"
                            alignItems="baseline"
                            justify="flex-end">
                            <Typography variant="h4" color="secondary">Green Bee</Typography>
                        </Grid>
                        <Grid 
                            item 
                            container
                            xs={2}
                            direction="row"
                            alignItems="center"
                            justify="center"
                        >
                            <img alt="logo of a plant and a bee" src={Logo} style={{ height: "120px", margin: "20px" }} />
                        </Grid>
                        <Grid item xs={5}>
                            <Typography variant="h4" color="secondary">Weddings</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        lg={3}
                        direction="row"
                        alignItems="baseline"
                        justify={smallDesktop ? "center" : "flex-end"}
                        style={{ height: "100%" }}
                    >
                        <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/'><Typography variant="body1">HOME</Typography></NavLink>
                        <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/matcher'><Typography variant="body1">TOOLS</Typography></NavLink>
                        <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive} to='/services'><Typography variant="body1">SERVICES</Typography></NavLink>
                        {/*{!isAuthenticated && <NavLink className={classes.styledLink} exact activeClassName={classes.styledLinkActive}  to='/signin'><Typography variant="p">SIGN IN</Typography></NavLink>}
                        {isAuthenticated && <NavLink className={classes.styledLink} onClick={() => {signOut(); window.location.reload()}} to="/"><Typography variant="p">SIGN OUT</Typography></NavLink>}*/}
                    </Grid>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
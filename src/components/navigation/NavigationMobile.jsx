import {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Typography, Drawer } from '@material-ui/core';
import { signOut } from '../../firebase';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/Logo.svg';
import PinterestIcon from '@material-ui/icons/Pinterest';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import { AuthContext } from '../../Authentication';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavigationMobile() {

    const {isAuthenticated} = useContext(AuthContext);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setDrawerOpen(open);
      };
    
    const theme = useTheme();
    const useStyles = makeStyles({
    socialMediaIcons: {
        color: theme.palette.primary.main,
        marginRight: "0.5rem",
        "&:hover": {
            color: theme.palette.secondary.main,
        },
    },
    styledLink: {
        textDecoration: "none",
        color: theme.palette.primary.main,
    },
    styledLinkActive: {
        color: theme.palette.secondary.main,
        fontWeight: "bold",
    }
        });
    const classes = useStyles();
    return (
        <>
        <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >

                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/'><Typography variant="body1">HOME</Typography></NavLink>
                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/matcher'><Typography variant="body1">TOOLS</Typography></NavLink>
                        {!isAuthenticated && <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/signin'><Typography variant="body1">SIGN IN</Typography></NavLink>}
                        {isAuthenticated && <NavLink className={classes.styledLink} onClick={() => {signOut(); toggleDrawer(false); window.location.reload()}} activeClassName={classes.styledLinkActive} to="/"><Typography variant="p">SIGN OUT</Typography></NavLink>}
                        <Grid item lg={3} >
                        <div style={{marginTop:"2rem"}}>                          
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons}></PinterestIcon></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.twitter.com" target="_blank"><TwitterIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.instagram.com" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                        </div>
                    </Grid>
                    </Grid>
            </Drawer>
        <AppBar position="static" style={{marginBottom:0, paddingBottom:0}}>
            
            <Toolbar style={{marginBottom:0, paddingBottom:0}}>
                    <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                    >
                        <Grid 
                            item 
                            container
                            alignItems="flex-start"
                            justify= "center"
                        >
                            <Grid item xs={2}/>
                            <Grid item container justify="center" xs={8}><img src={Logo} style={{ height: "120px", margin: "20px" }} /></Grid>
                            <Grid item xs={2} container justify="flex-end"  ><MenuIcon fontSize="large" color="secondary" onClick={toggleDrawer(true)}>Open</MenuIcon></Grid>
                            
                        </Grid>
                        <Grid item >
                            <Typography variant="h4" color="secondary">Green Bee Weddings</Typography>
                        </Grid>
                    </Grid>
            </Toolbar>
        </AppBar>

        </>
    )
}
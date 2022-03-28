import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Typography, Drawer } from '@material-ui/core';
//import { signOut } from '../../firebase';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Logo from '../../images/Logo.svg';
// import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
//import { AuthContext } from '../../Authentication';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@material-ui/icons/Phone';

export default function NavigationMobile() {

    //const {isAuthenticated} = useContext(AuthContext);
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
        color: theme.palette.quinary.main,
        marginRight: "0.5rem",
        "&:hover": {
            color: theme.palette.quaternary.main,
        },
    },
    styledLink: {
        textDecoration: "none",
        color: theme.palette.quinary.main,
        marginTop: '8px',
        fontFamily: 'Cinzel',
    },
    styledLinkActive: {
        color: theme.palette.quaternary.main,
        fontWeight: "bold",
    },
    appBar: {
        marginBottom: 0,
        paddingBottom: 0,
        backgroundColor: theme.palette.quinary.main,
        width: '100%',
    },
    logoContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    businessNameTextContainerLeft: {
        textAlign: 'right'
    },
    title: {
        color: theme.palette.secondary.main,
        fontFamily: 'Cinzel',
    },
    subTitle: {
        color: theme.palette.secondary.main,
        fontFamily: 'Montserrat',
    },
    headerSide: {
        width: '10%',
    },
    headerNav: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'right',
        alignItems: 'right',
        marginLeft: '10px',
    },
    header: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    phone: {
        marginTop: '10px'
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

                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/'><Typography variant="h2">HOME</Typography></NavLink>
                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/services'><Typography variant="h2">SERVICES</Typography></NavLink>
                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/about'><Typography variant="h2">ABOUT US</Typography></NavLink>
                        {/*<NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/gallery'><Typography variant="h2">GALLERY</Typography></NavLink>*/}
                        {/*<NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/blog'><Typography variant="h2">BLOG</Typography></NavLink>*/}
                        <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/contact'><Typography variant="h2">CONTACT</Typography></NavLink>
                        {/*!isAuthenticated && <NavLink className={classes.styledLink} onClick={toggleDrawer(false)} exact activeClassName={classes.styledLinkActive} to='/signin'><Typography variant="body1">SIGN IN</Typography></NavLink>*/}
                        {/*isAuthenticated && <NavLink className={classes.styledLink} onClick={() => {signOut(); toggleDrawer(false); window.location.reload()}} activeClassName={classes.styledLinkActive} to="/"><Typography variant="p">SIGN OUT</Typography></NavLink>*/}
                        <Grid item lg={3} >
                        <div style={{marginTop:"2rem"}}>                          
                           { /* <a className={classes.styledLink} rel="noreferrer" href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons}></PinterestIcon></a>
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons}/></a> */}
                           <a className={classes.styledLink} rel="noreferrer" href="https://www.instagram.com/greenbeewed/" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                        </div>
                    </Grid>
                    </Grid>
            </Drawer>
        <AppBar position="static" className={classes.appBar}>
            <Toolbar style={{marginBottom:0, paddingBottom:0, width:'100%'}}>
                <div className={classes.header}>
                <div className = {classes.headerSide} />
                    <div className={classes.logoContainer}>
                        <div className={classes.businessNameTextContainerLeft}>
                            <Typography variant="h3" className={classes.title}>
                            Green 
                            </Typography>
                            <Typography variant='h4' className={classes.subTitle}>
                            Sustainable
                            </Typography>
                        </div>
                        <NavLink to='/'>
                            <img alt="Website logo: a plant and a bee in a hexagon outline"  src={Logo} style={{ height: "80px", margin: "10px" }} />
                        </NavLink>
                        <div className={classes.businessNameTextContainerRight}>
                            <Typography variant="h3" className={classes.title}>
                            Bee
                            </Typography>
                            <Typography variant='h4' className={classes.subTitle}>
                            Weddings
                            </Typography>
                        </div>
                    </div>
                    <div className = {classes.headerSide}>
                    <div className={classes.headerNav}>
                    <MenuIcon alt="Menu to open navigation" fontSize="large" color="secondary" onClick={toggleDrawer(true)}>Open</MenuIcon>
                    <a href="tel:720-725-2114"><PhoneIcon className={classes.phone} alt="Call Green Bee" color="secondary" /></a>
                    </div>
                    </div>
                </div>
                    {/* <Grid
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
                            <Grid item container justify="center" alignItems='center' xs={8}>
                                <div>
                                <Typography>Green</Typography>
                                <Typography>Sustainable</Typography>
                                </div>
                                <NavLink to="/">
                                    <img alt="Website logo: a plant and a bee in a hexagon outline"  src={Logo} style={{ height: "80px", margin: "10px" }} />
                                </NavLink>
                                <div>
                                <Typography>Bee</Typography>
                                <Typography>Weddings  </Typography>
                                </div>
                                </Grid>
                            <Grid item xs={2} container justify="flex-end"  >
                                <MenuIcon alt="Menu to open navigation" fontSize="large" color="secondary" onClick={toggleDrawer(true)}>Open</MenuIcon>
                                <a href="tel:720-725-2114"><PhoneIcon className={classes.phone} alt="Call Green Bee" color="secondary" /></a>
                            </Grid>
                        </Grid>
                    </Grid> */}
            </Toolbar>
        </AppBar>

        </>
    )
}
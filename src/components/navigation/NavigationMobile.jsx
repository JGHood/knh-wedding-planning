import {useContext, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Typography, Drawer } from '@material-ui/core';
import { signOut } from '../../firebase';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Logo from '../../images/logo.png';
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
    const StyledLinkMobile = styled(NavLink)`
    color: ${theme.palette.primary.main};
    text-decoration: none;
    margin-bottom: 0;
    margin-left: 0.5px;
    margin-right: 0.5px;

    &:hover{
        color: ${theme.palette.secondary.main}
    }
    &.${props => props.activeClassName} {
    color: ${theme.palette.secondary.main};
    font-weight: bold;
    }
    `;

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
        color: "white",
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

                        <StyledLinkMobile onClick={toggleDrawer(false)} exact activeClassName="any" exact to='/'><Typography variant="h5">HOME</Typography></StyledLinkMobile>
                        <StyledLinkMobile onClick={toggleDrawer(false)} exact activeClassName="any" exact to='/matcher'><Typography variant="h5">TOOLS</Typography></StyledLinkMobile>
                        {!isAuthenticated && <StyledLinkMobile onClick={toggleDrawer(false)} exact activeClassName="any" exact to='/signin'><Typography variant="h5">SIGN IN</Typography></StyledLinkMobile>}
                        {isAuthenticated && <StyledLinkMobile onClick={() => {signOut(); toggleDrawer(false); window.location.reload()}} to="/"><Typography variant="p">SIGN OUT</Typography></StyledLinkMobile>}
                        <Grid item lg={3} >
                        <div style={{marginTop:"2rem"}}>                          
                           <a className={classes.styledLink} href="https://www.pinterest.com" target="_blank"><PinterestIcon fontSize="large" className={classes.socialMediaIcons}></PinterestIcon></a>
                           <a className={classes.styledLink} href="https://www.twitter.com" target="_blank"><TwitterIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} href="https://www.facebook.com" target="_blank"><FacebookIcon fontSize="large" className={classes.socialMediaIcons}/></a>
                           <a className={classes.styledLink} href="https://www.instagram.com" target="_blank"><InstagramIcon fontSize="large" className={classes.socialMediaIcons}/></a>
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